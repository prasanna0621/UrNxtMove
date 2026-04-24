'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';

// ── STREAM Q&A KNOWLEDGE BASE ──────────────────────────────────────────
const STREAM_QA: Record<string, { keywords: string[]; answer: string }[]> = {
  'BiPC': [
    { keywords: ['neet', 'neet-ug', 'medical entrance', 'qualify neet'], answer: 'NEET-UG is the single gateway for MBBS, BDS, BVSc, and BAMS admissions. You need 650+ marks out of 720 to target top government colleges like AIIMS. Prepare from Class 11—2 years of consistent effort typically builds a competitive rank.' },
    { keywords: ['mbbs', 'doctor', 'medicine', 'medical degree'], answer: 'MBBS is a 5.5-year professional degree including a 1-year mandatory internship. Top colleges: AIIMS Delhi, CMC Vellore, and AFMC Pune. After MBBS, you can pursue MD/MS for specialisation or USMLE/PLAB for international residency.' },
    { keywords: ['bds', 'dental', 'dentist'], answer: 'BDS (Bachelor of Dental Surgery) is 5 years including a 1-year internship. Key skill areas: Oral Surgery, Orthodontics, Pedodontics. After BDS, MDS gives you specialist status. Maulana Azad Dental College in Delhi is the top Govt institution.' },
    { keywords: ['pharmacy', 'bpharm', 'pharm.d', 'pharmacist'], answer: 'B.Pharm (4 years) focuses on drug manufacturing and quality. Pharm.D (6 years) is a clinical doctorate with hospital internship—you can practice as "Dr." in clinical settings. NIPER Hyderabad and Jamia Hamdard are top pharmacy institutes.' },
    { keywords: ['niper', 'gpat', 'pharmacy entrance'], answer: 'GPAT (Graduate Pharmacy Aptitude Test) is the national entrance for M.Pharm admissions. NIPER offers direct M.Pharma + PhD pathways. BITSAT is the alternative gateway for BITS Pilani pharma programs.' },
    { keywords: ['aiims', 'top college', 'best medical college', 'cmc', 'vellore'], answer: 'Top Medical Colleges: AIIMS Delhi (Rank 1), CMC Vellore (Christian Medical College), AFMC Pune (Armed Forces), JIPMER Puducherry. These require NEET scores above 650. AIIMS has Pan-India centers now post-merger.' },
    { keywords: ['agriculture', 'agri', 'icar', 'bsc agri'], answer: 'B.Sc Agriculture (4 years) covers crop science, soil health, and food technology. ICAR-AIEEA is the national entrance. Top institute: IARI Delhi. Agriculture has massive export and startup potential—Agri-tech is growing 25% annually.' },
    { keywords: ['genetics', 'biotech', 'biotechnology'], answer: 'B.Sc Genetics/Biotechnology opens doors to vaccine R&D, genomic medicine, and CSIR research labs. After graduation, CSIR-NET/GATE qualifiers get funded research fellowships at ICMR, CCMB, and NCBS.' },
    { keywords: ['salary', 'pay', 'income', 'lpa', 'package'], answer: 'BiPC career salaries: MBBS (Govt Doctor): ₹8-15 LPA. Specialist Surgeon: ₹30-100+ LPA. Clinical Pharmacist: ₹6-20 LPA. Geneticist (PhD): ₹10-25 LPA. USMLE-qualified doctors in USA: $250-400K/year.' },
    { keywords: ['usmle', 'plab', 'abroad', 'usa', 'uk doctor'], answer: 'USMLE (for USA) and PLAB (for UK) are international licensing exams. USMLE has 3 Steps; Step 1 is the hardest. American residency pays $65,000-80,000/year. Start USMLE prep in 3rd-4th year of MBBS for best timing.' },
    { keywords: ['upsc', 'civil', 'ias', 'medical officer'], answer: 'BiPC students can appear in UPSC for IAS/IPS or Medical Officer roles in ICMR and DRDO. The UPSC Civil Services also has a Medical Science optional paper which suits MBBS graduates excellently.' },
  ],
  'Mathematics, Physics, Chemistry (MPC)': [
    { keywords: ['jee', 'iit', 'nit', 'jee main', 'jee advanced'], answer: 'JEE Main is the gateway to NITs and JEE Advanced for IITs. Prepare from Class 11. Target: 250+ in JEE Main for NIT, 200+ (out of 360) in JEE Advanced for IITs. Physics consistency is your rank differentiator.' },
    { keywords: ['btech', 'engineering', 'b.tech'], answer: 'B.Tech (4 years) at IITs/NITs is the gold standard. Top branches: CSE (highest demand), EE, Mechanical, Chemical. IIT Bombay CSE average package: ₹40+ LPA. Not all IIT branches are equal—pick the right campus+branch combo.' },
    { keywords: ['iit', 'top college', 'best engineering college'], answer: 'Top Engineering Colleges: IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur (research), IISc Bangalore (research-focused). Outside IITs: BITS Pilani (BITSAT), NIT Trichy, IIIT Hyderabad (CS-focused).' },
    { keywords: ['nda', 'defense', 'army', 'navy', 'air force'], answer: 'NDA (National Defence Academy) via UPSC exam allows entry to commissioned officer roles. Written exam + SSB interview. After 3 years of training, you receive a B.Sc degree plus officer rank. CDS is the graduate-level alternative.' },
    { keywords: ['gate', 'psu', 'mtech', 'post graduation'], answer: 'GATE score opens PSU jobs (BHEL, ONGC, NTPC pay ₹8-20 LPA) and M.Tech admission at IITs/NITs. A GATE score above 700 is competitive. IISc M.Tech via GATE is among the most prestigious in India.' },
    { keywords: ['data science', 'ai', 'machine learning', 'artificial intelligence'], answer: 'AI/ML careers: Start with B.Tech CSE + specialisation in AI. Pursue M.Tech CSE or MS (GRE) at top US universities. Key skills: Python, PyTorch, Statistics, System Design. FAANG ML engineer salary: $200-500K/year.' },
    { keywords: ['merchant navy', 'ship', 'marine'], answer: 'Merchant Navy via B.Sc Nautical Science or Marine Engineering. Global tax-free salary: ₹5-20 LPA (rises with experience). Chief Engineer can earn ₹1 Cr+/year. Entry: IMU-CET or direct college admissions.' },
    { keywords: ['gre', 'ms', 'abroad', 'usa university'], answer: 'GRE + strong GPA unlocks MS admissions at MIT, Stanford, CMU, UT Austin for Electrical, CS, Robotics programs. TA/RA funding typically waives tuition. Typical total cost WITH fellowship: near zero.' },
    { keywords: ['salary', 'pay', 'income', 'lpa', 'package'], answer: 'MPC career salaries: Software Engineer (IIT→FAANG): ₹50-200 LPA. Data Scientist: ₹15-40 LPA. Aerospace Engineer (ISRO): ₹8-20 LPA. NDA Officer: ₹7-15 LPA + perks. Quant Analyst (IIM/Goldman): ₹30-80 LPA.' },
    { keywords: ['iiser', 'bsms', 'pure science', 'research'], answer: 'BS-MS at IISER (5 years) is the premier research track in Physics, Math, Chemistry and Biology. Entry via IAT exam. Fully funded with scholarships. IISER has higher research output per faculty than most IITs.' },
    { keywords: ['mba', 'management', 'cat', 'iim'], answer: 'B.Tech + MBA is a powerful combination. CAT 99+ percentile → IIM A/B/C. Average IIM Ahmedabad package: ₹35 LPA. Tech+MBA = Product Management, Consulting, VC—highest paying intersection.' },
  ],
  'Commerce, Economics, Civics (CEC)': [
    { keywords: ['ca', 'chartered accountant', 'icai', 'ca foundation'], answer: 'CA is India\'s most prestigious finance qualification. Path: Foundation (4 months) → Inter (8 months) → Final (3 years + Articleship). Only 4% pass CA Final—but those who succeed earn ₹12-40 LPA starting. Big-4 firms recruit directly.' },
    { keywords: ['clat', 'law', 'llb', 'nlu'], answer: 'CLAT (Common Law Admission Test) is the gateway to 24+ National Law Universities. Score 100+ for NLSIU Bangalore or NALSAR Hyderabad. A 5-year BA LLB or B.Com LLB opens corporate law, judicial services and advocacy tracks.' },
    { keywords: ['mba', 'cat', 'iim', 'management'], answer: 'CAT 99%+ opens IIM A/B/C. B.Com/BBA before MBA is valid. IIM Ahmedabad average package: ₹35 LPA. Specialisations: Finance, Marketing, Operations. IPMAT after 12th gives direct IIM entry (5-year integrated).' },
    { keywords: ['investment banking', 'finance', 'wall street'], answer: 'Investment Banking path: B.Com/BBA → MBA Finance at IIM/ISB → Analyst at Goldman, JP Morgan or Morgan Stanley Mumbai. Or CFA (Level 1/2/3) from B.Com itself. Average IB analyst salary: ₹25-50 LPA in India, $100K+ in the US.' },
    { keywords: ['cfa', 'analyst', 'stock market', 'fund'], answer: 'CFA (Chartered Financial Analyst) is globally recognised for asset management, equity research and portfolio management. 3 levels; pass rate averages 40%. CFA Charterholder India salary: ₹15-60 LPA.' },
    { keywords: ['cs', 'company secretary', 'icsi'], answer: 'CS (Company Secretary) is a 3-tier ICSI qualification covering corporate law and board governance. CS roles are mandatory in all listed companies in India. Starting salary: ₹5-12 LPA. Often paired with LLB for maximum impact.' },
    { keywords: ['srcc', 'top college', 'commerce college', 'delhi university'], answer: 'Top Commerce Colleges: SRCC Delhi (B.Com Hons), St. Xavier\'s Mumbai, LSR Delhi (Economics), Loyola Chennai. Entry: CUET score. SRCC graduates have a very high CA and MBA placement rate.' },
    { keywords: ['salary', 'pay', 'income', 'lpa', 'package'], answer: 'CEC career salaries: CA (Big-4): ₹8-25 LPA. Investment Banker (IIM): ₹30-80 LPA. CFA Analyst: ₹15-40 LPA. Corporate Lawyer (NLU): ₹12-50 LPA. CS + LLB: ₹6-15 LPA. Entrepreneur: Unlimited.' },
    { keywords: ['bcom', 'b.com', 'bachelor commerce'], answer: 'B.Com (Hons) from a top college is the most flexible commerce degree. It opens CA Articleship, MBA admission, M.Com, and government finance roles. CUET score determines college. SRCC B.Com is India\'s most prestigious.' },
    { keywords: ['upsc', 'ias', 'ips', 'civil services'], answer: 'CEC students can appear in UPSC CSE with Public Administration or Economics as optional papers—both suited to HEC/CEC backgrounds. Indian Economic Service (IES) specifically recruits Economics graduates.' },
  ],
  'History, Economics, Civics (HEC)': [
    { keywords: ['upsc', 'ias', 'civil services', 'ips', 'ifs'], answer: 'UPSC CSE is the most prestigious exam—3 stages: Prelims → Mains (9 papers including General Studies and 2 Optional papers) → Interview. Average preparation: 2-3 years. History and Political Science are strong optional choices for HEC students.' },
    { keywords: ['clat', 'law', 'llb', 'nlu'], answer: 'CLAT is the gateway to 24 National Law Universities. 5-year BA LLB is the standard path from HEC. Top NLUs: NLSIU Bangalore, NALSAR Hyderabad, NLU Delhi. Constitutional Law and Criminal Law are strong tracks for HEC backgrounds.' },
    { keywords: ['journalism', 'media', 'iimc', 'reporter'], answer: 'Journalism path: BA (Mass Comm) or BA (Journalism and Mass Communication) at IIMC Delhi, Symbiosis Pune, or Jamia Mass Comm. Entry via state/national entrance tests. Print, digital, broadcast—all hire from these institutes.' },
    { keywords: ['iimc', 'mass communication', 'media college'], answer: 'IIMC (Indian Institute of Mass Communication) is the top journalism school in India, affiliated with UPSC ministry. Courses: PG Diploma in Radio, TV, Print, Advertising & PR. Entry via entrance exam. Placements at NDTV, ABP, The Hindu.' },
    { keywords: ['jnu', 'humanities', 'university', 'research'], answer: 'JNU (Jawaharlal Nehru University) Delhi is India\'s premier humanities university. BA + MA + MPhil/PhD programs. JNU MA entrance is competitive. Scholarship available. Strong alumni in diplomacy, academia, civil services and journalism.' },
    { keywords: ['diplomat', 'foreign service', 'ifs'], answer: 'Indian Foreign Service (IFS) is part of UPSC CSE—the top diplomatic corps. IFS Officers serve as ambassadors, consuls and represent India globally. History, Political Science + current affairs knowledge is critical.' },
    { keywords: ['salary', 'pay', 'income', 'lpa'], answer: 'HEC career salaries: IAS/IPS Officer: ₹8-20 LPA + benefits + housing. Lawyer (Senior): ₹15-100 LPA. Senior Journalist: ₹8-25 LPA. Policy Analyst (UN): $50,000-100,000/year. Professor: ₹8-20 LPA.' },
    { keywords: ['psychology', 'counselling', 'mental health'], answer: 'BA Psychology from Delhi University or Christ University, followed by MA Clinical Psychology and RCI licensing. Growing mental health market means counsellors now earn ₹4-12 LPA, higher in corporate wellness programs.' },
    { keywords: ['social work', 'ngo', 'development'], answer: 'Bachelor of Social Work (BSW) → MSW → careers in NGOs, UNICEF, World Bank, UNDP. Tata Institute of Social Sciences (TISS) is the top MSW institute in India. Social work + MBA combination opens CSR leadership roles.' },
  ],
  'Diploma (POLYCET)': [
    { keywords: ['polycet', 'entrance', 'exam', 'polytechnic'], answer: 'POLYCET (Polytechnic Common Entrance Test) is the state-level entrance for 10th-pass students. Conducted by SBTET AP and SBTET Telangana. Score 80+ for top branches like Civil or CSE in Govt Polytechnics.' },
    { keywords: ['ecet', 'lateral', 'btech', 'direct admission'], answer: 'ECET (Engineering Common Entrance Test) allows diploma holders to directly enter B.Tech 2nd year. This saves 1 full year. JNTU and Osmania University affiliated colleges offer lateral B.Tech. Focus on ECET from 2nd year of diploma.' },
    { keywords: ['civil', 'civil engineering', 'construction'], answer: 'Civil Diploma covers AutoCAD, surveying, structural drawing and site supervision. Direct employment in government PWD, construction firms and real estate. Learning Revit + AutoCAD alongside diploma gives massive hiring advantage.' },
    { keywords: ['cse', 'computer', 'it', 'software'], answer: 'CSE Diploma gives programming (C, Java, Web Dev), networking and database basics. Entry into IT support roles, junior developer positions or BPO sector. Best path: CSE Diploma → ECET → B.Tech CSE → Placement.' },
    { keywords: ['mechanical', 'automobile', 'ev', 'motor'], answer: 'Mechanical Diploma covers CNC machining, tool & die, manufacturing and automobile systems. EV revolution is creating huge demand for automobile diploma graduates. Learn CAD/CAM software for premium placements.' },
    { keywords: ['electrical', 'eee', 'power', 'substation'], answer: 'Electrical Diploma covers power distribution, switchgear, PLC operations, and substation maintenance. TSSPDCL, APSPDCL, and private power companies hire diploma electricians at ₹3-8 LPA starting.' },
    { keywords: ['bhel', 'ntpc', 'psu', 'apprentice', 'government job'], answer: 'PSU Apprenticeships: BHEL, NTPC, Coal India, ONGC, Indian Railways offer diploma apprenticeships with ₹8,000-14,000/month stipend. Conversion to permanent employee happens for 50-60% of apprentices. Apply on NAPS.gov.in.' },
    { keywords: ['salary', 'pay', 'income', 'lpa'], answer: 'Polycet career salaries: Diploma Engineer (starting): ₹2.5-5 LPA. After ECET + B.Tech: ₹5-15 LPA. PSU Junior Engineer: ₹6-12 LPA. Private Manufacturing: ₹3-8 LPA. Contractor (Self-employed): ₹8-25 LPA.' },
    { keywords: ['gate', 'mtech', 'post graduation'], answer: 'After lateral B.Tech via ECET, you can appear for GATE. A GATE score of 600+ opens PSU jobs at ₹8-15 LPA or M.Tech at IIT/NIT. It\'s a slower path but completely viable for ambitious diploma students.' },
  ],
  'Vocational (ITI)': [
    { keywords: ['iti', 'trade', 'electrician', 'fitter', 'welder'], answer: 'ITI trades are 1-2 years. Electrician and Fitter are 2-year trades; COPA (Computer) is 1 year. All government ITI courses lead to NCVT certification via the All-India Trade Test (AITT). Choose a trade matching local industry needs.' },
    { keywords: ['ncvt', 'apprentice', 'naps', 'bhel', 'ntpc'], answer: 'After ITI, register on NAPS (National Apprenticeship Promotion Scheme - naps.gov.in) for apprenticeships at BHEL, NTPC, Indian Oil, HAL. Stipend: ₹8,000-14,000/month. Conversion to permanent employment is possible for top performers.' },
    { keywords: ['electrician', 'wiring', 'power', 'electrical'], answer: 'Electrician trade (2 years): Covers domestic wiring, industrial switchgear, substation ops, and PLC basics. NCVT certification allows work across India. Learning PLC/SCADA programming doubles your salary potential to ₹8-15 LPA.' },
    { keywords: ['welder', 'welding', 'fabrication', 'gulf'], answer: 'Welder trade leads to one of the highest-mobility ITI careers. NCVT Welder + experience qualifies for Gulf jobs (UAE, Saudi Arabia) at ₹2-4 lakh/month. Structural welding for shipyards and pipelines is the premium specialization.' },
    { keywords: ['overseas', 'gulf', 'abroad', 'uk', 'australia'], answer: 'NCVT-certified ITI holders are eligible for overseas skilled worker visas. Top destinations: UAE, Qatar, Saudi Arabia (construction, oil & gas), Singapore (manufacturing), Australia (skilled trades pathway). Income: 3-5x Indian rates.' },
    { keywords: ['diploma', 'lateral', 'btech', 'higher education'], answer: 'ITI holders can join Polytechnic 2nd year directly (lateral entry)—bypassing Year 1. Then ECET gives entry to B.Tech 2nd year. Full path: ITI → Diploma → ECET → B.Tech creates a complete engineering career from a trade start.' },
    { keywords: ['cits', 'instructor', 'teacher', 'government job'], answer: 'CITS (Craft Instructor Training Scheme at NIMI Chennai) turns you into a certified government ITI instructor. Central government job with pension benefits. Eligibility: ITI NCVT + 2 years industrial experience + CITS entrance.' },
    { keywords: ['salary', 'pay', 'income', 'earn'], answer: 'ITI career salaries: Entry Tradesman: ₹2-4 LPA. After 5 years experience: ₹4-10 LPA. NCVT + Gulf work: ₹15-35 LPA equivalent. Own Electrical Contracting Business: ₹10-30 LPA. CNC Machinist (skilled): ₹6-12 LPA.' },
    { keywords: ['cnc', 'machinist', 'manufacturing', 'aerospace'], answer: 'Turner/Machinist ITI trade leads to CNC machine operation roles in automobile and aerospace manufacturing. HAL (aerospace), Tata Motors, Maruti pay ₹5-12 LPA for skilled CNC operators. CNC programming certification adds ₹2-4 LPA premium.' },
  ],
  'Vocational / Other Streams': [
    { keywords: ['nift', 'fashion', 'design', 'nid'], answer: 'NIFT (National Institute of Fashion Technology) has 17 campuses across India. Entry via NIFT Entrance Test (Creative + Situation Test). NID (National Institute of Design) DAT is more competitive but globally renowned. Fashion Design starting salary: ₹4-10 LPA.' },
    { keywords: ['animation', 'vfx', 'gaming', 'film', '3d'], answer: 'Animation/VFX careers: B.Des (Animation) from NIFT/NID or B.Sc Animation from Symbiosis, Amity. Key software: Maya, Blender, After Effects, Nuke. OTT platform boom (Netflix, Prime, Hotstar) has tripled demand for Indian animators.' },
    { keywords: ['hotel management', 'ihata', 'chef', 'hospitality'], answer: 'Hotel Management via NCHMCT JEE → IHM (Institute of Hotel Management). IHM Pusa Delhi and IHM Mumbai are tier-1. Starting salary: ₹3-6 LPA. After 8-10 years: Executive Chef or GM earns ₹25-60 LPA in 5-star properties.' },
    { keywords: ['sports', 'athlete', 'cricket', 'football', 'fitness'], answer: 'Sports careers: NIS Patiala Certificate → Coaching licenses. LNCPE Gwalior for B.P.Ed (Physical Education degree). SAI academies develop elite athletes. Sports Management: B.SportsMgmt → AIFF/BCCI/IPL franchise admin roles.' },
    { keywords: ['freelance', 'fiverr', 'upwork', 'business'], answer: 'Freelance path: Build a 10-piece portfolio on Behance/Dribbble. Register on Fiverr, Upwork, or 99designs. Specialise in one area (UI design, motion graphics, product photography). Top freelancers earn ₹50,000-2,00,000/month.' },
    { keywords: ['digital marketing', 'seo', 'social media'], answer: 'Digital Marketing certifications (Google Digital Garage, Meta Blueprint, HubSpot) are free and globally recognised. Core skills: SEO, SEM, Email automation, Content strategy. Junior Digital Marketer: ₹3-6 LPA; Senior: ₹12-25 LPA.' },
    { keywords: ['salary', 'pay', 'income', 'lpa', 'earn'], answer: 'Vocational career salaries: UI/UX Designer: ₹5-25 LPA. Animation (3-5 yrs exp): ₹8-20 LPA. Executive Chef: ₹15-60 LPA. Fashion Designer (NIFT): ₹4-15 LPA. Digital Content Creator: ₹3 LPA - Unlimited. Sports Coach: ₹4-15 LPA.' },
    { keywords: ['ftii', 'film', 'director', 'cinema'], answer: 'FTII (Film and Television Institute of India) Pune is Asia\'s top film school. Entry: Written + Practical. Courses: Direction, Cinematography, Editing, Sound. Alumni: Naseeruddin Shah, Smita Patil, Adoor Gopalakrishnan.' },
    { keywords: ['entrepreneurship', 'startup', 'business'], answer: 'Startup path: Identify market problem → Build MVP → Register on Startup India portal for tax benefits. MSME registration gives access to government schemes. IIM incubators and T-Hub (Hyderabad) offer mentorship. Global accelerators: Y Combinator, 500 Startups.' },
  ]
};

