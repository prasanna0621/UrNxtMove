'use client';

import { 
  GraduationCap, 
  Target, 
  Zap,
  Building2,
  Medal,
  HeartPulse,
  Syringe,
  Microscope,
  Sprout,
  Code,
  Cpu,
  Plane,
  LineChart,
  Calculator,
  Gavel,
  PieChart,
  Palette,
  Film,
  Trophy,
  ChefHat,
  Wrench,
  Shield,
  Radio,
  BookOpen,
  Cog,
  Globe,
  Activity,
  Briefcase,
  Users,
  Award
} from 'lucide-react';
import { StreamDetail } from '@/data/stream-details';

// Icon lookup map: resolves string names → Lucide components (safe for client)
const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse, Syringe, Microscope, Sprout, Code, Cpu, Plane, LineChart,
  Calculator, Gavel, PieChart, Palette, Film, Trophy, ChefHat, Wrench,
  Shield, Radio, BookOpen, Cog, Globe, Activity, Briefcase, Users, Award,
  GraduationCap, Target, Zap, Building2, Medal
};

function Icon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  const Comp = ICON_MAP[name] || Target;
  return <Comp size={size} color={color} />;
}

interface Props {
  data: StreamDetail;
  accentColor?: string;
}

export default function DeepDiveDetails({ data, accentColor = '#4f46e5' }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      
      {/* 1. HIGH-IMPACT CAREER LEADERBOARD */}
      <section className="glass-card" style={{ padding: '30px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <Medal size={24} color={accentColor} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e293b' }}>High-Impact Career Leaderboard</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {data.leaderboard.map((role, i) => (
            <div key={i} className="compact-role-card" style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: '#ffffff', border: '1px solid #f1f5f9' }}>
                  <Icon name={role.icon} size={20} color={accentColor} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 900, fontSize: '1rem', color: '#1e293b' }}>{role.title}</h4>
                  <div style={{ fontSize: '0.65rem', fontWeight: 900, color: accentColor, textTransform: 'uppercase' }}>{role.impact}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, lineHeight: 1.4, marginBottom: '12px' }}>{role.desc}</p>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b', opacity: 0.6 }}>Roadmap: {role.path}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PATHWAY INTELLIGENCE SECTIONS */}
      {data.pathways.map((section, idx) => (
        <section key={idx} className="glass-card" style={{ padding: '30px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
            <Icon name={section.icon} size={24} color={accentColor} />
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1e293b' }}>{section.title}</h2>
              <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>{section.subtitle}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
            {section.subgroups.map((sub, i) => (
              <div key={i}>
                <h5 style={{ fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {sub.label}
                  <div style={{ flex: 1, height: '1px', background: '#f1f5f9' }}></div>
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {sub.items.map((item, j) => (
                    <div key={j} className="pathway-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(130px, 155px) 1fr', gap: '12px', padding: '12px 15px', background: '#f8fafc', borderRadius: '12px', border: '1px solid transparent', transition: 'all 0.2s' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.88rem', color: item.color, lineHeight: 1.3 }}>{item.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500, lineHeight: 1.4 }}>{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 3. STRATEGIC PRO TIPS */}
      <section className="glass-card" style={{ padding: '30px', background: `${accentColor}08`, border: `1px dashed ${accentColor}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <Zap size={20} color={accentColor} />
          <h2 style={{ fontSize: '1.2rem', fontWeight: 900, color: accentColor }}>Strategic Pro Tips</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
          {data.proTips.map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
              <div style={{ padding: '8px', borderRadius: '8px', background: '#ffffff', color: accentColor, border: `1px solid ${accentColor}20`, flexShrink: 0 }}>
                <Icon name={tip.icon} size={15} color={accentColor} />
              </div>
              <p style={{ fontSize: '0.85rem', color: accentColor, fontWeight: 700, lineHeight: 1.5, marginTop: '4px' }}>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ELITE INSTITUTIONS & EXAMS HUB */}
      <section className="glass-card" style={{ padding: '30px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
          <Building2 size={24} color={accentColor} />
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900 }}>Elite Institutions & Exams</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ padding: '12px', fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8' }}>CATEGORY</th>
                <th style={{ padding: '12px', fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8' }}>KEY EXAMS</th>
                <th style={{ padding: '12px', fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8' }}>PREMIER INSTITUTIONS</th>
              </tr>
            </thead>
            <tbody>
              {data.hub.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', background: i % 2 === 0 ? 'transparent' : '#f8fafc' }}>
                  <td style={{ padding: '15px 12px', fontSize: '0.85rem', fontWeight: 900, color: '#1e293b' }}>{row.cat}</td>
                  <td style={{ padding: '15px 12px', fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>{row.exam}</td>
                  <td style={{ padding: '15px 12px', fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>{row.inst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style jsx>{`
        .compact-role-card:hover {
          background: #ffffff;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.05);
          border-color: ${accentColor};
        }
        .pathway-row:hover {
          background: #ffffff;
          border-color: #e2e8f0;
          transform: translateX(4px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}
