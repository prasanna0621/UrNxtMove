'use client';

import { Calendar, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const DEADLINES = [
  { id: 1, title: "JEE Main Registration", date: "April 15, 2026", daysLeft: 12, priority: 'HIGH', url: "https://jeemain.nta.nic.in/" },
  { id: 2, title: "NEET UG Window", date: "May 05, 2026", daysLeft: 31, priority: 'MEDIUM', url: "https://neet.nta.nic.in/" },
  { id: 3, title: "ICAI CA Enrollment", date: "May 12, 2026", daysLeft: 38, priority: 'MEDIUM', url: "https://www.icai.org/" },
  { id: 4, title: "UPSC Application", date: "June 20, 2026", daysLeft: 76, priority: 'LOW', url: "https://www.upsc.gov.in/" }
];

export default function DeadlineRegistry() {
  return (
    <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <h3 style={{ fontSize: '1.2rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)' }}>
            <Calendar size={20} className="text-primary" /> DEADLINES HUB
         </h3>
         <Link href="/colleges" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none' }}>VIEW ALL HUB</Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
         {DEADLINES.map((d) => (
           <a key={d.id} href={d.url} target="_blank" rel="noopener noreferrer" className="deadline-item" style={{ textDecoration: 'none' }}>
              <div style={{ flex: 1 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    {d.priority === 'HIGH' && <AlertTriangle size={14} color="#ef4444" />}
                    <h5 style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1e293b' }}>{d.title}</h5>
                 </div>
                 <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700 }}>{d.date}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                 <div style={{ 
                   fontSize: '1rem', 
                   fontWeight: 900, 
                   color: d.priority === 'HIGH' ? '#ef4444' : 'var(--primary)',
                   letterSpacing: '-0.02em'
                 }}>
                   {d.daysLeft} DAYS
                 </div>
                 <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#cbd5e1' }}>REMAINING</div>
              </div>
           </a>
         ))}
      </div>

      <style jsx>{`
        .deadline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .deadline-item:hover {
          background: #ffffff;
          border-color: var(--primary);
          transform: translateX(5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}
