'use client';

import Link from "next/link";
import Image from "next/image";
import { 
  BrainCircuit, 
  Mail, 
  MessageSquare, 
  Share2, 
  Globe, 
  ExternalLink,
  BookOpen,
  GraduationCap
} from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--card-bg)', 
      borderTop: '1px solid var(--card-border)', 
      padding: '40px 20px',
      marginTop: '60px'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          
          {/* Brand Mission */}
          <div>
            <Link href="/" style={{
              fontSize: '1.4rem',
              fontWeight: '900',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              letterSpacing: '-0.04em',
              marginBottom: '25px'
            }}>
              <Image src="/logo.png" alt="UrNxtMove" width={32} height={32} style={{ borderRadius: '8px' }} />
              <span className="text-gradient">URNXTMOVE</span>
            </Link>
            <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: 500 }}>
              Empowering the next generation of professionals with data-driven roadmaps, expert diagnostic tools, and deep-dive academic insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
             <h4 style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '25px' }}>RESOURCES</h4>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyle: 'none', padding: 0 }}>
                <li><Link href="/home" className="footer-link">Career Exploration</Link></li>
                <li><Link href="/quiz" className="footer-link">Diagnostic Quiz</Link></li>
                <li><Link href="/colleges" className="footer-link">College Hub</Link></li>
                <li><Link href="/profile" className="footer-link">Student Profile</Link></li>
             </ul>
          </div>

          {/* Official Portals */}
          <div>
             <h4 style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '25px' }}>OFFICIAL ACADEMIA</h4>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyle: 'none', padding: 0 }}>
                <li><a href="https://jeemain.nta.nic.in/" target="_blank" className="footer-link">NTA Portal <ExternalLink size={14} /></a></li>
                <li><a href="https://neet.nta.nic.in/" target="_blank" className="footer-link">NEET UG Hub <ExternalLink size={14} /></a></li>
                <li><a href="https://www.icai.org/" target="_blank" className="footer-link">ICAI CA Portal <ExternalLink size={14} /></a></li>
             </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '25px' }}>STAY AHEAD</h4>
             <div style={{ position: 'relative' }}>
                <input 
                  type="email" 
                  placeholder="Enter email for career alerts..." 
                  className="newsletter-input" 
                />
                <button className="newsletter-btn">JOIN</button>
             </div>
             <div style={{ display: 'flex', gap: '20px', marginTop: '30px', opacity: 0.3 }}>
                <MessageSquare size={20} className="hover:opacity-100 cursor-pointer transition" />
                <Share2 size={20} className="hover:opacity-100 cursor-pointer transition" />
                <Globe size={20} className="hover:opacity-100 cursor-pointer transition" />
             </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
           <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>© 2026 URNXTMOVE. All Rights Reserved.</p>
           <div style={{ display: 'flex', gap: '30px', color: '#64748b', fontSize: '0.8rem', fontWeight: 800 }}>
              <span className="cursor-pointer hover:text-primary transition">PRIVACY</span>
              <span className="cursor-pointer hover:text-primary transition">TERMS</span>
              <span className="cursor-pointer hover:text-primary transition">CONTACT</span>
           </div>
        </div>
      </div>

    </footer>
  );
}
