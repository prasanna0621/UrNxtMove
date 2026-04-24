'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  BrainCircuit, 
  Compass, 
  GraduationCap, 
  ArrowRight, 
  Sparkles,
  Target,
  Search,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  History,
  Zap,
  Globe,
  Gavel,
  Hammer
} from 'lucide-react';

type Subject = 'mpc' | 'bipc' | 'cec' | 'hec' | 'polycet' | 'iti';

const QUESTIONS = [
  {
    question: "What kind of systems fascinate you the most?",
    options: [
      { text: "Complex mathematical and digital logic systems.", subject: 'mpc' as Subject },
      { text: "The intricate biological systems of living organisms.", subject: 'bipc' as Subject },
      { text: "The economic and financial systems of a nation.", subject: 'cec' as Subject },
      { text: "Political, legal, and historical societal frameworks.", subject: 'hec' as Subject },
      { text: "Practical mechanical and industrial machinery.", subject: 'polycet' as Subject },
      { text: "Specific technical trades and physical craftsmanship.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "How do you prefer to approach a new challenge?",
    options: [
      { text: "Using formulas and abstract logical reasoning.", subject: 'mpc' as Subject },
      { text: "By researching scientific evidence and medical facts.", subject: 'bipc' as Subject },
      { text: "Analyzing cost-benefit and market viability.", subject: 'cec' as Subject },
      { text: "Considering human impact and historical context.", subject: 'hec' as Subject },
      { text: "Trying a hands-on repair or technical fix.", subject: 'polycet' as Subject },
      { text: "Using specialized tools for a direct solution.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "Which of these subjects would you read for fun?",
    options: [
      { text: "Theoretical Physics or Coding Marathons.", subject: 'mpc' as Subject },
      { text: "Human Anatomy or Evolutionary Biology.", subject: 'bipc' as Subject },
      { text: "Stock Market trends or Business Case Studies.", subject: 'cec' as Subject },
      { text: "Constitutional Law or World Revolutions.", subject: 'hec' as Subject },
      { text: "Engineering Blueprints or Gadget Teardowns.", subject: 'polycet' as Subject },
      { text: "Workshop Manuals or Electrical Schematics.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "If you were to start a company, what would it be?",
    options: [
      { text: "A Software-as-a-Service (SaaS) or AI startup.", subject: 'mpc' as Subject },
      { text: "A Biotech lab or a Specialty Clinic.", subject: 'bipc' as Subject },
      { text: "A FinTech bank or a Wealth Management firm.", subject: 'cec' as Subject },
      { text: "A Legal Consultancy or a Non-Profit (NGO).", subject: 'hec' as Subject },
      { text: "A High-end Manufacturing or Auto-Design plant.", subject: 'polycet' as Subject },
      { text: "A Specialized Technical Service or Trade agency.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "What is your preferred work environment?",
    options: [
      { text: "High-tech software park or research lab.", subject: 'mpc' as Subject },
      { text: "Surgical theater, hospital, or research center.", subject: 'bipc' as Subject },
      { text: "Corporate headquarters or a financial trading floor.", subject: 'cec' as Subject },
      { text: "A courtroom, government office, or media room.", subject: 'hec' as Subject },
      { text: "A construction project or industrial shop floor.", subject: 'polycet' as Subject },
      { text: "A technical site or a specialized craft workshop.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "Which skill would you most like to master?",
    options: [
      { text: "Advanced algorithmic coding and calculus.", subject: 'mpc' as Subject },
      { text: "Complex surgery or biological data analysis.", subject: 'bipc' as Subject },
      { text: "Financial auditing and corporate governance.", subject: 'cec' as Subject },
      { text: "Legal drafting and persuasive public speaking.", subject: 'hec' as Subject },
      { text: "Practical engineering design and troubleshooting.", subject: 'polycet' as Subject },
      { text: "Precision technical craftsmanship in a specific trade.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "How do you feel about long-term education?",
    options: [
      { text: "Ready for 4 years of B.Tech + M.Tech specialization.", subject: 'mpc' as Subject },
      { text: "Willing to spend 8-10 years to be a medical expert.", subject: 'bipc' as Subject },
      { text: "Prefer 3 years degree + professional CA/MBA hustle.", subject: 'cec' as Subject },
      { text: "Interested in BA + JD (Law) or UPSC prep years.", subject: 'hec' as Subject },
      { text: "Want to enter the workforce in 3 years with a Diploma.", subject: 'polycet' as Subject },
      { text: "Want to start earning in 1-2 years with a trade.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "What kind of legacy do you want to leave?",
    options: [
      { text: "A global technological innovation (like the Internet).", subject: 'mpc' as Subject },
      { text: "Curing diseases and improving human longevity.", subject: 'bipc' as Subject },
      { text: "Building a massive business empire or economic stability.", subject: 'cec' as Subject },
      { text: "Enacting laws that change society for the better.", subject: 'hec' as Subject },
      { text: "Building sustainable physical infrastructure (Bridges/Cities).", subject: 'polycet' as Subject },
      { text: "Mastering a critical trade that keeps the world running.", subject: 'iti' as Subject }
    ]
  },
  {
    question: "Which of these icons best represents your ambition?",
    options: [
      { text: "Elon Musk / Satya Nadella (Tech)", subject: 'mpc' as Subject },
      { text: "Dr. Devi Shetty / Soumya Swaminathan (Medicine)", subject: 'bipc' as Subject },
      { text: "Warren Buffet / Ratan Tata (Business)", subject: 'cec' as Subject },
      { text: "B.R. Ambedkar / Ruth Bader Ginsburg (Law & Society)", subject: 'hec' as Subject },
      { text: "Henry Ford / Visvesvaraya (Engineering & Design)", subject: 'polycet' as Subject },
      { text: "A Master Craftsman or Technical Pioneer", subject: 'iti' as Subject }
    ]
  },
  {
    question: "What is your view on Mathematics?",
    options: [
      { text: "A beautiful language for solving the universe.", subject: 'mpc' as Subject },
      { text: "A tool, but focus is on biological observations.", subject: 'bipc' as Subject },
      { text: "A tool for counting wealth and analyzing markets.", subject: 'cec' as Subject },
      { text: "Not as important as history and human laws.", subject: 'hec' as Subject },
      { text: "Prefer practical math over pure theoretical calculus.", subject: 'polycet' as Subject },
      { text: "Prefer basic calculations for technical builds.", subject: 'iti' as Subject }
    ]
  }
];

const DESCRIPTIONS = {
  mpc: "The Architect of Innovation. You are built for deep analytical thinking and systemic logic.",
  bipc: "The Guardian of Life. Your path is defined by healing and the mastery of bio-scientific depth.",
  cec: "The Commercial Strategist. You see the world in trade, wealth, and corporate optimization.",
  hec: "The Society Sculptor. You lead through law, policy, and human understanding.",
  polycet: "The Practical Builder. You want to touch the future with hands-on technical entry.",
  iti: "The Essential Artisan. You value time and specific technical trade foundations."
};

const ICONS = {
  mpc: <BrainCircuit size={60} />,
  bipc: <Sparkles size={60} />,
  cec: <Briefcase size={60} />,
  hec: <Gavel size={60} />,
  polycet: <Zap size={60} />,
  iti: <Hammer size={60} />
};

export default function CareerQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ mpc: 0, bipc: 0, cec: 0, hec: 0, polycet: 0, iti: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (subject: Subject) => {
    setScores(prev => ({ ...prev, [subject]: prev[subject] + 1 }));
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const winSubject = useMemo(() => {
    return Object.keys(scores).reduce((a, b) => 
      scores[a as Subject] >= scores[b as Subject] ? a : b
    ) as Subject;
  }, [scores]);

  if (showResult) {
    return (
      <div className="container animate-scale-in" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div className="glass-card" style={{ maxWidth: '800px', width: '100%', padding: '60px', textAlign: 'center', position: 'relative', border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '8px 30px', borderRadius: '50px', fontWeight: '900', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
            DIAGNOSTIC COMPLETE
          </div>
          
          <div className="result-header" style={{ marginBottom: '40px' }}>
             <div style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
                {ICONS[winSubject]}
             </div>
             <h1 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--foreground)', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Recommended Stream</h1>
             <h2 className="text-gradient" style={{ fontSize: '5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-0.04em' }}>{winSubject}</h2>
          </div>

          <div style={{ padding: '0 40px', marginBottom: '45px' }}>
             <p style={{ fontSize: '1.5rem', lineHeight: 1.5, fontWeight: 500, color: 'var(--foreground)' }}>
               {DESCRIPTIONS[winSubject]}
             </p>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginTop: '20px', color: 'var(--foreground)', opacity: 0.7, fontWeight: 600 }}>
                <CheckCircle2 size={16} /> <span>Confidence Score: {Math.max(...Object.values(scores)) * 10}%</span>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '50px', textAlign: 'left' }}>
             <div className="glass-card" style={{ padding: '35px', background: 'var(--secondary)', border: '1px solid var(--card-border)' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 900, marginBottom: '12px', color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>PRIMARY SYNERGY</h4>
                <p style={{ fontSize: '1rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.5 }}>Your logic engine aligns with the architectures of <strong>{winSubject.toUpperCase()}</strong>.</p>
             </div>
             <div className="glass-card" style={{ padding: '35px', background: 'var(--secondary)', border: '1px solid var(--card-border)' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 900, marginBottom: '12px', color: '#10b981', fontSize: '0.8rem', letterSpacing: '0.05em' }}>PATH POTENTIAL</h4>
                <p style={{ fontSize: '1rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.5 }}>High acceleration potential in specialist roles over the next 5 years.</p>
             </div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
             <Link href={`/stream/${winSubject}`} className="btn-primary" style={{ flex: 1, height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem' }}>
                Launch Roadmap <ArrowRight size={20} />
             </Link>
             <button onClick={() => { setScores({mpc:0,bipc:0,cec:0,hec:0,polycet:0,iti:0}); setCurrentQuestionIndex(0); setShowResult(false); }} className="btn btn-glass" style={{ flex: 0.3, border: '1px solid var(--card-border)', borderRadius: '16px', background: 'var(--card-bg)', color: 'var(--foreground)', cursor: 'pointer' }}>
                Reset
             </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = QUESTIONS[currentQuestionIndex];

  return (
    <div className="container animate-scale-in" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px', position: 'relative' }}>
      
      {/* Background Image Layer */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <img 
          src="/quiz_bg.jpg" 
          alt="Quiz Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1.0 }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(var(--background-rgb), 0) 0%, var(--background) 100%)' }}></div>
      </div>
      
      <div style={{ maxWidth: '800px', width: '100%', marginBottom: '60px' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
            <div>
               <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.15em' }}>DIAGNOSTIC {currentQuestionIndex + 1} / 10</span>
               <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '5px', color: 'var(--foreground)', opacity: 0.7 }}>Calibrating your career pulse...</h4>
            </div>
            <div style={{ textAlign: 'right' }}>
               <span style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--foreground)', opacity: 0.5 }}>{Math.round(((currentQuestionIndex + 1) / 10) * 100)}%</span>
            </div>
         </div>
         <div style={{ height: '8px', background: 'var(--secondary)', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
            <div style={{ 
               height: '100%', 
               background: 'var(--primary)', 
               width: `${((currentQuestionIndex + 1) / 10) * 100}%`,
               transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
               boxShadow: '0 0 20px rgba(79, 70, 229, 0.2)'
            }}></div>
         </div>
      </div>

      <div className="glass-card" style={{ maxWidth: '840px', width: '100%', padding: '80px', position: 'relative', background: 'var(--card-bg)' }}>
         <h2 style={{ fontSize: '2.8rem', fontWeight: 900, textAlign: 'center', marginBottom: '60px', lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--foreground)' }}>
           {currentQ.question}
         </h2>

         <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
            {currentQ.options.map((opt, i) => (
              <button key={i} onClick={() => handleOptionSelect(opt.subject)} className="quiz-opt-btn">
                 <div className="opt-idx">{String.fromCharCode(65 + i)}</div>
                 <span style={{ flex: 1, fontWeight: 700, color: 'var(--foreground)' }}>{opt.text}</span>
                 <ArrowRight className="opt-arrow" size={18} />
              </button>
            ))}
         </div>
      </div>

      <style jsx>{`
        .quiz-opt-btn {
          width: 100%;
          padding: 24px 35px;
          background: var(--secondary);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 25px;
          color: var(--foreground);
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
        }
        .quiz-opt-btn:hover {
          background: var(--card-bg);
          border-color: var(--primary);
          transform: translateX(10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
        }
        .opt-idx {
          width: 36px;
          height: 36px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.85rem;
          color: var(--primary);
          transition: all 0.3s ease;
        }
        .quiz-opt-btn:hover .opt-idx {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        .opt-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: var(--primary);
        }
        .quiz-opt-btn:hover .opt-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        @media (max-width: 768px) {
          .glass-card { padding: 40px 20px !important; }
          h2 { font-size: 2rem !important; }
          .quiz-opt-btn { font-size: 1rem; padding: 16px 20px; }
        }
      `}</style>
    </div>
  );
}
