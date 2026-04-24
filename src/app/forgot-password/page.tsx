'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, ShieldCheck, Lock, Quote } from "lucide-react";

export default function ForgotPassword() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length >= 4) setStep(3);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) setStep(4);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Image Layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
        <img 
          src="/main_bg.jpg" 
          alt="Auth Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} 
        />
      </div>

      <div className="animate-float" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 60%)', filter: 'blur(90px)', zIndex: -1 }}></div>

      {/* Design Side - Hidden on very small screens */}
      <div className="auth-design-side">
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px', paddingRight: '40px' }}>
          <Quote size={48} style={{ opacity: 0.15, marginBottom: '20px', color: 'var(--foreground)' }} />
          <h2 style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
            Setbacks are just <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>stepping stones.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
            &quot;The only real mistake is the one from which we learn nothing.&quot;
          </p>
          <div style={{ marginTop: '20px', fontWeight: 800, color: '#ef4444', letterSpacing: '0.05em' }}>— HENRY FORD</div>
        </div>
      </div>

      {/* Form Side */}
      <div className="auth-form-side">
        <div className="glass-card animate-scale-in" style={{ 
          maxWidth: '480px', width: '100%', padding: '60px', position: 'relative',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 50px 80px -20px rgba(99, 102, 241, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
          borderRadius: '30px'
        }}>
          
          {step < 4 && (
            <button 
              type="button"
              onClick={() => step > 1 ? setStep((prev) => (prev - 1) as 1 | 2 | 3) : window.history.back()}
              style={{ position: 'absolute', top: '30px', left: '30px', color: '#64748b', fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }} 
              className="back-link"
            >
              <ArrowLeft size={16} /> BACK
            </button>
          )}

          {/* Step Indicator */}
          {step < 4 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px', marginTop: '10px' }}>
              {[1, 2, 3].map((s) => (
                <div key={s} style={{ 
                  width: s === step ? '24px' : '8px', 
                  height: '8px', 
                  borderRadius: '8px', 
                  background: s === step ? 'var(--primary)' : (s < step ? '#10b981' : '#e2e8f0'),
                  transition: 'all 0.3s ease'
                }} />
              ))}
            </div>
          )}

          {step === 1 && (
            <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                  <Image src="/logo.png" width={120} height={120} alt="UrNxtMove" style={{ borderRadius: '24px', boxShadow: '0 15px 30px -5px rgba(0,0,0,0.1)' }} />
                </div>
                 <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em' }}>
                  Reset Access
                </h1>
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '1.05rem', fontWeight: 500 }}>
                  Enter the email associated with your account and we&apos;ll send a secure verification code.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ position: 'relative' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>Email Address</label>
                  <div style={{ position: 'relative' }}>
                     <Mail size={20} style={{ position: 'absolute', left: '18px', top: '18px', opacity: 0.3 }} />
                     <input 
                      type="email" 
                      required
                      className="input-field" 
                      placeholder="student@urnxtmove.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ padding: '18px 20px 18px 52px', fontSize: '1.05rem', background: 'rgba(255,255,255,0.9)' }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{ height: '56px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 800 }}>
                  Send Code <ArrowRight size={20} />
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', color: '#10b981' }}>
                  <ShieldCheck size={36} />
                </div>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em' }}>
                  Verify Identity
                </h1>
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '1.05rem', fontWeight: 500 }}>
                  We&apos;ve sent a 6-digit code to <strong style={{ color: 'var(--foreground)' }}>{email}</strong>
                </p>
              </div>

              <form onSubmit={handleCodeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ position: 'relative' }}>
                  <label style={{ display: 'block', textAlign: 'center', fontSize: '0.8rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>Security Code</label>
                  <input 
                    type="text" 
                    required
                    maxLength={6}
                    className="input-field" 
                    placeholder="000000"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                    style={{ fontSize: '1.5rem', textAlign: 'center', letterSpacing: '0.5em', fontWeight: 800, background: 'rgba(255,255,255,0.9)' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ height: '56px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 800 }}>
                  Confirm Verification <ArrowRight size={20} />
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', color: 'var(--primary)' }}>
                  <Lock size={36} />
                </div>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em' }}>
                  New Password
                </h1>
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '1.05rem', fontWeight: 500 }}>
                  Secure your account with a strong new password.
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ position: 'relative' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>New Password</label>
                  <div style={{ position: 'relative' }}>
                     <Lock size={20} style={{ position: 'absolute', left: '18px', top: '18px', opacity: 0.3 }} />
                     <input 
                      type="password" 
                      required
                      className="input-field" 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ padding: '18px 20px 18px 52px', fontSize: '1.05rem', background: 'rgba(255,255,255,0.9)' }}
                    />
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>Confirm Password</label>
                  <div style={{ position: 'relative' }}>
                     <Lock size={20} style={{ position: 'absolute', left: '18px', top: '18px', opacity: 0.3 }} />
                     <input 
                      type="password" 
                      required
                      className="input-field" 
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{ padding: '18px 20px 18px 52px', fontSize: '1.05rem', background: 'rgba(255,255,255,0.9)' }}
                    />
                  </div>
                </div>
                
                {password && confirmPassword && password !== confirmPassword && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 700, margin: '-10px 0 0 0' }}>Passwords do not match.</p>
                )}

                <button type="submit" disabled={!password || password !== confirmPassword} className="btn-primary" style={{ height: '56px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 800, opacity: (!password || password !== confirmPassword) ? 0.5 : 1 }}>
                  Update Credential <ArrowRight size={20} />
                </button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', animation: 'scaleIn 0.5s ease-out', padding: '20px 0' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '30px', 
                background: 'rgba(16, 185, 129, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 35px', 
                color: '#10b981',
                boxShadow: '0 15px 30px rgba(16, 185, 129, 0.15)' 
              }}>
                <CheckCircle2 size={50} />
              </div>
              <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.04em' }}>Account Secured</h1>
              <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '40px', fontSize: '1.1rem', fontWeight: 500 }}>
                Your password has been successfully reset. You can now access your dashboard.
              </p>
              <Link href="/login" className="btn-primary" style={{ display: 'inline-flex', width: '100%', padding: '18px', justifyContent: 'center', borderRadius: '16px', fontSize: '1.05rem' }}>
                Return to Login
              </Link>
            </div>
          )}
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
        .back-link:hover { color: var(--primary) !important; transform: translateX(-5px); }
        
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
