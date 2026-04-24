'use client';

import { useState, useEffect } from 'react';
import { Timer, Zap } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
  label: string;
}

export default function CountdownTimer({ targetDate, label }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="glass-card countdown-box animate-fade-in" style={{ 
      padding: '25px 35px', 
      display: 'flex', 
      alignItems: 'center', 
      gap: '30px',
      borderLeft: '4px solid var(--primary)',
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            <Zap size={14} className="animate-pulse" /> {label.toUpperCase()}
         </div>
         <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>MAJOR ENTRANCE 2026</h4>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
         {[
           { val: timeLeft.days, unit: 'D' },
           { val: timeLeft.hours, unit: 'H' },
           { val: timeLeft.mins, unit: 'M' },
           { val: timeLeft.seconds, unit: 'S' }
         ].map((t, i) => (
           <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'monospace', color: 'var(--primary)', lineHeight: 1 }}>
                {t.val.toString().padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#64748b', marginTop: '4px' }}>{t.unit}</div>
           </div>
         ))}
      </div>

      <style jsx>{`
        .countdown-box:hover { transform: translateY(-3px); border-color: var(--primary); }
      `}</style>
    </div>
  );
}
