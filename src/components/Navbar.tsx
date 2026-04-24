'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, User, Search, Bell, Target, Moon, Sun, Menu, X } from 'lucide-react';
import { globalSearch } from '../app/actions/search';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const pathname = usePathname();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<{ title: string; url: string; type: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (search.length > 1) {
        setIsSearching(true);
        const res = await globalSearch(search);
        setResults(res);
        setIsSearching(false);
      } else {
        setResults([]);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [search]);

  const isPublicPage = ['/', '/login', '/signup', '/forgot-password'].includes(pathname);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      background: scrolled || mobileMenuOpen ? 'var(--card-bg)' : 'transparent',
      backdropFilter: scrolled || mobileMenuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--card-border)' : '1px solid transparent',
      padding: scrolled || mobileMenuOpen ? '12px 0' : '24px 0',
      boxShadow: scrolled || mobileMenuOpen ? 'var(--card-shadow)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link href={isPublicPage ? "/" : "/home"} className="desktop-brand" style={{
            fontSize: '1.4rem',
            fontWeight: '900',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            letterSpacing: '-0.04em',
            color: 'var(--foreground)'
          }}>
            <Image src="/logo.png" alt="UrNxtMove" width={32} height={32} style={{ borderRadius: '8px' }} priority />
            <span className="text-gradient" style={{ whiteSpace: 'nowrap', fontSize: 'clamp(1rem, 4vw, 1.4rem)' }}>URNXTMOVE</span>
          </Link>

          {!isPublicPage && (
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
               <Search style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3, color: 'var(--foreground)' }} size={18} />
               <input 
                 type="text" 
                 placeholder="Search..." 
                 className="nav-search-bar"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 style={{ background: 'var(--secondary)', color: 'var(--foreground)', border: '1px solid var(--card-border)' }}
               />
               {results.length > 0 && (
                 <div className="search-results-dropdown glass-card shadow-2xl">
                    {results.map((r, i) => (
                      <Link key={i} href={r.url} onClick={() => {setSearch(''); setMobileMenuOpen(false);}} className="search-result-item">
                         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Target size={14} className="text-primary" />
                            <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{r.title}</span>
                         </div>
                         <span style={{ opacity: 0.4, fontSize: '0.7rem' }}>{r.type}</span>
                      </Link>
                    ))}
                 </div>
               )}
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            style={{ 
              background: 'var(--secondary)', 
              border: '1px solid var(--card-border)', 
              cursor: 'pointer', 
              color: 'var(--foreground)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              transition: 'all 0.3s ease' 
            }}
            title="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             style={{ 
              background: 'var(--secondary)', 
              border: '1px solid var(--card-border)', 
              cursor: 'pointer', 
              color: 'var(--foreground)', 
              display: 'none', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '40px', 
              height: '40px', 
              borderRadius: '12px'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className={`desktop-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`} style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {isPublicPage ? (
              <>
                {pathname !== '/login' && <Link onClick={()=>setMobileMenuOpen(false)} href="/login" className="nav-link" style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--foreground)', opacity: 0.6 }}>SIGN IN</Link>}
                {pathname !== '/signup' && <Link onClick={()=>setMobileMenuOpen(false)} href="/signup" className="btn-primary" style={{ padding: '10px 25px', borderRadius: '12px' }}>GET STARTED</Link>}
              </>
            ) : (
              <>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="nav-group">
                   <Link onClick={()=>setMobileMenuOpen(false)} href="/home" className={`nav-link-mini ${pathname === '/home' ? 'active' : ''}`}>DASHBOARD</Link>
                   <Link onClick={()=>setMobileMenuOpen(false)} href="/quiz" className={`nav-link-mini ${pathname === '/quiz' ? 'active' : ''}`}>QUIZ</Link>
                   <Link onClick={()=>setMobileMenuOpen(false)} href="/colleges" className={`nav-link-mini ${pathname === '/colleges' ? 'active' : ''}`}>COLLEGES</Link>
                </div>

                <div className="nav-divider" style={{ width: '1px', height: '24px', background: 'var(--card-border)' }}></div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="nav-group">
                   <div style={{ position: 'relative', cursor: 'pointer', color: 'var(--foreground)' }}>
                      <Bell size={20} opacity={0.5} />
                      <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)', animation: 'pulse 2s infinite' }}></div>
                   </div>

                   <Link onClick={()=>setMobileMenuOpen(false)} href="/profile" style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '10px',
                     padding: '8px 20px',
                     borderRadius: '50px',
                     background: pathname === '/profile' ? 'rgba(59, 130, 246, 0.1)' : 'var(--secondary)',
                     border: '1px solid',
                     borderColor: pathname === '/profile' ? 'rgba(59, 130, 246, 0.3)' : 'var(--card-border)',
                     color: pathname === '/profile' ? 'var(--primary)' : 'var(--foreground)',
                     transition: 'all 0.3s ease',
                     fontWeight: '900',
                     fontSize: '0.85rem'
                   }}>
                     <User size={18} /> PROFILE
                   </Link>
                   
                    <button 
                      onClick={() => {
                        document.cookie = "auth-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                        window.location.href = "/";
                      }}
                      className="signout-btn" 
                      title="Sign Out"
                      style={{ cursor: 'pointer', border: 'none', background: 'transparent', color: 'var(--foreground)' }}
                    >
                      <LogOut size={18} /> 
                    </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav-links.mobile-open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            padding: 20px;
            border-bottom: 1px solid var(--card-border);
            box-shadow: var(--card-shadow);
            align-items: flex-start !important;
          }
          .nav-group {
            flex-direction: column;
            align-items: flex-start !important;
            width: 100%;
          }
          .nav-divider {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
