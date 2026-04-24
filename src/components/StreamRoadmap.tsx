'use client';

import { useState } from 'react';
import { 
  CheckCircle2, ChevronRight, Info, X,
  Backpack, GraduationCap, Briefcase, Stethoscope,
  Pill, Sprout, Activity, Code, Cpu, Calculator,
  Gavel, Palette, Wrench, Zap, BookOpen, Shield, Cog
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Backpack, GraduationCap, Briefcase, Stethoscope, Pill, Sprout, Activity,
  Code, Cpu, Calculator, Gavel, Palette, Wrench, Zap, BookOpen, Shield, Cog
};

export type RoadmapNode = {
  id: string;
  title: string;
  desc: string;
  type: 'foundation' | 'core' | 'entrance' | 'degree' | 'specialization' | 'career';
  branch?: string;
  branchColor?: string;
  icon?: string;
  details: { steps: string[]; tips: string[]; exams?: string[] };
};

interface Props {
  nodes: RoadmapNode[];
  accentColor?: string;
}

export default function StreamRoadmap({ nodes, accentColor = '#4f46e5' }: Props) {
  const [activeNode, setActiveNode] = useState<RoadmapNode | null>(null);

  const getNodeColor = (node: RoadmapNode) =>
    node.branchColor || (node.branch ? accentColor : '#64748b');

  const renderIcon = (node: RoadmapNode) => {
    if (node.icon && ICON_MAP[node.icon]) {
      const Comp = ICON_MAP[node.icon];
      return <Comp size={22} />;
    }
    if (node.type === 'foundation') return <Backpack size={22} />;
    if (node.type === 'core') return <GraduationCap size={22} />;
    if (node.type === 'specialization') return <GraduationCap size={22} />;
    if (node.type === 'career') return <Briefcase size={22} />;
    return <Activity size={22} />;
  };

  return (
    <div className="glass-card" style={{ padding: '30px', background: '#ffffff', border: '1px solid #e2e8f0', minHeight: '500px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
          Career <span style={{ color: accentColor }}>Flowchart</span>
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Click any node for detailed insights.</p>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Vertical connector line */}
        <div style={{ position: 'absolute', left: '26px', top: '0', bottom: '0', width: '2px', background: `linear-gradient(to bottom, ${accentColor}40 0%, ${accentColor}20 100%)`, zIndex: 0 }}></div>

        {nodes.map((node) => (
          <div key={node.id} style={{ position: 'relative', zIndex: 1 }}>
            <div
              onClick={() => setActiveNode(node)}
              className="roadmap-node"
              style={{
                display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 16px',
                background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: '14px',
                cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                marginLeft: node.branch ? '36px' : '0',
                borderLeft: `4px solid ${getNodeColor(node)}`
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '10px', background: '#ffffff',
                border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: getNodeColor(node), flexShrink: 0,
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                {renderIcon(node)}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1e293b', marginBottom: '3px' }}>{node.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>{node.desc}</p>
              </div>
              <ChevronRight size={16} style={{ opacity: 0.3, flexShrink: 0 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeNode && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(8px)' }} onClick={() => setActiveNode(null)}>
          <div className="animate-scale-in" style={{ maxWidth: '580px', width: '100%', background: '#ffffff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '35px', background: getNodeColor(activeNode), color: 'white', position: 'relative' }}>
              <button onClick={() => setActiveNode(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer' }}>
                <X size={18} />
              </button>
              <div style={{ fontSize: '0.7rem', fontWeight: 900, marginBottom: '8px', opacity: 0.8, letterSpacing: '0.12em' }}>PATHWAY INTELLIGENCE</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>{activeNode.title}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '6px' }}>{activeNode.desc}</p>
            </div>
            <div style={{ padding: '35px' }}>
              <h5 style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '12px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color={getNodeColor(activeNode)} /> CORE STEPS
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {activeNode.details.steps.map((s, i) => (
                  <li key={i} style={{ padding: '14px', background: '#f8fafc', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 600, color: '#475569', border: '1px solid #f1f5f9' }}>{s}</li>
                ))}
              </ul>
              {activeNode.details.exams && (
                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '10px', color: '#1e293b' }}>KEY EXAMS</h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeNode.details.exams.map((exam, i) => (
                      <div key={i} style={{ padding: '6px 14px', background: '#f1f5f9', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800, color: accentColor }}>{exam}</div>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ padding: '20px', background: 'rgba(245, 158, 11, 0.05)', border: '1px dashed #f59e0b', borderRadius: '16px', display: 'flex', gap: '14px' }}>
                <Info size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#92400e', lineHeight: 1.5 }}>{activeNode.details.tips[0]}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .roadmap-node:hover {
          background: #ffffff;
          transform: translateX(8px) scale(1.01);
          box-shadow: 0 10px 20px -5px rgba(0,0,0,0.08);
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );
}
