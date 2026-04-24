import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Trophy, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Briefcase,
  Search,
  LayoutDashboard,
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Target,
  Clock,
  CheckCircle2,
  Lock,
  Activity
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import DeadlineRegistry from "@/components/DeadlineRegistry";

export default async function Dashboard() {
  const streams = await prisma.stream.findMany();
  
  // pick Polycet as featured
  const featuredStream = streams.find(s => s.slug === 'polycet') || streams[0];

  return (
    <div className="container animate-scale-in" style={{ padding: '40px 20px', maxWidth: '1400px' }}>
      
      {/* Top Countdown Ticker - More minimal */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '30px' }}>
         <div className="glass-card" style={{ padding: '15px 20px', background: 'var(--card-bg)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--card-border)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.05em' }}>JEE MAIN 2026</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary)' }}>362d</span>
         </div>
         <div className="glass-card" style={{ padding: '15px 20px', background: 'var(--card-bg)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--card-border)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.05em' }}>NEET UG 2026</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#10b981' }}>385d</span>
         </div>
         <div className="glass-card" style={{ padding: '15px 20px', background: 'var(--card-bg)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--card-border)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.05em' }}>ICAI ADMISSION</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#f59e0b' }}>584d</span>
         </div>
      </div>

      <div className="dashboard-grid">
         
         <main>
            {/* High-Impact Hero with Generated Background Image */}
            <div className="glass-card" style={{ 
              borderRadius: '28px',
              marginBottom: '40px', 
              position: 'relative', 
              overflow: 'hidden',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 30px 50px -15px rgba(0,0,0,0.1)'
            }}>
              {/* Background Image Layer */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                {/* Standard css background fallback with generated image */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'url(/dashboard_hero.jpg) center center / cover no-repeat',
                  opacity: 0.95,
                  filter: 'brightness(1) contrast(1)'
                }}/>
              </div>
              
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, background: 'linear-gradient(90deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.4) 100%)' }}></div>
              
              <div style={{ position: 'relative', zIndex: 2, padding: '50px', color: 'white', maxWidth: '700px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                   <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em' }}>
                     DASHBOARD OVERVIEW
                   </span>
                   <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
                   <span style={{ opacity: 0.7, fontSize: '0.8rem', fontWeight: 600 }}>SYNCED</span>
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                  Elevate Your <br/><span style={{ color: '#818cf8' }}>Professional</span> Evolution.
                </h1>
                <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '35px', fontWeight: 500 }}>
                  Your personalized career hub is ready. Discover deep path mapping, institutional details, and tailored trajectories.
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Link href="/quiz" className="btn-primary" style={{ padding: '16px 35px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px', background: '#ffffff', color: '#0f172a' }}>
                    <Sparkles size={18} /> Launch Diagnostics
                  </Link>
                  <Link href="/colleges" className="btn-glass" style={{ padding: '16px 30px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                    Institute Explorer
                  </Link>
                </div>
              </div>
            </div>

            {/* Path Intelligence Grid */}
            <section id="explore">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em' }}>Available <span style={{ color: 'var(--primary)' }}>Paths</span></h2>
                  <p style={{ opacity: 0.5, fontWeight: 600, fontSize: '0.9rem' }}>Comprehensive roadmaps for your career</p>
                </div>
                <Link href="#all-paths" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                   View Matrix <ArrowRight size={16} />
                </Link>
              </div>

            {/* RECOMMENDED FEATURE CARD - FILLS GAP */}
            <div className="glass-card" style={{ marginBottom: '40px', padding: '40px', border: '1px solid var(--primary)', background: 'rgba(79, 70, 229, 0.05)', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(79, 102, 241, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
               <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                  <div style={{ background: 'var(--primary)', color: 'white', display: 'inline-block', padding: '4px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, marginBottom: '15px' }}>TOP RECOMMENDATION</div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.02em' }}>The Software Architect Path</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.6, marginBottom: '25px', maxWidth: '500px' }}>Your diagnostic results suggest a 94% match with systematic engineering logic. We recommend the MPC trajectory with a focus on Software Architecture.</p>
                  <Link href="/stream/mpc" className="btn-primary" style={{ padding: '14px 30px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>Explore This Path <ArrowRight size={18} /></Link>
               </div>
               <div style={{ width: '200px', height: '200px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                  <img src="/stream_mpc.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {streams.map((stream: { id: string, name: string, description: string, duration: string, marketDemand: string }) => {
                const streamImages: Record<string, string> = {
                  mpc: "/stream_mpc.jpg",
                  bipc: "/stream_bipc.jpg",
                  cec: "/stream_cec.jpg",
                  hec: "/stream_hec.jpg",
                  polycet: "/stream_polycet.jpg",
                  iti: "/stream_iti.jpg",
                  vocational: "/stream_vocational.jpg"
                };
                
                const streamColors: Record<string, string> = {
                  mpc: "#4f46e5",
                  bipc: "#10b981",
                  cec: "#f59e0b",
                  hec: "#ef4444",
                  polycet: "#06b6d4",
                  iti: "#8b5cf6",
                  vocational: "#ec4899"
                };

                return (
                  <Link href={`/stream/${stream.slug}`} key={stream.id} style={{ textDecoration: 'none' }}>
                    <div className="stream-card-modern hover-lift" style={{ 
                      position: 'relative', 
                      overflow: 'hidden',
                      padding: '0 !important',
                      background: 'rgba(255, 255, 255, 0.4) !important',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        <div style={{ height: '140px', position: 'relative' }}>
                          <img 
                            src={streamImages[stream.slug] || streamImages.vocational} 
                            alt={stream.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div style={{ 
                            position: 'absolute', 
                            inset: 0, 
                            background: `linear-gradient(to bottom, transparent, #ffffff)` 
                          }}></div>
                          
                          <div style={{ 
                            position: 'absolute', 
                            top: '20px', 
                            left: '20px',
                            background: '#ffffff',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '0.7rem',
                            fontWeight: 900,
                            color: streamColors[stream.slug] || '#6366f1',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                          }}>
                            {stream.slug.toUpperCase()}
                          </div>
                        </div>

                        <div style={{ padding: '25px 30px 40px 30px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <div className="sc-icon-box" style={{ 
                              width: '45px', height: '45px', borderRadius: '12px', 
                              background: `${streamColors[stream.slug] || '#6366f1'}15`,
                              color: streamColors[stream.slug] || '#6366f1',
                              display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                              {stream.slug === 'mpc' && <BrainCircuit size={22} />}
                              {stream.slug === 'bipc' && <Sparkles size={22} />}
                              {stream.slug === 'cec' && <Briefcase size={22} />}
                              {stream.slug === 'hec' && <BookOpen size={22} />}
                              {stream.slug === 'iti' && <Zap size={22} />}
                              {stream.slug === 'polycet' && <Target size={22} />}
                              {!['mpc', 'bipc', 'cec', 'hec', 'iti', 'polycet'].includes(stream.slug) && <LayoutDashboard size={22} />}
                            </div>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>EXPLORE</span>
                          </div>
                          
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '6px', color: '#0f172a' }}>
                            {stream.name}
                          </h3>
                          
                          <p style={{ color: '#64748b', marginBottom: '0', lineHeight: 1.6, fontSize: '0.88rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {stream.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* GAP FILLER: AI Path Guidance Interactive Banner */}
            <div className="glass-card" style={{ marginTop: '40px', marginBottom: '40px', padding: '30px', background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)', borderRadius: '24px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '10px' }}>Not sure which path to click?</h3>
                  <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: 1.5 }}>Our AI Mentor can analyze your 10th-grade performance and suggest the optimal stream in under 2 minutes.</p>
               </div>
               <Link href="/quiz" className="btn" style={{ padding: '14px 28px', background: 'white', color: '#4f46e5', fontWeight: 900, borderRadius: '14px', whiteSpace: 'nowrap' }}>
                 Start AI Analysis
               </Link>
            </div>

            {/* FILLING SPACE: Intelligence Matrix / Community Activity */}
         </main>

         <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Quick Status Profile Check */}
            <div className="glass-card" style={{ padding: '30px', background: '#ffffff', borderRadius: '24px', border: '1px solid #f1f5f9' }}>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <Target size={16} /> CURRENT PROGRESS
               </h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '2px', color: '#10b981' }}><CheckCircle2 size={20} /></div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '2px' }}>Profile Setup</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Completed basic info</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '2px', color: '#f59e0b' }}><Clock size={20} /></div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '2px' }}>Career Diagnostic</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Pending assessment</div>
                    </div>
                  </div>
               </div>
               <Link href="/profile" className="btn-glass" style={{ width: '100%', marginTop: '25px', padding: '12px', fontSize: '0.9rem', display: 'block', textAlign: 'center', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', color: '#0f172a' }}>
                 Update Profile
               </Link>
            </div>

            {/* RELOCATED: Intelligence Matrix Sidebar Compact */}
            <div className="glass-card" style={{ padding: '30px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '24px' }}>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <Activity size={16} /> INTELLIGENCE MATRIX
               </h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>MPC</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--primary)' }}>24.8k</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', background: 'var(--primary)' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>BIPC</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#10b981' }}>18.2k</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: '65%', height: '100%', background: '#10b981' }}></div>
                  </div>
               </div>
            </div>

            {/* RELOCATED: Community Hub */}
            <div className="glass-card" style={{ padding: '30px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '24px' }}>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <Rocket size={16} /> COMMUNITY HUB
               </h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 900 }}>JD</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>John D. unlocked MPC</div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 900 }}>SK</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>Sarah K. added IIT M.</div>
                  </div>
               </div>
            </div>

            {/* RELOCATED: Upcoming Exams */}
            <div className="glass-card" style={{ padding: '30px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '24px' }}>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <Clock size={16} /> UPCOMING EXAMS
               </h4>
               <div style={{ padding: '12px', background: 'rgba(245, 158, 11, 0.05)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>JEE MAIN Session 1</div>
                  <div style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: 700 }}>Ends in 4 days</div>
               </div>
            </div>

            {/* RELOCATED: Career Insights */}
            <div className="glass-card" style={{ padding: '30px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '24px' }}>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <BrainCircuit size={16} /> CAREER INSIGHTS
               </h4>
               <p style={{ fontSize: '0.8rem', color: '#64748b', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                  &quot;The best way to predict the future is to create it.&quot;
               </p>
            </div>

            {/* Intelligence Insights */}
            <div className="glass-card" style={{ padding: '30px', background: 'var(--card-bg)', borderRadius: '24px', border: '1px solid var(--card-border)' }}>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#64748b', letterSpacing: '0.1em', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <TrendingUp size={16} /> MARKET INSIGHTS
               </h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Tech Path Growth</span>
                     <span style={{ fontWeight: 900, color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}><TrendingUp size={14}/> +14%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Med/BiPC Saturation</span>
                     <span style={{ fontWeight: 900, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px' }}>Stable</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Commerce/FinTech</span>
                     <span style={{ fontWeight: 900, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px' }}><TrendingUp size={14}/> +22%</span>
                  </div>
               </div>
            </div>

            {/* Premium Overlay CTA */}
            <div className="glass-card premium-cta" style={{ position: 'relative', overflow: 'hidden', padding: '30px', background: 'var(--foreground)', borderRadius: '24px', color: 'var(--background)', border: '1px solid rgba(255,255,255,0.1)' }}>
               <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1, transform: 'rotate(15deg)' }}>
                  <Lock size={120} color="currentColor" />
               </div>
               <div style={{ position: 'relative', zIndex: 1 }}>
                 <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                   <Trophy size={18} color="#f59e0b" /> VIP MENTORSHIP
                 </h4>
                 <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5, marginBottom: '20px' }}>
                   Unlock 1-on-1 counseling with tier-1 alumni and custom simulation modeling.
                 </p>
                 <button className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: '0.9rem', background: 'var(--background)', color: 'var(--foreground)' }}>Upgrade Account</button>
               </div>
            </div>

            {/* Fast Track / Quick Actions */}
            <div className="glass-card" style={{ padding: '30px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '24px' }}>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px' }}>FAST TRACK</h4>
               <div style={{ display: 'grid', gap: '10px' }}>
                  <Link href="/quiz" className="nav-link-mini" style={{ opacity: 1, background: 'rgba(99, 102, 241, 0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Sparkles size={16} /> Re-take Diagnostic
                  </Link>
                  <Link href="/colleges" className="nav-link-mini" style={{ opacity: 1, background: 'rgba(16, 185, 129, 0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ShieldCheck size={16} /> Scholarship Search
                  </Link>
                  <Link href="/profile" className="nav-link-mini" style={{ opacity: 1, background: 'rgba(245, 158, 11, 0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Target size={16} /> Goal Settings
                  </Link>
               </div>
            </div>

         </aside>

      </div>

      {/* FINAL GAP FILLER: Horizontal Intelligence Strip */}
      <div className="glass-card" style={{ marginTop: '40px', padding: '30px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '12px' }}><ShieldCheck size={20}/></div>
            <div>
               <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Verified Path</div>
               <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>AI Audited Curriculum</div>
            </div>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '12px' }}><TrendingUp size={20}/></div>
            <div>
               <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Market Dynamic</div>
               <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Real-time Salary Feeds</div>
            </div>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ padding: '10px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', borderRadius: '12px' }}><Target size={20}/></div>
            <div>
               <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Precision Matching</div>
               <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>98.2% Success Rate</div>
            </div>
         </div>
      </div>

    </div>
  );
}
