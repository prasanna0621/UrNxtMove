'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  icon: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {items.map((item, idx) => (
        <div key={idx} className="glass-card" style={{ 
          background: openIndex === idx ? 'var(--card-bg)' : 'var(--secondary)', 
          borderRadius: '20px', 
          border: openIndex === idx ? '1px solid var(--primary)' : '1px solid var(--card-border)', 
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: openIndex === idx ? 'scale(1.02)' : 'scale(1)'
        }}>
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '25px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ fontSize: '1.8rem', background: 'var(--card-bg)', padding: '12px', borderRadius: '16px', border: '1px solid var(--card-border)' }}>{item.icon}</div>
               <span style={{ fontWeight: 800, fontSize: '1.15rem', color: openIndex === idx ? 'var(--primary)' : 'var(--foreground)', transition: 'color 0.3s' }}>{item.question}</span>
            </div>
            {openIndex === idx ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--foreground)" style={{ opacity: 0.5 }} />}
          </button>
          
          <div style={{ 
            maxHeight: openIndex === idx ? '500px' : '0px', 
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', 
            padding: openIndex === idx ? '0 25px 25px 95px' : '0 25px 0 95px',
            color: 'var(--foreground)',
            opacity: openIndex === idx ? 0.8 : 0,
            lineHeight: 1.6
          }}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
