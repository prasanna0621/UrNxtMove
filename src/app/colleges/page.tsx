'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  GraduationCap, 
  MapPin, 
  ExternalLink, 
  Star,
  Trophy,
  ArrowRight,
  School,
  Gift,
  FileText,
  AlertCircle,
  Building,
  CheckCircle2,
  Calendar
} from 'lucide-react';

const COLLEGES = [
  { name: "IIT Bombay", stream: "mpc", location: "Mumbai, India", tier: "Tier-1", tags: "Research, Tech", url: "https://www.iitb.ac.in/", stats: "100% Placement" },
  { name: "AIIMS Delhi", stream: "bipc", location: "New Delhi, India", tier: "Tier-1", tags: "Medical, Surgery", url: "https://www.aiims.edu/", stats: "Top Research Lab" },
  { name: "MIT (Boston)", stream: "mpc", location: "MA, USA", tier: "Global Top", tags: "Innovation, Engineering", url: "https://www.mit.edu/", stats: "Global #1 Tech" },
  { name: "SRCC Delhi", stream: "cec", location: "New Delhi, India", tier: "Tier-1", tags: "Commerce, Business", url: "https://www.srcc.edu/", stats: "Highest ROI" },
  { name: "National Law School (NLSIU)", stream: "hec", location: "Bengaluru, India", tier: "Tier-1", tags: "Law, Judiciary", url: "https://www.nls.ac.in/", stats: "Supreme Court Placements" },
  { name: "NID Ahmedabad", stream: "hec", location: "Ahmedabad, India", tier: "Tier-1", tags: "Design, Creative", url: "https://www.nid.edu/", stats: "Top Graphic Design" },
  { name: "Govt Polytechnic Pune", stream: "polycet", location: "Pune, India", tier: "Tier-2", tags: "Applied Engineering", url: "https://www.gppune.ac.in/", stats: "Strong Core Placement" },
];

const SCHOLARSHIPS = [
  { name: "NTSE (National Talent Search)", provider: "NCERT", amount: "₹2000/month", deadline: "Dec 30, 2025", eligibility: "Grade 10 Students strictly", tag: "Government" },
  { name: "KVPY Fellowship", provider: "IISc", amount: "₹5000/month + Grant", deadline: "Nov 15, 2025", eligibility: "Grade 11/12 Science", tag: "Research" },
  { name: "INSPIRE Scholarship", provider: "DST", amount: "₹80,000 / year", deadline: "Dec 15, 2025", eligibility: "Top 1% Board exams", tag: "Government" },
  { name: "HDFC Badhte Kadam", provider: "HDFC", amount: "₹1,00,000", deadline: "Feb 20, 2026", eligibility: "Merit + Economic Need", tag: "Private" }
];

