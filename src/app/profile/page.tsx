'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  User, 
  Settings, 
  ChevronRight, 
  TrendingUp, 
  Award, 
  CircleHelp, 
  Save, 
  X, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Compass,
  Edit3,
  Loader2,
  Bookmark,
  Map,
  ShieldCheck,
  Zap,
  Target,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Flag
} from 'lucide-react';
import { updateProfile, getUserProfile, getSavedStreams } from '../actions/profile';

// Simulated login ID
const CURRENT_USER_ID = "user-1"; 

const BADGES = [
  { id: 'pioneer', name: 'Diagnostic Pioneer', icon: <Zap size={20} />, color: '#4f46e5', desc: 'Completed the diagnostic quiz.' },
  { id: 'explorer', name: 'Early Aspirant', icon: <Compass size={20} />, color: '#10b981', desc: 'Saved first career path.' },
  { id: 'strategist', name: 'Roadmap Strategist', icon: <Target size={20} />, color: '#f59e0b', desc: 'Viewed 3+ deep-dive roadmaps.' },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [savedStreams, setSavedStreams] = useState<Array<{ id: string, name: string, description: string }>>([]);
  
  const [profile, setProfile] = useState({
    name: "New Student",
    bio: "Define your future here.",
    email: "student@urnxtmove.com",
    phone: "+91 98765 43210",
    dob: "2008-05-14",
    education: "10th Grade Completed",
    goals: "Software Engineering, AI",
    interests: "STEM, Finance, Research",
    xp: 450,
    quizzes: 1
  });

  useEffect(() => {
    async function load() {
      const user = await getUserProfile(CURRENT_USER_ID);
      const saved = await getSavedStreams(CURRENT_USER_ID);
      
      if (user) {
        setProfile(prev => ({
          ...prev,
          name: user.name || "New Student",
          bio: user.bio || "Craft your career bio...",
          interests: user.interests || "Add your interests",
          // Mocks for now or merge with user data if it existed
        }));
      }
      setSavedStreams(saved);
      setIsLoading(false);
    }
    load();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    // Include extra fields here although the mock action might drop them
    const result = await updateProfile(CURRENT_USER_ID, {
      name: profile.name,
      bio: profile.bio,
      interests: profile.interests,
      // The rest can be tracked locally for the demo
    });
    
    // Simulate slight network delay for realism
    setTimeout(() => {
      if (result.success) {
         setIsEditing(false);
      } else {
         alert("Failed to save profile.");
      }
      setIsSaving(false);
    }, 800);
  };

  if (isLoading) {
    return (
      <div className="container" style={{ padding: '60px 20px', maxWidth: '1200px' }}>
        <div className="skeleton" style={{ width: '100%', height: '350px', borderRadius: '40px', marginBottom: '50px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '50px' }}>
          <div>
            <div className="skeleton" style={{ width: '60%', height: '40px', borderRadius: '10px', marginBottom: '30px' }}></div>
            <div className="skeleton" style={{ width: '100%', height: '150px', borderRadius: '20px', marginBottom: '20px' }}></div>
          </div>
          <div className="skeleton" style={{ width: '100%', height: '400px', borderRadius: '40px' }}></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container animate-scale-in" style={{ padding: '60px 20px', maxWidth: '1200px', position: 'relative' }}>
      
      {/* Background Image Layer */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <img 
          src="/profile_bg.jpg" 
          alt="Professional Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(var(--background-rgb), 0) 0%, var(--background) 100%)' }}></div>
      </div>
      
      {/* Profile Header */}
      <div className="glass-card" style={{ padding: '60px', marginBottom: '50px', position: 'relative', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', opacity: 0.02, transform: 'rotate(20deg)', color: 'var(--primary)' }}>
           <User size={450} />
        </div>

        <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '150px', height: '150px' }}>
             <div style={{ width: '100%', height: '100%', borderRadius: '40px', background: 'linear-gradient(135deg, #4f46e5 0%, #10b981 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '4rem', fontWeight: 900, boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.3)' }}>
               {profile.name.charAt(0)}
             </div>
             <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#10b981', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 900, border: '4px solid #ffffff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
               VERIFIED
             </div>
          </div>

          <div style={{ flex: 1, minWidth: '320px' }}>
             {isEditing ? (
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                  <input 
                    className="input-field" 
                    placeholder="Full Name"
                    style={{ fontSize: '1.8rem', fontWeight: 900, width: '100%', padding: '15px' }}
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                  <textarea 
                    className="input-field" 
                    placeholder="Short Bio"
                    style={{ fontSize: '1.1rem', color: '#475569', width: '100%', height: '80px', resize: 'none' }}
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  />
               </div>
             ) : (
               <div style={{ marginBottom: '25px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.04em' }}>{profile.name}</h1>
                    <Sparkles className="text-primary" size={24} />
                 </div>
                 <p style={{ fontSize: '1.2rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.6, maxWidth: '650px', fontWeight: 500 }}>
                   {profile.bio}
                 </p>
               </div>
             )}

             {/* Detailed Fields Grid */}
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px', padding: '25px', background: 'var(--secondary)', borderRadius: '20px', border: '1px dashed var(--card-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ color: '#94a3b8' }}><Mail size={20}/></div>
                   {isEditing ? (
                     <input className="input-field" style={{ padding: '8px 15px' }} value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
                   ) : (
                     <div>
                       <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8' }}>EMAIL ADDRESS</div>
                       <div style={{ fontWeight: 600 }}>{profile.email}</div>
                     </div>
                   )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ color: '#94a3b8' }}><Phone size={20}/></div>
                   {isEditing ? (
                     <input className="input-field" style={{ padding: '8px 15px' }} value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
                   ) : (
                     <div>
                       <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8' }}>PHONE NUMBER</div>
                       <div style={{ fontWeight: 600 }}>{profile.phone}</div>
                     </div>
                   )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ color: '#94a3b8' }}><Calendar size={20}/></div>
                   {isEditing ? (
                     <input type="date" className="input-field" style={{ padding: '8px 15px' }} value={profile.dob} onChange={e => setProfile({...profile, dob: e.target.value})} />
                   ) : (
                     <div>
                       <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8' }}>DATE OF BIRTH</div>
                       <div style={{ fontWeight: 600 }}>{profile.dob}</div>
                     </div>
                   )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ color: '#94a3b8' }}><GraduationCap size={20}/></div>
                   {isEditing ? (
                     <input className="input-field" style={{ padding: '8px 15px' }} value={profile.education} onChange={e => setProfile({...profile, education: e.target.value})} />
                   ) : (
                     <div>
                       <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8' }}>EDUCATION LEVEL</div>
                       <div style={{ fontWeight: 600 }}>{profile.education}</div>
                     </div>
                   )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', gridColumn: '1 / -1' }}>
                   <div style={{ color: '#94a3b8' }}><Flag size={20}/></div>
                   {isEditing ? (
                     <input className="input-field" style={{ padding: '8px 15px', width: '100%' }} value={profile.goals} onChange={e => setProfile({...profile, goals: e.target.value})} placeholder="Target Career Goals" />
                   ) : (
                     <div>
                       <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8' }}>PRIMARY CAREER GOALS</div>
                       <div style={{ fontWeight: 600, color: 'var(--primary)' }}>{profile.goals}</div>
                     </div>
                   )}
                </div>
             </div>

          </div>

          <div style={{ alignSelf: 'flex-start' }}>
             {isEditing ? (
               <button onClick={handleSave} disabled={isSaving} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 30px', fontSize: '1rem', width: '100%', justifyContent: 'center' }}>
                 {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} SAVE SECURELY
               </button>
             ) : (
               <button onClick={() => setIsEditing(true)} className="btn btn-glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 30px', border: '1px solid var(--card-border)', borderRadius: '16px', fontSize: '1rem', fontWeight: 800, background: 'var(--secondary)', color: 'var(--foreground)', cursor: 'pointer', width: '100%', justifyContent: 'center' }}>
                 <Edit3 size={18} /> EDIT PROFILE
               </button>
             )}
          </div>
        </div>
      </div>

      <div className="profile-grid">
         
         <main>
            {/* Achievement Showcase */}
            <section style={{ marginBottom: '60px' }}>
               <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '-0.02em' }}>
                  <Award size={24} className="text-primary" /> CERTIFICATIONS & BADGES
               </h2>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  {BADGES.map((badge) => (
                    <div key={badge.id} className="glass-card badge-card" style={{ padding: '30px', textAlign: 'center', border: `1px solid var(--card-border)`, background: 'var(--card-bg)', transition: 'all 0.3s', color: 'var(--foreground)' }}>
                       <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: `${badge.color}11`, color: badge.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                          {badge.icon}
                       </div>
                       <h4 style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '8px' }}>{badge.name}</h4>
                       <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>{badge.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* My Saved Paths Section */}
            <section style={{ marginBottom: '60px' }}>
               <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '-0.02em' }}>
                  <Bookmark size={24} className="text-primary" /> SAVED ROADMAPS
               </h2>
               
               {savedStreams.length > 0 ? (
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                    {(savedStreams as any[]).map(stream => (
                       <Link key={stream.id} href={`/stream/${stream.slug}`} style={{ textDecoration: 'none' }}>
                          <div className="glass-card" style={{ padding: '30px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', transition: 'all 0.3s ease' }}>
                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ padding: '6px 12px', background: 'rgba(79, 70, 229, 0.15)', color: 'var(--primary)', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 900 }}>SAVED</span>
                                <ArrowRight size={18} color="#cbd5e1" />
                             </div>
                             <h4 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '8px', color: 'var(--foreground)' }}>{stream.slug.toUpperCase()}</h4>
                             <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>{stream.name}</p>
                          </div>
                       </Link>
                    ))}
                 </div>
               ) : (
                 <div className="glass-card" style={{ padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', background: 'var(--secondary)', border: '1px dashed var(--card-border)' }}>
                    <Map size={40} color="#94a3b8" />
                    <p style={{ color: '#64748b', fontWeight: 600, fontSize: '1.05rem' }}>Your career library is empty. Start exploring roadmaps.</p>
                    <Link href="/home" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}>BROWSE STREAMS</Link>
                 </div>
               )}
            </section>
         </main>

         <aside>
            <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '40px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', position: 'sticky', top: '120px' }}>
               <div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '20px' }}>CAREER SYNC</h3>
                  <div style={{ display: 'grid', gap: '15px' }}>
                     <div style={{ background: 'var(--secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--foreground)', opacity: 0.6, fontWeight: 800 }}>GLOBAL XP SCORE</span>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--primary)' }}>{profile.xp} <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10b981' }}>+15</span></div>
                     </div>
                     <div style={{ background: 'var(--secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--foreground)', opacity: 0.6, fontWeight: 800 }}>COMMUNITY RANKING</span>
                        <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--foreground)' }}>TOP 8%</div>
                     </div>
                  </div>
               </div>

                <div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>TARGET SKILLS</span>
                    {isEditing && <span style={{ color: 'var(--primary)', cursor: 'pointer', textTransform: 'none' }}>Edit Mode</span>}
                  </h3>
                  
                  {isEditing ? (
                    <input className="input-field" style={{ padding: '12px' }} value={profile.interests} onChange={e => setProfile({...profile, interests: e.target.value})} placeholder="Comma separated skills" />
                  ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                       {profile.interests.split(',').map(tag => (
                         <span key={tag} style={{ padding: '6px 14px', background: '#f1f5f9', color: '#475569', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid #e2e8f0' }}>
                           {tag.trim().toUpperCase()}
                         </span>
                       ))}
                    </div>
                  )}
               </div>

               <div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '20px' }}>PERSONALIZED GOALS</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                     <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.1)', fontSize: '0.85rem', fontWeight: 700 }}>
                        <CheckCircle2 size={14} style={{ display: 'inline', marginRight: '8px', color: '#10b981' }} /> Finish Python Basics
                     </div>
                     <div style={{ padding: '12px', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '12px', border: '1px solid rgba(79, 70, 229, 0.1)', fontSize: '0.85rem', fontWeight: 700, opacity: 0.6 }}>
                        <CircleHelp size={14} style={{ display: 'inline', marginRight: '8px' }} /> Explore IIT Madras
                     </div>
                  </div>
               </div>

               <div style={{ padding: '25px', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderRadius: '20px', color: 'white' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 900, marginBottom: '10px' }}>MENTORSHIP</h4>
                  <p style={{ fontSize: '0.75rem', opacity: 0.7, lineHeight: 1.5, marginBottom: '15px' }}>Get matched with a professional mentor in your chosen path.</p>
                  <button className="btn-primary" style={{ width: '100%', padding: '10px', fontSize: '0.8rem', background: 'white', color: '#0f172a' }}>Request Match</button>
               </div>
            </div>
         </aside>

      </div>

      <style jsx>{`
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 50px;
          align-items: start;
        }
        @media (max-width: 1100px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
          aside {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px !important;
          }
          aside > div {
            position: static !important;
          }
        }
        .badge-card:hover { 
          transform: translateY(-8px); 
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05); 
          border-color: rgba(79, 70, 229, 0.2);
        }
      `}</style>
    </div>
  );
}
