'use client';

import { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  Info, 
  X, 
  Stethoscope, 
  Pill, 
  Sprout, 
  Activity, 
  Backpack, 
  GraduationCap, 
  Briefcase 
} from 'lucide-react';

type Node = {
  id: string;
  title: string;
  desc: string;
  type: 'foundation' | 'core' | 'entrance' | 'degree' | 'specialization' | 'career';
  branch?: 'medical' | 'pharmacy' | 'agriculture' | 'allied';
  details: {
    steps: string[];
    tips: string[];
    exams?: string[];
  };
};

const ROADMAP_NODES: Node[] = [
  {
    id: '1',
    title: '10th Standard Completion',
    desc: 'The foundation of your scientific mindset.',
    type: 'foundation',
    details: {
      steps: [
        'Secure 90%+ in Science & Mathematics for elite college entries.',
        'Conceptual clarity in Cell Biology, Basic Chemistry & Mechanics.',
        'Evaluate your aptitude for Biology vs Mathematics (BiPC vs MPC).'
      ],
      tips: ['Start reading popular science journals to build a genuine interest in medical systems.']
    }
  },
  {
    id: '2',
    title: 'Junior College (BiPC)',
    desc: 'Core academic training in Biology, Physics, Chemistry.',
    type: 'core',
    details: {
      steps: [
        'Enroll in a synchronized coaching program for NEET/CET.',
        'Focus: Anatomy, Genetics, Organic Chemistry & Optics.',
        'Maintain a balanced CGPA while preparing for competitive exams.'
      ],
      tips: ['Your NEET rank is often determined by your Physics score. Do not ignore it!']
    }
  },
  {
    id: '3',
    title: 'Medical Branch (NEET-UG)',
    desc: 'The prestigious gateway to clinical excellence.',
    type: 'entrance',
    branch: 'medical',
    details: {
      steps: [
        'Goal: 650+ for top-tier Government Medical Colleges.',
        'MBBS (5.5Y): Clinical rotations, Anatomy, & Pharmacology.',
        'BDS (5Y): Specialized training in dental sciences & surgery.'
      ],
      tips: ['AIIMS Delhi has the lowest fees but the highest global prestige.'],
      exams: ['NEET-UG', 'JIPMER', 'AIIMS (Merged)']
    }
  },
  {
    id: '4',
    title: 'Pharmacy & Clinical R&D',
    desc: 'Driving the future of medicine & drug discovery.',
    type: 'entrance',
    branch: 'pharmacy',
    details: {
      steps: [
        'B.Pharm (4Y): Pharmaceutical chemistry & formulation.',
        'Pharm.D (6Y): Clinical pharmacy focus with hospital internships.',
        'Bridge to Clinical Research & Regulatory Affairs.'
      ],
      tips: ['Pharm.D is a doctorate-level degree, allowing the title of "Doctor" in clinical settings.'],
      exams: ['State EAMCET', 'BITSAT', 'GPAT']
    }
  },
  {
    id: '5',
    title: 'Agri-Tech & Life Sciences',
    desc: 'Sustainable food systems & biological engineering.',
    type: 'entrance',
    branch: 'agriculture',
    details: {
      steps: [
        'B.Sc Agriculture (4Y): Research on crop yield & soil health.',
        'B.Sc Genetics/Biotech: Engineering DNA for medical solutions.',
        'ICAR Entry: Access to national-level agricultural research labs.'
      ],
      tips: ['Agri-Business is currently one of the highest-growth sectors in global exports.'],
      exams: ['ICAR AIEEA', 'CUET']
    }
  },
  {
    id: '6',
    title: 'Peak Specialization',
    desc: 'Mastery & Super-specialization in your domain.',
    type: 'specialization',
    details: {
      steps: [
        'MD/MS: Specialist clinical practice (Surgery, Cardio, Neuro).',
        'M.Pharm/PhD: Senior Scientist roles in Global Pharma R&D.',
        'MBA (Hospital Mgmt): Transitioning to leadership & operations.'
      ],
      tips: ['Super-specialization (DM/MCh) yields the highest global mobility and salary benchmarks.']
    }
  }
];