const GREETINGS = ['hi', 'hello', 'hey', 'hola', 'namaste', 'good morning', 'good evening', 'good afternoon', 'howdy', 'sup', 'yo'];
const FAREWELLS = ['bye', 'goodbye', 'thanks', 'thank you', 'see you', 'later', 'ok thanks', 'okay thanks', 'alright'];

function getStreamKey(streamName: string): string {
  const name = streamName.toLowerCase();
  if (name.includes('bipc') || name.includes('biology')) return 'BiPC';
  if (name.includes('mpc') || name.includes('mathematics')) return 'Mathematics, Physics, Chemistry (MPC)';
  if (name.includes('cec') || name.includes('commerce')) return 'Commerce, Economics, Civics (CEC)';
  if (name.includes('hec') || name.includes('history')) return 'History, Economics, Civics (HEC)';
  if (name.includes('polycet') || name.includes('diploma')) return 'Diploma (POLYCET)';
  if (name.includes('iti') || name.includes('vocational (iti)')) return 'Vocational (ITI)';
  if (name.includes('vocational') || name.includes('other')) return 'Vocational / Other Streams';
  return 'BiPC';
}

function getSmartResponse(input: string, streamName: string): string {
  const lower = input.toLowerCase().trim();
  const streamKey = getStreamKey(streamName);
  const qa = STREAM_QA[streamKey] || STREAM_QA['BiPC'];

  // Greetings
  if (GREETINGS.some(g => lower === g || lower.startsWith(g + ' '))) {
    return `Hello! 👋 I'm your dedicated ${streamName} Career Mentor. I can help you with exams, colleges, career paths, salaries and study strategies. What would you like to know?`;
  }

  // Farewells
  if (FAREWELLS.some(f => lower.includes(f))) {
    return `You're welcome! All the best with your ${streamName} career journey. Feel free to come back anytime with more questions! 🎓`;
  }

  // Keyword matching
  for (const item of qa) {
    if (item.keywords.some(kw => lower.includes(kw))) {
      return item.answer;
    }
  }

  // Short/unclear input
  if (lower.length < 8) {
    return `I'm your ${streamName} Career Mentor! I'm best at answering specific questions. Try: "What exam do I need for ${streamKey === 'BiPC' ? 'MBBS' : streamKey === 'Mathematics, Physics, Chemistry (MPC)' ? 'IIT' : 'CA'}?" or "What salary can I expect?"`;
  }

  // Generic academic question
  const genericTopics = ['college', 'exam', 'course', 'degree', 'career', 'job', 'study'];
  if (genericTopics.some(t => lower.includes(t))) {
    return `Great question about ${lower.includes('college') ? 'colleges' : lower.includes('exam') ? 'exams' : 'careers'} in ${streamName}! For the most accurate guidance, try asking specifically—e.g., "Best colleges for ${streamName === 'BiPC' ? 'Medicine' : 'Engineering'}?" or "Which exam should I focus on first?"`;
  }

  // Fallback
  return `I specialize in ${streamName} career guidance. I can answer questions about exams (like ${streamKey === 'BiPC' ? 'NEET' : streamKey.includes('MPC') ? 'JEE' : streamKey.includes('CEC') ? 'CA/CLAT' : 'UPSC'}), top colleges, study strategies, career paths, and salary expectations. What would you like to explore?`;
}

