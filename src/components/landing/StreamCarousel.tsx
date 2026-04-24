'use client';
import { useState } from 'react';
import { ArrowRight, BrainCircuit, Zap, Briefcase, BookOpen } from 'lucide-react';
import Link from 'next/link';

const STREAMS = [
  { id: 'mpc', title: 'MPC', name: 'Math, Physics, Chemistry', icon: <BrainCircuit size={24} />, color: '#4f46e5', desc: 'Become a software engineer, roboticist, or data scientist. Deep dive into logic and problem solving.' },
  { id: 'bipc', title: 'BiPC', name: 'Biology, Physics, Chemistry', icon: <Zap size={24} />, color: '#10b981', desc: 'Pursue medicine, biotech, or genetics. Explore the science of life and healthcare innovations.' },
  { id: 'cec', title: 'CEC', name: 'Commerce, Economics, Civics', icon: <Briefcase size={24} />, color: '#f59e0b', desc: 'Master the business world. Build foundations for CA, FinTech, and corporate leadership.' },
  { id: 'hec', title: 'HEC', name: 'History, Economics, Civics', icon: <BookOpen size={24} />, color: '#9333ea', desc: 'Shape society through law, journalism, or civil services. Master policy and communication.' },
];

export default function StreamCarousel() {
  const [activeId, setActiveId] = useState('mpc');
  const activeStream = STREAMS.find(s => s.id === activeId)!;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {STREAMS.map(stream => (
          <button
            key={stream.id}
            onClick={() => setActiveId(stream.id)}
            style={{
              padding: '12px 24px',
              borderRadius: '16px',
              border: 'none',
              background: activeId === stream.id ? stream.color : '#f8fafc',
              color: activeId === stream.id ? '#fff' : '#64748b',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s',
              boxShadow: activeId === stream.id ? `0 10px 20px ${stream.color}44` : 'none'
            }}
          >
            {stream.icon} {stream.title}
          </button>
        ))}
      </div>

      <div className="glass-card" style={{ 
        padding: '50px', 
        background: '#ffffff', 
        borderRadius: '28px', 
        border: `1px solid ${activeStream.color}44`,
        position: 'relative',
        overflow: 'hidden'
      }}>
         {/* Animated Background Blob */}
         <div style={{ 
           position: 'absolute', top: '-50px', right: '-50px', 
           width: '200px', height: '200px', 
           background: activeStream.color, 
           opacity: 0.05, 
           filter: 'blur(40px)',
           borderRadius: '50%',
           transition: 'background 0.5s'
         }}></div>

         <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
               <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '10px', color: '#0f172a' }}>{activeStream.title} PATH</h3>
               <h4 style={{ fontSize: '1.2rem', color: activeStream.color, fontWeight: 800, marginBottom: '20px' }}>{activeStream.name}</h4>
               <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, marginBottom: '30px' }}>
                 {activeStream.desc}
               </p>
               <Link href={`/stream/${activeStream.id}`} style={{ 
                 display: 'inline-flex', alignItems: 'center', gap: '8px', 
                 padding: '16px 32px', background: activeStream.color, color: 'white', 
                 borderRadius: '14px', fontWeight: 800, textDecoration: 'none',
                 boxShadow: `0 10px 20px ${activeStream.color}33`
               }}>
                 Preview Complete Roadmap <ArrowRight size={20} />
               </Link>
            </div>
            
            <div style={{ flex: 1, minWidth: '350px', position: 'relative', height: '220px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
               <img 
                 src={`/stream_${activeStream.id}.jpg`} 
                 alt={activeStream.title} 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
               />
               <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, transparent, ${activeStream.color}22)` }}></div>
            </div>
         </div>
      </div>
    </div>
  );
}