export default function CollegesPage() {
  const [activeTab, setActiveTab] = useState('colleges');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredItems = activeTab === 'colleges' 
    ? COLLEGES.filter(c => {
        const matchesFilter = filter === 'all' || c.stream === filter;
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.tags.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
      })
    : SCHOLARSHIPS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.provider.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container animate-scale-in" style={{ padding: '60px 20px', maxWidth: '1400px', position: 'relative' }}>
       
       {/* Background Image Layer */}
       <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
         <img 
           src="/college_bg.jpg" 
           alt="Academic Background" 
           style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} 
         />
         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(var(--background-rgb), 0.5) 100%)' }}></div>
       </div>
      
      {/* Header & Tabs */}
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
         <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-0.04em' }}>
           {activeTab === 'colleges' ? "Institute " : "Scholarship "} <span className="text-gradient">Hub</span>
         </h1>
         <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
           {activeTab === 'colleges' 
             ? "Discover the world's most prestigious academic institutions filtered perfectly for your chosen career trajectory." 
             : "Explore high-impact financial aid and merit-based grants to fund your dream education without constraints."}
         </p>
         
         <div style={{ display: 'inline-flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', background: '#f8fafc', padding: '8px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
            <button 
              onClick={() => setActiveTab('colleges')}
              className={`tab-btn-modern ${activeTab === 'colleges' ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '14px', border: 'none', background: activeTab === 'colleges' ? '#ffffff' : 'transparent', color: activeTab === 'colleges' ? 'var(--primary)' : '#64748b', fontWeight: 800, cursor: 'pointer', transition: 'all 0.3s', boxShadow: activeTab === 'colleges' ? '0 10px 15px -3px rgba(0,0,0,0.05)' : 'none' }}
            >
              <School size={18} /> Academic Institutions
            </button>
            <button 
              onClick={() => setActiveTab('scholarships')}
              className={`tab-btn-modern ${activeTab === 'scholarships' ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '14px', border: 'none', background: activeTab === 'scholarships' ? '#ffffff' : 'transparent', color: activeTab === 'scholarships' ? '#10b981' : '#64748b', fontWeight: 800, cursor: 'pointer', transition: 'all 0.3s', boxShadow: activeTab === 'scholarships' ? '0 10px 15px -3px rgba(0,0,0,0.05)' : 'none' }}
            >
              <Gift size={18} /> Financial Aid & Grants
            </button>
         </div>
         
         <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '25px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} size={24} />
            <input 
              type="text" 
              placeholder={activeTab === 'colleges' ? "Search by institute, tag, or rank..." : "Search scholarship by provider or title..."}
              className="search-bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '20px 20px 20px 65px', fontSize: '1.05rem', borderRadius: '24px', border: '2px solid #e2e8f0', background: '#ffffff', color: '#0f172a', transition: 'all 0.3s', outline: 'none', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}
            />
         </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'colleges' ? '280px 1fr' : '1fr', gap: '40px', alignItems: 'start' }}>
         
          {/* Advanced Filter Sidebar (Only for Colleges) */}
         {activeTab === 'colleges' && (
           <aside className="glass-card" style={{ padding: '30px', position: 'sticky', top: '100px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <Filter size={18} color="var(--primary)" /> ALIGN PATHWAY
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {[
                   { id: 'all', label: 'All Disciplines' },
                   { id: 'mpc', label: 'Math/Phys/Chem' },
                   { id: 'bipc', label: 'Bio/Phys/Chem' },
                   { id: 'cec', label: 'Commerce/Econ' },
                   { id: 'hec', label: 'Arts/Humanities' },
                   { id: 'polycet', label: 'Polytechnic/Tech' }
                 ].map(f => (
                   <button 
                    key={f.id} 
                    onClick={() => setFilter(f.id)}
                    className="filter-btn-new"
                    style={{ 
                      background: filter === f.id ? 'var(--primary)' : 'transparent', 
                      color: filter === f.id ? '#ffffff' : '#64748b', 
                      fontWeight: filter === f.id ? 800 : 600, 
                      border: filter === f.id ? 'none' : '1px solid #e2e8f0', 
                      padding: '14px 20px', 
                      borderRadius: '14px', 
                      textAlign: 'left', 
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: filter === f.id ? '0 10px 15px -3px rgba(79, 70, 229, 0.3)' : 'none'
                    }}
                   >
                     {f.label}
                     {filter === f.id && <CheckCircle2 size={16} />}
                   </button>
                 ))}
              </div>
           </aside>
         )}

         {/* Extravagant Results Grid */}
         <main style={{ display: 'grid', gridTemplateColumns: activeTab === 'colleges' ? 'repeat(auto-fill, minmax(350px, 1fr))' : '1fr', gap: '30px' }}>
            {activeTab === 'colleges' ? (
              filteredItems.length > 0 ? (
                (filteredItems as any[]).map((college, i) => (
                  <div key={i} className="glass-card college-card-premium" style={{ display: 'flex', flexDirection: 'column', background: 'var(--card-bg)', borderRadius: '28px', border: '1px solid var(--card-border)', overflow: 'hidden', transition: 'all 0.3s' }}>
                     <div style={{ height: '80px', background: `linear-gradient(135deg, ${college.tier === 'Global Top' ? '#f59e0b' : 'var(--primary)'} 0%, ${college.tier === 'Global Top' ? '#d97706' : 'var(--primary-hover)'} 100%)`, position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', padding: '6px 14px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase' }}>
                          {college.tier}
                        </div>
                     </div>
                     <div style={{ padding: '0 30px 30px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div className="icon-box-elevated" style={{ width: '64px', height: '64px', background: '#ffffff', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-32px', marginBottom: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                          <Building size={28} color={college.tier === 'Global Top' ? '#f59e0b' : '#4f46e5'} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px', color: '#0f172a' }}>{college.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.9rem', marginBottom: '15px', fontWeight: 600 }}>
                           <MapPin size={16} color="#94a3b8" /> {college.location}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                           {college.tags.split(',').map((tag:string, idx:number) => (
                             <span key={idx} style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '8px' }}>{tag.trim()}</span>
                           ))}
                        </div>
                        
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                           <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                             <Trophy size={14} /> {college.stats}
                           </div>
                           <a href={college.url} target="_blank" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }} className="hover-arrow">
                             Portal <ArrowRight size={16} />
                           </a>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px', background: '#f8fafc', borderRadius: '24px', border: '1px dashed #cbd5e1' }}>
                  <AlertCircle size={40} color="#94a3b8" style={{ margin: '0 auto 15px auto' }} />
                  <p style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: 600 }}>No institutes match this rigorous filter.</p>
                </div>
              )
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  {(filteredItems as any[]).map((scholarship, i) => (
                   <div key={i} className="glass-card" style={{ padding: '35px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '28px', transition: 'all 0.3s' }}>
                      <div style={{ display: 'flex', gap: '25px', alignItems: 'center', flex: 1 }}>
                         <div style={{ background: 'rgba(16, 185, 129, 0.08)', color: '#10b981', padding: '16px', borderRadius: '18px' }}>
                            <Gift size={32} />
                         </div>
                         <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                               <h3 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0, color: '#0f172a' }}>{scholarship.name}</h3>
                               <span style={{ fontSize: '0.7rem', fontWeight: 900, background: '#f1f5f9', color: '#64748b', padding: '4px 10px', borderRadius: '50px', textTransform: 'uppercase' }}>{scholarship.tag}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
                               <span><Building size={14} style={{display:'inline', marginBottom:'-2px'}} /> {scholarship.provider}</span>
                               <span style={{ color: 'var(--primary)' }}><Star size={14} style={{display:'inline', marginBottom:'-2px'}} /> Eligibility: {scholarship.eligibility}</span>
                            </div>
                         </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '40px', background: '#f8fafc', padding: '20px 30px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                         <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10b981' }}>{scholarship.amount}</div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>FUNDING METRIC</div>
                         </div>
                         <div style={{ width: '1px', height: '40px', background: '#e2e8f0' }}></div>
                         <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ef4444', display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={18}/> {scholarship.deadline}</div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>SUBMISSION DEADLINE</div>
                         </div>
                         <button className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.9rem', borderRadius: '14px' }}>Apply Details</button>
                      </div>
                   </div>
                 ))}
              </div>
            )}
         </main>

      </div>

      <style jsx>{`
        .search-bar:focus { border-color: var(--primary) !important; box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1) !important; }
        .filter-btn-new:hover { background: #f8fafc !important; color: var(--primary) !important; border-color: var(--primary) !important; }
        .college-card-premium:hover { transform: translateY(-8px); box-shadow: 0 30px 50px -12px rgba(0,0,0,0.1); border-color: var(--primary); }
        .hover-arrow svg { transition: transform 0.2s; }
        .hover-arrow:hover svg { transform: translateX(4px); }
      `}</style>
    </div>
  );
}
