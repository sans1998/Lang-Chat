'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function PracticePage() {
  const t = useTranslations('Practice');
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    if (!userInput.trim()) {
      return;
    }

    // Add user message
    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // TODO: Integrate with AI API
    // Add AI response placeholder
    setMessages([...newMessages, {
      role: 'assistant',
      content: 'This is a placeholder AI response. You need to integrate with your preferred AI API.',
    }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>

      <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-[60vh] overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg ${
              msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder={t('inputPlaceholder')}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {t('send')}
        </button>
      </div>
    </div>
  );
}
