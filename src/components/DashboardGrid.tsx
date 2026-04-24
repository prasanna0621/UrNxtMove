'use client';

import { 
  Target, 
  School, 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Search, 
  Star, 
  CheckCircle2, 
  ArrowUpRight,
  ExternalLink,
  Award,
  Zap
} from 'lucide-react';

export default function DashboardGrid() {
  const EXAMS = [
    { name: 'NEET-UG', scope: 'Medical (MBBS/BDS)', difficulty: 'Very High' },
    { name: 'ICAR AIEEA', scope: 'Agriculture', difficulty: 'High' },
    { name: 'EAMCET', scope: 'Pharmacy/Vet', difficulty: 'Moderate' },
    { name: 'GPAT', scope: 'M.Pharm Entrance', difficulty: 'High' }
  ];

  const INSTITUTIONS = [
    { name: 'AIIMS Delhi', location: 'India', rank: '#1 Med' },
    { name: 'CMC Vellore', location: 'India', rank: '#2 Med' },
    { name: 'Johns Hopkins', location: 'USA', rank: '#1 Global' },
    { name: 'NIPER', location: 'India', rank: '#1 Pharma' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
      
      {/* Essential Exams Card */}
      <div className="glass-card" style={{ padding: '24px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 900, marginBottom: '20px', color: 'var(--foreground)' }}>
          <Target size={18} color="var(--primary)" /> ESSENTIAL EXAMS
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {EXAMS.map((exam, i) => (
            <div key={i} style={{ padding: '12px 14px', background: 'var(--secondary)', borderRadius: '12px', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--foreground)' }}>{exam.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--foreground)', opacity: 0.6, fontWeight: 700 }}>{exam.scope}</div>
               </div>
               <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--primary)', padding: '4px 8px', background: 'var(--card-bg)', borderRadius: '6px', border: '1px solid var(--card-border)' }}>{exam.difficulty}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Institutions Card */}
      <div className="glass-card" style={{ padding: '24px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 900, marginBottom: '20px', color: 'var(--foreground)' }}>
          <School size={18} color="#10b981" /> PREMIER INSTITUTIONS
        </h4>
        <div style={{ display: 'grid', gap: '10px' }}>
          {INSTITUTIONS.map((inst, i) => (
            <div key={i} style={{ padding: '12px 14px', background: 'var(--secondary)', borderRadius: '12px', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
               <div style={{ width: '32px', height: '32px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={16} color="#10b981" />
               </div>
               <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--foreground)' }}>{inst.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--foreground)', opacity: 0.6, fontWeight: 700 }}>{inst.rank} • {inst.location}</div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Stats Card */}
      <div className="glass-card" style={{ padding: '24px', background: 'var(--primary)', border: 'none', borderRadius: '20px', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
           <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 900 }}>
             <Globe size={18} /> GLOBAL STATS
           </h4>
           <TrendingUp size={18} style={{ opacity: 0.8 }} />
        </div>
        <div style={{ display: 'grid', gap: '20px' }}>
           <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.7, letterSpacing: '0.1em', marginBottom: '4px' }}>PROJECTED VACANCIES (2026)</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>450,000+</div>
           </div>
           <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
           <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.7, letterSpacing: '0.1em', marginBottom: '4px' }}>MARKET GROWTH RATE</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>14.2% <ArrowUpRight size={20} style={{ display: 'inline-block' }} /></div>
           </div>
        </div>
      </div>

      {/* Career Roles Strip */}
      <div className="glass-card" style={{ padding: '24px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', gridColumn: 'span 2' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
           <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 900, color: 'var(--foreground)' }}>
             <Briefcase size={18} color="#f59e0b" /> HIGH-VALUE CAREER ROLES
           </h4>
           <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>AVG SALARY (GLOBAL)</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
           {[
             { role: 'Specialist Surgeon', pay: '$280K+' },
             { role: 'Clinical Biochemist', pay: '$110K+' },
             { role: 'Agri-Data Scientist', pay: '$95K+' },
             { role: 'Veterinary Surgeon', pay: '$105K+' }
           ].map((r, i) => (
             <div key={i} style={{ padding: '16px', background: 'var(--secondary)', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--foreground)', marginBottom: '4px' }}>{r.role}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary)' }}>{r.pay}</div>
             </div>
           ))}
        </div>
      </div>

      {/* Expert Pro Tips */}
      <div className="glass-card" style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.05)', border: '1px dashed var(--primary)', borderRadius: '20px' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 900, marginBottom: '20px', color: 'var(--primary)' }}>
          <Zap size={18} /> INSIDER TIPS
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
           <div style={{ display: 'flex', gap: '10px' }}>
              <Star size={16} fill="var(--primary)" color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1.4 }}>Start NEET prep in Class 11; NCERT is 90% of the game.</p>
           </div>
           <div style={{ display: 'flex', gap: '10px' }}>
              <Star size={16} fill="var(--primary)" color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1.4 }}>Explore Pharmacy Informatics; it merges Tech + Bio at $150K+ scales.</p>
           </div>
        </div>
      </div>

      <style jsx>{`
        .glass-card { transition: all 0.3s ease; }
        .glass-card:hover { transform: translateY(-5px); border-color: var(--primary); }
      `}</style>
    </div>
  );
}
