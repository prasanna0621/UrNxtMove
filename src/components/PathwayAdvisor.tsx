'use client';

import { useState } from 'react';
import { 
  Stethoscope, 
  Pill, 
  Sprout, 
  Activity, 
  Microscope, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  Map, 
  Target,
  Globe,
  Sparkles
} from 'lucide-react';

interface PathOption {
  label: string;
  sublabel: string;
  id: string;
  icon: React.ReactNode;
}

interface CareerPath {
  role: string;
  duration: string;
  focus: string;
}

interface StepData {
  question?: string;
  options?: PathOption[];
  title?: string;
  desc?: string;
  exams?: string[];
  paths?: CareerPath[];
  proTip?: string;
}

const PATH_DATA: Record<string, StepData> = {
  root: {
    question: "What is your primary goal after BiPC?",
    options: [
      { label: "Clinical Medicine", sublabel: "Working with patients", id: "medical", icon: <Stethoscope size={24} /> },
      { label: "Pharmaceuticals", sublabel: "Drug research & development", id: "pharmacy", icon: <Pill size={24} /> },
      { label: "Agronomy & Life", sublabel: "Nature, crops, & bioscience", id: "agro", icon: <Sprout size={24} /> },
      { label: "Allied Healthcare", sublabel: "Tech & support systems", id: "paramedical", icon: <Activity size={24} /> }
    ]
  },
  medical: {
    title: "The Medical Frontier",
    desc: "Rigorous, prestigious, and life-changing. Requires a multi-year commitment.",
    exams: ["NEET-UG (National Level)", "AIIMS & JIPMER (via NEET)"],
    paths: [
      { role: "MBBS", duration: "5.5Y", focus: "General Medicine" },
      { role: "BDS", duration: "4Y", focus: "Dental Surgery" },
      { role: "BAMS/BHMS", duration: "5.5Y", focus: "Alternative Medicine" }
    ],
    proTip: "Priority 1: NCERT Biology. 90% of NEET is from these texts."
  },
  pharmacy: {
    title: "The Pharma Engine",
    desc: "A blooming sector in India (The World's Pharmacy). Focus on chemistry and therapeutics.",
    exams: ["State EAMCET", "NIPER (for Masters)", "BITSAT"],
    paths: [
      { role: "B.Pharm", duration: "4Y", focus: "Manufacturing & Retail" },
      { role: "Pharm.D", duration: "6Y", focus: "Clinical Pharmacy" },
      { role: "B.Sc Biotech", duration: "3Y", focus: "R&D" }
    ],
    proTip: "Pharm.D is gaining massive traction in Global Hospitals for Clinical Analytics."
  },
  agro: {
    title: "Agronomy & Research",
    desc: "Sustainable future. Solving the global food crisis through science.",
    exams: ["ICAR-AIEEA (India)", "State Agri CETs"],
    paths: [
      { role: "B.Sc Agri", duration: "4Y", focus: "Crop Science" },
      { role: "B.Sc Horticulture", duration: "4Y", focus: "Fruit/Plant Cultivation" },
      { role: "B.V.Sc", duration: "5.5Y", focus: "Veterinary Medicine" }
    ],
    proTip: "Veterinary (BVSc) has almost 100% job placement in the current market."
  },
  paramedical: {
    title: "Allied Health Sciences",
    desc: "The backbone of modern hospitals. Technical and highly specialized.",
    exams: ["Direct Merit", "State Paramedical Boards"],
    paths: [
      { role: "BPT", duration: "4.5Y", focus: "Physiotherapy" },
      { role: "B.Sc Nursing", duration: "4Y", focus: "Nursing Care" },
      { role: "MLT", duration: "3Y", focus: "Lab Technology" }
    ],
    proTip: "Physiotherapy (BPT) is a booming independent practice path with global demand."
  }
};

export default function PathwayAdvisor() {
  const [currentStep, setCurrentStep] = useState('root');

  const stepData = PATH_DATA[currentStep];

  if (currentStep === 'root') {
    return (
      <div className="glass-card" style={{ padding: '60px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '15px' }}>Interactive <span className="text-gradient">Advisor</span></h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b' }}>We&apos;ll help you narrow down your trajectory. Pick your primary interest.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {stepData.options?.map((opt) => (
            <button 
              key={opt.id} 
              onClick={() => setCurrentStep(opt.id)}
              className="advisor-btn"
            >
              <div className="advisor-icon">{opt.icon}</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>{opt.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>{opt.sublabel}</div>
              </div>
            </button>
          ))}
        </div>

        <style jsx>{`
          .advisor-btn {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 30px;
            background: #f8fafc;
            border: 1px solid #f1f5f9;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-align: left;
            width: 100%;
          }
          .advisor-btn:hover {
            background: #ffffff;
            border-color: var(--primary);
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          }
          .advisor-icon {
            width: 54px;
            height: 54px;
            background: #ffffff;
            border: 1px solid #f1f5f9;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            transition: all 0.3s;
          }
          .advisor-btn:hover .advisor-icon {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="glass-card animate-scale-in" style={{ padding: '60px', background: '#ffffff', border: '1px solid #e2e8f0', minHeight: '500px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <button onClick={() => setCurrentStep('root')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: '#94a3b8', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem' }}>
          <ArrowLeft size={18} /> BACK TO QUESTIONS
        </button>
        <div style={{ padding: '6px 16px', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em' }}>
          EXPERT MODULE
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px' }}>
        <div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-0.03em' }}>{stepData.title}</h2>
          <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '40px' }}>{stepData.desc}</p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e293b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Map size={20} color="var(--primary)" /> PRIMARY ROADMAPS
          </h3>
          <div style={{ display: 'grid', gap: '15px', marginBottom: '40px' }}>
            {stepData.paths?.map((p, i: number) => (
              <div key={i} style={{ padding: '24px', background: '#fafafa', border: '1px solid #f1f5f9', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <div style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--foreground)' }}>{p.role}</div>
                   <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 700 }}>{p.focus}</div>
                </div>
                <div style={{ padding: '6px 12px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>{p.duration}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: '30px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '20px', border: '1px dashed #10b981', display: 'flex', gap: '20px' }}>
             <Sparkles size={30} color="#10b981" />
             <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#10b981', letterSpacing: '0.1em', marginBottom: '5px' }}>PRO TIP</div>
                <p style={{ color: '#065f46', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {stepData.proTip}
                </p>
             </div>
          </div>
        </div>

        <aside>
           <div style={{ padding: '35px', background: '#f8fafc', borderRadius: '24px', position: 'sticky', top: '20px' }}>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '25px' }}>GATEWAY EXAMS</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {stepData.exams?.map((exam: string, i: number) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                       <Target size={16} color="var(--primary)" />
                       <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e293b' }}>{exam}</span>
                    </div>
                 ))}
              </div>

              <div style={{ marginTop: '40px', padding: '24px', background: 'var(--primary)', borderRadius: '20px', color: 'white' }}>
                 <Globe size={32} style={{ marginBottom: '15px', opacity: 0.8 }} />
                 <h5 style={{ fontWeight: 900, marginBottom: '8px' }}>Global Sync</h5>
                 <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.5 }}>This path is fully certified for practice in the Gulf, UK, and European regions.</p>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
