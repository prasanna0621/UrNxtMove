'use client';
import { useRef, useState, MouseEvent, CSSProperties, ReactNode } from 'react';

export default function TiltCard({ children, className, style }: { children: ReactNode, className?: string, style?: CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const maxRotation = 8;
    const rotateY = ((x / width) - 0.5) * (maxRotation * 2);
    const rotateX = ((y / height) - 0.5) * -(maxRotation * 2);
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transition: isHovered ? 'none' : 'transform 0.5s ease',
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div style={{ transform: 'translateZ(30px)', width: '100%', height: '100%' }}>
         {children}
      </div>
    </div>
  );
}