export default function InteractiveRoadmap() {
  const [activeNode, setActiveNode] = useState<Node | null>(null);

  const getBranchColor = (branch?: string) => {
    switch (branch) {
      case 'medical': return '#3b82f6'; // Blue
      case 'pharmacy': return '#8b5cf6'; // Purple
      case 'agriculture': return '#10b981'; // Green
      case 'allied': return '#14b8a6'; // Teal
      default: return '#64748b'; // Slate
    }
  };

  return (
    <div className="glass-card" style={{ padding: '40px', background: '#ffffff', border: '1px solid #e2e8f0', minHeight: '600px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em' }}>Career <span className="text-gradient">Flowchart</span></h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Click any node for detailed requirements and insights.</p>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Connecting Line */}
        <div style={{ position: 'absolute', left: '26px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, #e2e8f0 0%, #cbd5e1 50%, #e2e8f0 100%)', zIndex: 0 }}></div>

        {ROADMAP_NODES.map((node, i) => (
          <div key={node.id} style={{ position: 'relative', zIndex: 1 }}>
            <div 
              onClick={() => setActiveNode(node)}
              className="roadmap-node"
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px', 
                padding: '16px',
                background: '#f8fafc',
                border: '1px solid #f1f5f9',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                marginLeft: node.branch ? '40px' : '0',
                borderLeft: `5px solid ${getBranchColor(node.branch)}`
              }}
            >
              <div 
                style={{ 
                  width: '54px', 
                  height: '54px', 
                  borderRadius: '12px', 
                  background: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: getBranchColor(node.branch),
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}
              >
                {node.type === 'foundation' && <Backpack size={24} />}
                {node.type === 'core' && <GraduationCap size={24} />}
                {node.type === 'entrance' && (
                   node.branch === 'medical' ? <Stethoscope size={24} /> :
                   node.branch === 'pharmacy' ? <Pill size={24} /> :
                   node.branch === 'agriculture' ? <Sprout size={24} /> : <Activity size={24} />
                )}
                {node.type === 'specialization' && <GraduationCap size={24} />}
                {node.type === 'career' && <Briefcase size={24} />}
              </div>

              <div>
                <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1e293b', marginBottom: '4px' }}>{node.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>{node.desc}</p>
              </div>

              <ChevronRight size={18} style={{ marginLeft: 'auto', opacity: 0.3 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Info Modal/Drawer */}
      {activeNode && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(8px)' }} onClick={() => setActiveNode(null)}>
           <div 
             className="animate-scale-in"
             style={{ maxWidth: '600px', width: '100%', background: '#ffffff', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
             onClick={e => e.stopPropagation()}
           >
              <div style={{ padding: '40px', background: getBranchColor(activeNode.branch), color: 'white', position: 'relative' }}>
                 <button onClick={() => setActiveNode(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer' }}>
                   <X size={20} />
                 </button>
                 <div style={{ fontSize: '0.8rem', fontWeight: 900, marginBottom: '10px', opacity: 0.8, letterSpacing: '0.1em' }}>PATHWAY INTELLIGENCE</div>
                 <h3 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>{activeNode.title}</h3>
              </div>
              <div style={{ padding: '40px' }}>
                 <div style={{ marginBottom: '30px' }}>
                   <h5 style={{ fontWeight: 900, fontSize: '0.9rem', marginBottom: '15px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <CheckCircle2 size={18} color={getBranchColor(activeNode.branch)} /> CORE STEPS
                   </h5>
                   <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                     {activeNode.details.steps.map((s, i) => (
                       <li key={i} style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, color: '#475569', border: '1px solid #f1f5f9' }}>{s}</li>
                     ))}
                   </ul>
                 </div>

                 {activeNode.details.exams && (
                   <div style={{ marginBottom: '30px' }}>
                     <h5 style={{ fontWeight: 900, fontSize: '0.9rem', marginBottom: '15px', color: '#1e293b' }}>ASSOCIATED EXAMS</h5>
                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {activeNode.details.exams.map((exam, i) => (
                          <div key={i} style={{ padding: '8px 16px', background: '#f1f5f9', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)' }}>{exam}</div>
                        ))}
                     </div>
                   </div>
                 )}

                 <div style={{ padding: '24px', background: 'rgba(245, 158, 11, 0.05)', border: '1px dashed #f59e0b', borderRadius: '20px', display: 'flex', gap: '16px' }}>
                    <Info size={24} color="#f59e0b" style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#92400e', lineHeight: 1.5 }}>
                       {activeNode.details.tips[0]}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      )}

      <style jsx>{`
        .roadmap-node:hover {
          background: #ffffff;
          transform: translateX(10px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          border-color: var(--primary);
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
