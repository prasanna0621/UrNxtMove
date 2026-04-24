'use client';
import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

export default function ScrollReveal({ children, style }: { children: ReactNode, style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      style={{
        ...style,
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      {children}
    </div>
  );
}