// ── COMPONENT ──────────────────────────────────────────────────────────────────

interface Props { streamName?: string; }
type Message = { role: 'bot' | 'user'; text: string };

export default function MentorChat({ streamName = 'Career' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `Hi! I'm your ${streamName} Career Mentor. Ask me anything about exams, colleges, career paths or salaries! 🎓` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const response = getSmartResponse(trimmed, streamName);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 10000 }}>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="mentor-trigger-btn">
          <MessageCircle size={22} />
          <span style={{ fontSize: '0.65rem', fontWeight: 900 }}>ASK</span>
          <div className="btn-glow"></div>
        </button>
      )}

      {isOpen && (
        <div className="mentor-chat-window animate-scale-in">
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="bot-avatar"><Bot size={18} /></div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 900, color: 'white' }}>{streamName} Mentor</div>
                <div style={{ fontSize: '0.6rem', opacity: 0.7, fontWeight: 700, color: 'white' }}>AI CAREER CONCIERGE</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', opacity: 0.7, cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`message-bubble ${m.role}`}>
                <div className="bubble-content">{m.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="message-bubble bot">
                <div className="bubble-content typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder={`Ask about ${streamName}...`}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="send-btn"><Send size={15} /></button>
          </div>

          <style jsx>{`
            .mentor-trigger-btn {
              width: 65px; height: 65px; border-radius: 50%;
              background: linear-gradient(135deg, var(--primary), #a855f7); color: white; border: none;
              cursor: pointer; display: flex; flex-direction: column;
              align-items: center; justify-content: center; gap: 4px;
              position: relative; box-shadow: 0 20px 40px -5px rgba(99,102,241,0.5);
              transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
            }
            .mentor-trigger-btn:hover { transform: scale(1.1) translateY(-6px); box-shadow: 0 25px 50px rgba(99,102,241,0.6); }
            .btn-glow {
              position: absolute; inset: -4px; border-radius: 50%;
              background: linear-gradient(135deg, var(--primary), #a855f7); filter: blur(20px);
              opacity: 0.5; z-index: -1; animation: pulse 3s infinite alternate;
            }
            @keyframes pulse {
              0%,100% { transform: scale(1); opacity: 0.4; }
              50% { transform: scale(1.2); opacity: 0.7; }
            }
            .mentor-chat-window {
              width: 370px; height: 540px; background: var(--card-bg);
              backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);
              border: 1px solid var(--card-border); border-radius: 28px; overflow: hidden;
              display: flex; flex-direction: column;
              box-shadow: var(--card-shadow);
            }
            .chat-header {
              padding: 20px 24px; background: linear-gradient(135deg, var(--primary), #a855f7);
              display: flex; justify-content: space-between; align-items: center;
            }
            .bot-avatar {
              width: 38px; height: 38px; background: rgba(255,255,255,0.2);
              border-radius: 50%; display: flex; align-items: center;
              justify-content: center; color: white;
            }
            .chat-body {
              flex: 1; padding: 20px; overflow-y: auto;
              display: flex; flex-direction: column; gap: 14px; background: transparent;
            }
            .message-bubble { max-width: 88%; }
            .bubble-content {
              padding: 14px 18px; border-radius: 20px;
              font-size: 0.9rem; line-height: 1.55; font-weight: 500;
            }
            .message-bubble.bot .bubble-content {
              background: var(--secondary); color: var(--foreground); border-bottom-left-radius: 4px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid var(--card-border);
              align-self: flex-start;
            }
            .message-bubble.bot { align-self: flex-start; }
            .message-bubble.user { align-self: flex-end; }
            .message-bubble.user .bubble-content {
              background: var(--primary); color: white;
              border-bottom-right-radius: 4px; box-shadow: 0 4px 12px rgba(99,102,241,0.3);
            }
            .typing-indicator { display: flex; gap: 5px; align-items: center; min-height: 20px; }
            .typing-indicator span {
              width: 7px; height: 7px; border-radius: 50%; background: #94a3b8;
              animation: bounce 1.2s infinite ease-in-out;
            }
            .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
            .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
            @keyframes bounce {
              0%,80%,100% { transform: translateY(0); }
              40% { transform: translateY(-6px); }
            }
            .chat-input-area {
              padding: 16px 20px; background: transparent;
              border-top: 1px solid var(--card-border); display: flex; gap: 12px; align-items: center;
            }
            .chat-input-area input {
              flex: 1; background: var(--secondary); color: var(--foreground); border: 1px solid var(--card-border);
              padding: 12px 20px; border-radius: 24px; font-size: 0.9rem;
              transition: all 0.3s;
            }
            .chat-input-area input:focus {
              outline: none; border-color: var(--primary);
              box-shadow: 0 0 0 3px rgba(79,70,229,0.15); background: var(--background);
            }
            .send-btn {
              width: 44px; height: 44px; background: var(--primary); color: white;
              border: none; border-radius: 50%; display: flex; align-items: center;
              justify-content: center; cursor: pointer; transition: all 0.3s;
              box-shadow: 0 8px 16px -4px rgba(79,70,229,0.4);
            }
            .send-btn:hover { transform: scale(1.08); filter: brightness(1.1); box-shadow: 0 12px 20px -4px rgba(79,70,229,0.5); }
            @keyframes scaleIn {
              from { transform: scale(0.9) translateY(20px); opacity: 0; filter: blur(5px); }
              to { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
            }
            .animate-scale-in { animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
          `}</style>
        </div>
      )}
    </div>
  );
}
