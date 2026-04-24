'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Quote } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    document.cookie = "auth-session=true; path=/; max-age=86400; SameSite=Lax";
    window.location.href = '/home'; // Hard redirect ensures middleware reads new cookie
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Image Layer */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <img 
          src="/main_bg.jpg" 
          alt="Auth Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
        />
      </div>

      <div className="animate-float" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 60%)', filter: 'blur(90px)', zIndex: -1 }}></div>
      <div className="auth-design-side">
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px', paddingRight: '40px' }}>
          <Quote size={48} style={{ opacity: 0.15, marginBottom: '20px', color: 'var(--foreground)' }} />
          <h2 style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
            Transform your potential into a <span className="text-gradient">powerhouse career.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
            &quot;The future belongs to those who learn more skills and combine them in creative ways.&quot;
          </p>
          <div style={{ marginTop: '20px', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>— ROBERT GREENE</div>
        </div>
      </div>

      {/* Form Side */}
      <div className="auth-form-side">
        <div className="glass-card animate-scale-in" style={{ 
          maxWidth: '480px', width: '100%', padding: '50px',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 50px 80px -20px rgba(99, 102, 241, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
          borderRadius: '30px',
          transform: 'translateY(0)',
          transition: 'transform 0.5s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <Image src="/logo.png" width={120} height={120} alt="UrNxtMove" style={{ borderRadius: '24px', boxShadow: '0 15px 30px -5px rgba(0,0,0,0.1)' }} />
            </div>
            <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '10px', letterSpacing: '-0.02em' }}>
              Welcome Back
            </h1>
            <p style={{ color: '#475569', lineHeight: 1.5, fontWeight: 500 }}>
              Access your career pulse and track your professional evolution.
            </p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ position: 'relative' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                 <Mail size={18} style={{ position: 'absolute', left: '16px', top: '18px', opacity: 0.3 }} />
                 <input 
                  type="email" 
                  required
                  className="input-field" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', paddingLeft: '48px', background: 'rgba(255,255,255,0.9)' }}
                />
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                 <label style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Password</label>
                 <Link href="/forgot-password" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.9 }} className="hover-link">Forgot password?</Link>
              </div>
              <div style={{ position: 'relative' }}>
                 <Lock size={18} style={{ position: 'absolute', left: '16px', top: '18px', opacity: 0.3 }} />
                 <input 
                  type="password" 
                  required
                  className="input-field" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', paddingLeft: '48px', background: 'rgba(255,255,255,0.9)' }}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ height: '56px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              Authenticate <ArrowRight size={18} />
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '35px', fontSize: '0.95rem', fontWeight: 500, color: '#64748b' }}>
            New to the platform? <Link href="/signup" className="text-gradient" style={{ fontWeight: '800' }}>Create Account</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .auth-design-side {
          flex: 1;
          display: none;
          flex-direction: column;
          justify-content: center;
          padding: 80px 80px 80px 120px;
          position: relative;
        }
        .auth-form-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }
        .hover-link:hover { opacity: 1 !important; text-decoration: underline; }
        
        @media (min-width: 992px) {
          .auth-design-side {
            display: flex;
          }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
