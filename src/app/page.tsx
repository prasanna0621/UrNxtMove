import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BrainCircuit, Target, Compass, Zap, Activity } from "lucide-react";
import TiltCard from "@/components/landing/TiltCard";
import ScrollReveal from "@/components/landing/ScrollReveal";
import FaqAccordion from "@/components/landing/FaqAccordion";
import StreamCarousel from "@/components/landing/StreamCarousel";
import Footer from "@/components/Footer";

const FAQ_DATA = [
  { 
    icon: '🤔', 
    question: "What if I choose MPC but hate Math later?", 
    answer: "Our diagnostic platform rigorously analyzes your affinity before you commit. We break down the real syllabus, failure rates, and provide an exact probabilistic match so you never make a blind guess." 
  },
  { 
    icon: '😟', 
    question: "Is CEC basically the end of my tech dreams?", 
    answer: "Not at all. Commerce seamlessly integrates into FinTech, Product Management, and Business Analytics. We show you exact hybrid roadmaps where CEC students enter Tier-1 Tech companies." 
  },
  {
    icon: '🚀',
    question: "How accurate is the trajectory simulation?",
    answer: "We use millions of admission and placement records from Tier-1 and Tier-2 institutions across India. Our Monte-Carlo style simulations project your starting salary with 85% regional accuracy."
  }
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{
        flex: 1,
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Vibrant Colorful Background Image Layer */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <img 
            src="/colorful_landing_bg.jpg" 
            alt="Dynamic Future" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1.0 }} 
          />
        </div>

        <ScrollReveal style={{ width: '100%', display: 'flex', justifyContent: 'center', zIndex: 1 }}>
            <div className="glass-card main-hero-card" style={{
              maxWidth: '1100px',
              width: '100%',
              textAlign: 'center',
              padding: '0',
              background: 'var(--card-bg)',
              backdropFilter: 'blur(30px)',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--card-shadow)',
              borderRadius: '40px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '320px', position: 'relative' }}>
                <img src="/hero_card_img.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Future Vision" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--card-bg))' }}></div>
              </div>
              
              <div style={{ padding: '4rem' }}>
                <div className="pulse-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50px', marginBottom: '30px', color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem', letterSpacing: '0.05em', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                  <span style={{ position: 'relative', display: 'flex', width: '12px', height: '12px' }}>
                    <span className="animate-ping" style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: 'var(--primary)', opacity: 0.75 }}></span>
                    <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '12px', width: '12px', backgroundColor: 'var(--primary)' }}></span>
                  </span>
                  DATA-DRIVEN CAREER MAPPING
                </div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-0.04em', color: 'var(--foreground)' }}>
                  Map Your Future with <br/>
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    <span className="text-gradient" style={{ position: 'relative', zIndex: 2 }}>UrNxtMove</span>
                    <svg style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '24px', zIndex: 1, opacity: 0.3 }} viewBox="0 0 300 24" preserveAspectRatio="none">
                      <path d="M0 20 Q 150 0 300 20" stroke="var(--primary)" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                </h1>
                
                <p style={{ fontSize: '1.25rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 500, marginBottom: '50px', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto 50px auto' }}>
                  Don&apos;t leave your career to chance. Discover the exact educational pathway tailored to your unique skills, passions, and industry trends based on millions of real-world data points.
                </p>
                
                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/signup" className="btn-primary hero-btn" style={{ padding: '20px 48px', fontSize: '1.15rem' }}>
                    Launch Journey <ArrowRight size={22} />
                  </Link>
                  <Link href="/login" className="btn-glass" style={{ padding: '20px 48px', fontSize: '1.15rem' }}>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
         </ScrollReveal>

         {/* Static Icons (Removed moving) */}
         <div style={{ position: 'absolute', top: '15%', left: '12%', background: 'var(--card-bg)', padding: '15px', borderRadius: '20px', border: '1px solid var(--card-border)', opacity: 0.5 }}>
           <BrainCircuit size={32} color="var(--primary)" />
         </div>
         <div style={{ position: 'absolute', bottom: '20%', right: '12%', background: 'var(--card-bg)', padding: '15px', borderRadius: '20px', border: '1px solid var(--card-border)', opacity: 0.5 }}>
           <Target size={32} color="var(--accent)" />
         </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '100px 20px', background: 'var(--secondary)', position: 'relative' }}>
         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--foreground)' }}>How <span className="text-gradient">UrNxtMove</span> Works</h2>
                <p style={{ color: 'var(--foreground)', opacity: 0.7, fontSize: '1.1rem', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>Three simple steps to eliminate confusion and architect your perfect career trajectory.</p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                <div className="glass-card hover-lift" style={{ padding: '0', textAlign: 'center', border: '1px solid var(--card-border)', background: 'var(--card-bg)', overflow: 'hidden' }}>
                  <div style={{ height: '160px', position: 'relative' }}>
                    <img src="/feature_diagnostic.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, var(--card-bg) 100%)' }}></div>
                  </div>
                  <div style={{ padding: '30px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-50px auto 20px', fontSize: '1.2rem', fontWeight: 900, position: 'relative', zIndex: 1, border: '4px solid var(--card-bg)' }}>1</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', color: 'var(--foreground)' }}>Take the Diagnostic</h3>
                    <p style={{ color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.6 }}>Answer a specialized 10-question pulse check that evaluates your analytical, creative, and systematic thinking.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="glass-card hover-lift" style={{ padding: '0', textAlign: 'center', border: '1px solid var(--card-border)', background: 'var(--card-bg)', overflow: 'hidden' }}>
                  <div style={{ height: '160px', position: 'relative' }}>
                    <img src="/feature_trajectory.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, var(--card-bg) 100%)' }}></div>
                  </div>
                  <div style={{ padding: '30px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-50px auto 20px', fontSize: '1.2rem', fontWeight: 900, position: 'relative', zIndex: 1, border: '4px solid var(--card-bg)' }}>2</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', color: 'var(--foreground)' }}>AI Evaluation</h3>
                    <p style={{ color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.6 }}>Our engine matches your psychological profile against historical success rates across 6 major academic streams.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="glass-card hover-lift" style={{ padding: '0', textAlign: 'center', border: '1px solid var(--card-border)', background: 'var(--card-bg)', overflow: 'hidden' }}>
                  <div style={{ height: '160px', position: 'relative' }}>
                    <img src="/feature_simulations.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, var(--card-bg) 100%)' }}></div>
                  </div>
                  <div style={{ padding: '30px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-50px auto 20px', fontSize: '1.2rem', fontWeight: 900, position: 'relative', zIndex: 1, border: '4px solid var(--card-bg)' }}>3</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', color: 'var(--foreground)' }}>Unlock Your Roadmap</h3>
                    <p style={{ color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.6 }}>Receive a deeply detailed, multi-year progression plan complete with college requirements, salaries, and real-world timelines.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
         </div>
      </section>

      {/* Dynamic Stream Carousel Section */}
      <section style={{ padding: '80px 20px', background: 'transparent' }}>
         <div className="container reveal-up" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '0.05em' }}>CAREER VECTORS</div>
                <h2 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--foreground)' }}>Explore Available <span className="text-gradient">Pathways</span></h2>
                <p style={{ color: 'var(--foreground)', opacity: 0.7, fontSize: '1.1rem', marginTop: '16px' }}>Tap below to cycle through precise educational roadmaps.</p>
              </div>
              <StreamCarousel />
            </ScrollReveal>
         </div>
      </section>

      {/* Target Audience / "The Anxiety" Section -> Interactive FAQ */}
      <section style={{ padding: '80px 20px', background: 'var(--secondary)', position: 'relative' }}>
         {/* Top Border transition */}
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)' }}></div>
         
         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '80px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '350px' }}>
            <ScrollReveal>
               <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -25, right: -15, zIndex: 10, background: 'var(--accent)', color: 'white', padding: '8px 16px', borderRadius: '30px', fontWeight: 800, fontSize: '0.75rem', boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)' }}>
                    COMMON DOUBTS EXPLAINED
                  </div>
                  <FaqAccordion items={FAQ_DATA} />
               </div>
            </ScrollReveal>
          </div>
          <div style={{ flex: 1, minWidth: '350px' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-0.03em', color: 'var(--foreground)' }}>Completed 10th Grade?<br/><span style={{ color: 'var(--primary)' }}>The Confusion is Real.</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8, marginBottom: '24px', lineHeight: 1.7 }}>
                You&apos;ve just finished a major milestone, but now comes the hardest part. Should you take Intermediate? Diploma? ITI? What happens if you choose BiPC instead of MPC?
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8, marginBottom: '40px', lineHeight: 1.7 }}>
                A single choice dictates the next 10 years of your life. Don&apos;t let society choose for you. Get a massive, detailed breakdown of every single opportunity.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                <div className="glass-card flex items-center gap-3 p-4">
                  <Activity className="text-primary" size={24} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Live Polling</span>
                </div>
                <div className="glass-card flex items-center gap-3 p-4">
                  <Compass className="text-purple-500" size={24} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Deep Mapping</span>
                </div>
              </div>

              <Link href="/signup" className="btn btn-glass" style={{ padding: '16px 36px', fontSize: '1.05rem', background: 'var(--card-bg)', borderRadius: '16px' }}>
                Create Free Account
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Footer Wrapper (Integrated gently) */}
      <section style={{ padding: '100px 20px', textAlign: 'center', background: 'var(--background)' }}>
        <ScrollReveal>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(135deg, var(--primary) 0%, #4338ca 100%)', padding: '60px 40px', borderRadius: '40px', color: 'white', boxShadow: '0 30px 60px -15px rgba(79, 70, 229, 0.4)', border: 'none' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.03em' }}>Stop Guessing Your Future.</h2>
            <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>Join thousands of visionary students mapping their ideal career trajectories today.</p>
            <Link href="/signup" className="btn" style={{ padding: '16px 50px', fontSize: '1.1rem', display: 'inline-block', background: '#ffffff', color: '#4f46e5', fontWeight: 900, borderRadius: '50px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              Get Started Now
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />

      <style>{`
        .hero-btn { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .hero-btn:hover { padding-left: 55px; padding-right: 45px; }
        .main-hero-card { backdrop-filter: blur(30px) saturate(150%); -webkit-backdrop-filter: blur(30px) saturate(150%); }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .floating-element { animation: float 6s ease-in-out infinite; }
        .float-2 { animation-delay: -3s; animation-duration: 7s; }
        .animate-ping { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
