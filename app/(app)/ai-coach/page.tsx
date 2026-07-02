'use client';

import { useState } from 'react';
import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const initialMessages = [
  { role: 'assistant', content: "Good morning, Alex. I looked at yesterday's session — want the summary, or do you want to talk through the GBP/JPY loss first?" },
];

export default function AiCoachPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  function send() {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: 'user', content: input }]);
    setInput('');
    // In production this calls /api/coach, which calls the Anthropic API server-side
    // with the user's recent journal context and streams a response back.
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: "Let's look at the GBP/JPY trade — the entry came 6 minutes after your second loss of the day. That's outside your cooldown rule. Want me to tighten the guardrail automatically?" },
      ]);
    }, 600);
  }

  return (
    <>
      <Topbar title="AI Coach" subtitle="Grounded in your own journal, not generic advice" />
      <div className="mx-auto flex h-[calc(100vh-89px)] max-w-[720px] flex-col px-8 py-7">
        <Card className="flex flex-1 flex-col overflow-hidden !p-0">
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-[16px] px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user' ? 'bg-primary text-white' : 'bg-surface text-headline'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2.5 border-t border-border p-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about a trade, a pattern, or today's plan..."
              className="flex-1 rounded-sm border border-border px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
            <Button onClick={send}>Send</Button>
          </div>
        </Card>
      </div>
    </>
  );
}
