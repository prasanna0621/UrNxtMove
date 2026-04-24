export type StreamDetail = {
  leaderboard: { title: string; desc: string; icon: string; impact: string; path: string }[];
  pathways: {
    title: string;
    subtitle: string;
    icon: string;
    subgroups: {
      label: string;
      items: { name: string; detail: string; color: string }[];
    }[];
  }[];
  proTips: { text: string; icon: string }[];
  hub: { cat: string; exam: string; inst: string }[];
};

export const STREAM_INTEL: Record<string, StreamDetail> = {
  bipc: {
    leaderboard: [
      { title: 'Specialist Surgeon', desc: 'Performing life-saving procedures. Highest social status and global salary benchmarks across MD/MS → MCh pathways.', icon: 'HeartPulse', impact: 'Critical Impact', path: 'MBBS → MS → MCh' },
      { title: 'Clinical Pharmacist', desc: 'Expert in drug therapy management. Bridge between prescription and patient safety in hospitals.', icon: 'Syringe', impact: 'High Impact', path: 'Pharm.D → M.Ph' },
      { title: 'Geneticist', desc: 'Decoding DNA for personalized medicine and hereditary disease eradication. Future of healthcare.', icon: 'Microscope', impact: 'Emerging Impact', path: 'B.Sc → M.Sc → Ph.D' },
      { title: 'Agri-Data Scientist', desc: 'Optimizing crop yields and soil health using biological data, AI solutions, and sustainable farming.', icon: 'Sprout', impact: 'Future Impact', path: 'B.Sc Agri → M.Sc → Data Sci' }
    ],
    pathways: [
      {
        title: 'After Intermediate (12th Grade)',
        subtitle: 'The primary educational gateways for BiPC students covering medical, pharma and life-sciences.',
        icon: 'Target',
        subgroups: [
          {
            label: 'Medical & Allied Health',
            items: [
              { name: 'MBBS (5.5 Years)', detail: 'Comprehensive clinical training. Core: Anatomy, Physio, Surgery. Mandatory 1-year hospital internship. Requires NEET-UG.', color: '#3b82f6' },
              { name: 'BDS (5 Years)', detail: 'Specialized dental surgery and oral hygiene. 1-year mandatory internship in clinical dental practice.', color: '#0ea5e9' },
              { name: 'BVSc (5.5 Years)', detail: 'Veterinary medicine focused on wildlife, livestock and domestic animal clinical healthcare.', color: '#10b981' },
              { name: 'BPT (Physiotherapy)', detail: 'Functional rehabilitation and physical trauma recovery. High demand in sports clinics and geriatric care.', color: '#14b8a6' },
              { name: 'B.Sc Nursing', detail: 'Essential patient nursing care and hospital management. High global demand (USA/UK/Australia).', color: '#6366f1' }
            ]
          },
          {
            label: 'Pharma & Life Sciences',
            items: [
              { name: 'Pharm.D (6 Years)', detail: 'Doctor of Pharmacy. Clinical focus with 1-year hospital residency. Bridge to patient therapy management.', color: '#8b5cf6' },
              { name: 'B.Pharm (4 Years)', detail: 'Core focus on drug production, chemical analytics and pharma industrial operations.', color: '#a855f7' },
              { name: 'B.Sc Genetics/Biotech', detail: 'Researching biological systems and DNA engineering. Path to vaccine R&D and genomic medicine.', color: '#ec4899' },
              { name: 'B.Sc Agri/Horti', detail: 'Sustainable food production, crop science and soil technology. Vital for global agricultural exports.', color: '#10b981' }
            ]
          }
        ]
      },
      {
        title: 'After Graduation (Post-Degree Pathways)',
        subtitle: 'Higher specialization, research fellowships and administrative leadership tracks.',
        icon: 'GraduationCap',
        subgroups: [
          {
            label: 'Clinical & Technical Specialist',
            items: [
              { name: 'MD/MS/MDS', detail: 'Specialist clinical training in 50+ specialties (Surgery, Neuro, Ortho). Leads to DM/MCh super-specialization.', color: '#3b82f6' },
              { name: 'M.Pharm / Pharm.D', detail: 'Advanced R&D in Pharmaceutics. Senior Clinical Pharmacist roles in global healthcare systems.', color: '#8b5cf6' }
            ]
          },
          {
            label: 'Research & Govt Services',
            items: [
              { name: 'Research Pathways', detail: 'M.Sc + Ph.D in Life Sciences. CSIR-NET/GATE for research fellowships in national labs (ICMR, CCMB).', color: '#ec4899' },
              { name: 'Govt & Civil Services', detail: 'IAS/IPS (Medical focus) or Medical Officer roles in ICMR, DRDO, and State Healthcare Departments.', color: '#f59e0b' }
            ]
          },
          {
            label: 'Strategic & Global Opportunities',
            items: [
              { name: 'USMLE / PLAB Prep', detail: 'International licensing for clinical residency in the US (Step 1/2/3) or UK (Part A/B). Highest global salary track.', color: '#10b981' },
              { name: 'Hospital Mgmt (MBA)', detail: 'Transitioning to healthcare leadership, policy-making and large-scale hospital operations management.', color: '#6366f1' }
            ]
          }
        ]
      }
    ],
    proTips: [
      { text: 'Start NEET preparation from Class 11—2 years of consistency builds a top-100 rank.', icon: 'Target' },
      { text: 'Focus 90% on NCERT Biology; solve 100+ Physics numericals daily for rank edge.', icon: 'Zap' },
      { text: 'Gain hospital volunteering experience during vacations to build an elite global CV.', icon: 'Activity' },
      { text: 'Participate in Science Olympiads and early research internships (IISc Summer).', icon: 'Microscope' }
    ],
    hub: [
      { cat: 'Medical', exam: 'NEET-UG, AIIMS (Merged)', inst: 'AIIMS Delhi, CMC Vellore, AFMC Pune' },
      { cat: 'Dental', exam: 'NEET-UG', inst: 'Maulana Azad Dental, Manipal' },
      { cat: 'Pharma', exam: 'GPAT, BITSAT, State CET', inst: 'NIPER (Hyderabad), Jamia Hamdard, BITS' },
      { cat: 'Agriculture', exam: 'ICAR AIEEA', inst: 'PAU Ludhiana, TNAU Coimbatore, IARI Delhi' }
    ]
  },

  mpc: {
    leaderboard: [
      { title: 'Software Architect', desc: 'Designing complex distributed global systems. Highest growth and salary benchmarks in the tech world (FAANG+).', icon: 'Code', impact: 'Critical Impact', path: 'B.Tech → MS → Architect' },
      { title: 'Data Scientist / AI Engineer', desc: 'Extracting intelligence from big data. Core to modern AI product development and global business strategy.', icon: 'Cpu', impact: 'High Impact', path: 'B.Sc/B.Tech → M.Sc/MS' },
      { title: 'Aerospace Engineer', desc: 'Working on satellite, rocket and aircraft technology for elite agencies like ISRO, NASA and DRDO.', icon: 'Plane', impact: 'Elite Impact', path: 'B.Tech → M.Tech → ISRO/NASA' },
      { title: 'Quant Analyst', desc: 'Applying advanced mathematics to financial markets and algorithmic high-frequency trading systems.', icon: 'LineChart', impact: 'Wealth Impact', path: 'B.Tech → CFA/MBA Finance' }
    ],
    pathways: [
      {
        title: 'After Intermediate (12th Grade)',
        subtitle: 'Premier technical and scientific gateways for MPC students.',
        icon: 'Target',
        subgroups: [
          {
            label: 'Engineering & Tech',
            items: [
              { name: 'B.Tech (IIT/NIT)', detail: 'Gold-standard 4-year engineering degree. Core branches: CSE, AI/ML, Robotics, Mechanical, Electrical. JEE gateway.', color: '#3b82f6' },
              { name: 'B.Arch (5 Years)', detail: 'Designing futuristic urban spaces and buildings. Entry via NATA or JEE Paper 2. Emerging demand globally.', color: '#0ea5e9' },
              { name: 'NDA (Defense)', detail: 'Gateway to commissioned officer rank in Army, Navy or Air Force via UPSC NDA twice yearly.', color: '#ef4444' },
              { name: 'B.Plan (Urban Planning)', detail: 'Specializing in sustainable city architecture, transport systems and urban development policy.', color: '#14b8a6' }
            ]
          },
          {
            label: 'Science & Research',
            items: [
              { name: 'BS-MS at IISER', detail: 'Premium 5-year integrated research degrees in Physics, Math and Chemistry at India\'s top research institutes.', color: '#a855f7' },
              { name: 'B.Sc Math/Statistics', detail: 'Foundational degrees for data science, actuarial science, cryptography and quantitative finance.', color: '#ec4899' },
              { name: 'Merchant Navy', detail: 'Technical entry via B.Sc Nautical Science or Marine Engineering. Global tax-free salary at sea.', color: '#10b981' }
            ]
          }
        ]
      },
      {
        title: 'After Graduation',
        subtitle: 'Advanced mastery, global research and high-value career transitions.',
        icon: 'GraduationCap',
        subgroups: [
          {
            label: 'Technical Mastery',
            items: [
              { name: 'M.Tech / M.E.', detail: 'Deep specialization via GATE. Opens PSU (BHEL/ONGC) jobs and PhD research fellowships.', color: '#3b82f6' },
              { name: 'MS Abroad (GRE)', detail: 'Top US/EU universities for AI, Robotics, Aerospace. Leads to global tech company placements.', color: '#a855f7' }
            ]
          },
          {
            label: 'Strategic Pivots',
            items: [
              { name: 'MBA (IIM/ISB)', detail: 'Transitioning from technical to management. Product Management, Consulting and VC pathways.', color: '#f59e0b' },
              { name: 'UPSC (IES/IAS)', detail: 'Engineering Services Exam or Civil Services for high-prestige government technical leadership.', color: '#10b981' }
            ]
          }
        ]
      }
    ],
    proTips: [
      { text: 'Master Calculus and Coordinate Geometry from Class 11—these are JEE backbone topics.', icon: 'Zap' },
      { text: 'Solve 100+ Physics numericals daily. Dimensional Analysis is your exam superpower.', icon: 'Target' },
      { text: 'Learn Python/C++ basics while in Intermediate—placement interviewers love this.', icon: 'Code' },
      { text: 'Build a competitive programming profile on Codeforces or LeetCode early.', icon: 'Globe' }
    ],
    hub: [
      { cat: 'Engineering', exam: 'JEE Main, JEE Advanced, BITSAT', inst: 'IIT Bombay, IIT Delhi, NIT Trichy, BITS Pilani' },
      { cat: 'Defense', exam: 'NDA (UPSC), CDS', inst: 'NDA Pune, IMA Dehradun, AFMC' },
      { cat: 'Research', exam: 'IAT (IISER), JAM, NEST', inst: 'IISER Pune, IISc Bangalore, NCBS' },
      { cat: 'Post-Grad', exam: 'GATE, GRE, CAT', inst: 'IITs, IISc, IIMs, MIT/Stanford' }
    ]
  },

  cec: {
    leaderboard: [
      { title: 'Chartered Accountant', desc: 'The elite financial authority. Core to corporate governance, auditing and national taxation frameworks.', icon: 'Calculator', impact: 'Elite Status', path: 'CA Foundation → Inter → Final' },
      { title: 'Investment Banker', desc: 'Managing high-stakes mergers, acquisitions and global financial portfolio restructuring for top firms.', icon: 'LineChart', impact: 'Wealth Impact', path: 'B.Com → MBA Finance (IIM)' },
      { title: 'CFA Analyst', desc: 'Forecasting market trends and providing alpha strategy for hedge funds, PE firms and global banks.', icon: 'PieChart', impact: 'High Impact', path: 'B.Com → CFA Level I/II/III' },
      { title: 'Corporate Lawyer', desc: 'Handling legal frameworks for large-scale M&A, cross-border taxation and corporate compliance.', icon: 'Gavel', impact: 'Strategic Impact', path: 'B.Com → LL.B → LLM' }
    ],
    pathways: [
      {
        title: 'After Intermediate (12th Grade)',
        subtitle: 'Premier finance, professional and legal gateways for CEC students.',
        icon: 'Target',
        subgroups: [
          {
            label: 'Professional Qualifications',
            items: [
              { name: 'CA (ICAI)', detail: 'Gold-standard 3-tier accounting certification (Foundation → Inter → Final). Opens Big-4 auditing and global consulting pathways.', color: '#3b82f6' },
              { name: 'CS (ICSI)', detail: 'Company Secretary. Managing corporate law, board governance, compliance and M&A advisories.', color: '#0ea5e9' },
              { name: 'CMA (ICAI-CMA)', detail: 'Cost & Management Accountancy. Focus on operational efficiency, profitability analysis and strategic costing.', color: '#10b981' }
            ]
          },
          {
            label: 'Academic & Management',
            items: [
              { name: 'B.Com (Hons)', detail: 'Foundational 3-year commerce degree. Premium entry gateway to M.Com, CA articleship and MBA programs.', color: '#a855f7' },
              { name: 'BBA / BMS', detail: 'Bachelor Management degree. Bridge to high-tier MBA programs at IIMs and global business schools.', color: '#ec4899' },
              { name: '5-Year BA LL.B (CLAT)', detail: 'Integrated law degree. Gateway to top-tier National Law Universities and corporate law practices.', color: '#ef4444' }
            ]
          }
        ]
      },
      {
        title: 'After Graduation',
        subtitle: 'Advanced finance, law mastery and global strategic roles.',
        icon: 'GraduationCap',
        subgroups: [
          {
            label: 'Finance & Analytics',
            items: [
              { name: 'MBA Finance (IIM)', detail: 'Elite management entry to Investment Banking, Private Equity and Corporate Strategy divisions.', color: '#3b82f6' },
              { name: 'CFA Certification', detail: 'Global gold-standard in investment analysis. Opens doors to fund management and hedge funds worldwide.', color: '#a855f7' }
            ]
          },
          {
            label: 'Law & Policy',
            items: [
              { name: 'LLM (Specialization)', detail: 'Master of Law in Corporate Law, Tax or IP. Top firms recruit from NALSAR, NLS, NLU Delhi directly.', color: '#ef4444' },
              { name: 'UPSC / Civil Services', detail: 'Administrative and policy governance path. Commerce background is a significant strategic advantage.', color: '#f59e0b' }
            ]
          }
        ]
      }
    ],
    proTips: [
      { text: 'Start CA Foundation in Class 12 itself—early movers clear it fastest.', icon: 'Zap' },
      { text: 'Read Bloomberg, Economic Times and Mint daily—financial awareness is a CA interview superpower.', icon: 'LineChart' },
      { text: 'Focus on Logical Reasoning and Reading Comprehension from Class 11 for CLAT/CAT success.', icon: 'Target' },
      { text: 'Intern at a CA firm during college vacations for immediate practical exposure.', icon: 'Briefcase' }
    ],
    hub: [
      { cat: 'Commerce', exam: 'CA Foundation, CUET, DU JAT', inst: 'SRCC Delhi, St. Xavier\'s Mumbai, LSR Delhi' },
      { cat: 'Management', exam: 'IPMAT, CAT, JIPMAT', inst: 'IIM Indore, IIM Rohtak, IIM Calcutta' },
      { cat: 'Law', exam: 'CLAT, AILET, LSAT India', inst: 'NLSIU Bangalore, NALSAR Hyderabad, NLU Delhi' },
      { cat: 'Global Finance', exam: 'CFA, ACCA, GMAT', inst: 'CFA Institute, ICAEW, London Business School' }
    ]
  },

  hec: {
    leaderboard: [
      { title: 'IAS/IPS Officer', desc: 'The most prestigious administrative and police leadership in India. Policy design, disaster response and governance.', icon: 'Shield', impact: 'Highest Prestige', path: 'BA/LLB → UPSC CSE' },
      { title: 'Constitutional Lawyer', desc: 'Arguing landmark cases in High Courts and Supreme Court. Defending rights and shaping legal precedent.', icon: 'Gavel', impact: 'Strategic Impact', path: 'BA → LLB → LLM → Practice' },
      { title: 'Senior Journalist', desc: 'Investigative reporting and editorial leadership at national media houses, shaping public discourse.', icon: 'Radio', impact: 'Social Impact', path: 'Mass Comm → Byline → Editor' },
      { title: 'Policy Analyst', desc: 'Researching and designing government policy for Think Tanks, UN agencies, and NGOs.', icon: 'BookOpen', impact: 'Civic Impact', path: 'BA → MA → Think Tank/PhD' }
    ],
    pathways: [
      {
        title: 'After Intermediate (12th Grade)',
        subtitle: 'Premier humanities, governance and communication gateways for HEC students.',
        icon: 'Target',
        subgroups: [
          {
            label: 'Law & Governance',
            items: [
              { name: '5-Year BA LLB (CLAT)', detail: 'Integrated law degree at National Law Universities. Gateway to corporate law, judicial services and advocacy.', color: '#3b82f6' },
              { name: 'BA (Hons) - Politics/History', detail: 'Deep foundation for UPSC Civil Services. Top colleges: St. Stephens, Hindu College, Presidency Kolkata.', color: '#6366f1' },
              { name: 'BA Economics (Hons)', detail: 'Quantitative policy analysis. Bridge to UPSC, IES (Economic Services) and global development organizations.', color: '#0ea5e9' }
            ]
          },
          {
            label: 'Media & Social Sciences',
            items: [
              { name: 'Mass Comm / Journalism', detail: 'Entry to print, digital, broadcast media. Top institutes: IIMC, Symbiosis, Jamia School of Mass Comm.', color: '#ec4899' },
              { name: 'Bachelor of Social Work', detail: 'Social policy and NGO management. Pathway to UN, UNICEF, World Bank development projects.', color: '#10b981' },
              { name: 'BA Psychology', detail: 'Counselling, organizational behavior and HR. High growth with increasing mental health awareness.', color: '#f59e0b' }
            ]
          }
        ]
      },
      {
        title: 'After Graduation',
        subtitle: 'UPSC, global policy research and media leadership tracks.',
        icon: 'GraduationCap',
        subgroups: [
          {
            label: 'Civil Services & Policy',
            items: [
              { name: 'UPSC CSE (IAS)', detail: 'India\'s most prestigious exam. 3 stages: Prelims → Mains (9 papers) → Personality Test. 2-3 year prep standard.', color: '#3b82f6' },
              { name: 'MA + PhD (Research)', detail: 'Academic track at JNU, Hyderabad Central University. Path to UN agencies and global policy think tanks.', color: '#6366f1' }
            ]
          },
          {
            label: 'Law & Communication',
            items: [
              { name: 'LLM / Judicial Services', detail: 'State Judiciary exams or LLM specialization (Human Rights, IP Law) at top National Law Schools.', color: '#ef4444' },
              { name: 'MBA (HR / Strategy)', detail: 'Transitioning to corporate communications, public relations and organizational leadership.', color: '#f59e0b' }
            ]
          }
        ]
      }
    ],
    proTips: [
      { text: 'Start reading The Hindu daily from Class 11—editorial page builds UPSC answer-writing skills.', icon: 'BookOpen' },
      { text: 'Focus on World History and Indian Polity simultaneously for the CLAT/CUET advantage.', icon: 'Target' },
      { text: 'Develop strong essay writing and debate skills—HEC career success is communication-driven.', icon: 'Radio' },
      { text: 'Intern at NGOs or political offices during college—real-world policy exposure is priceless.', icon: 'Users' }
    ],
    hub: [
      { cat: 'Humanities', exam: 'CUET, DU Entrance', inst: 'St. Stephens Delhi, Hindu College, Presidency Kolkata' },
      { cat: 'Law', exam: 'CLAT, AILET', inst: 'NLSIU Bangalore, NALSAR, NLU Delhi' },
      { cat: 'Media', exam: 'IIMC Entrance, CUET', inst: 'IIMC Delhi, Symbiosis, Jamia Mass Comm' },
      { cat: 'Civil Services', exam: 'UPSC CSE, State PCS', inst: 'JNU Delhi, Hyderabad Central Univ, AMU' }
    ]
  },

  polycet: {
    leaderboard: [
      { title: 'Junior Engineer (JE)', desc: 'Core technical supervision role in PSUs (BHEL, ONGC, Railways). High stability and pension benefits.', icon: 'Cog', impact: 'Stable Impact', path: 'Diploma → ECET → B.Tech → JE Exam' },
      { title: 'Industrial Technologist', desc: 'Managing factory automation, CNC operations and industrial maintenance for manufacturing giants.', icon: 'Wrench', impact: 'Core Industry', path: 'Diploma → Industry → Senior Tech' },
      { title: 'Field Service Engineer', desc: 'Precision hardware diagnostics and on-site equipment troubleshooting for telecom/power sectors.', icon: 'Zap', impact: 'High Demand', path: 'Diploma → Apprenticeship → FSE' },
      { title: 'AutoCAD Design Drafter', desc: 'Technical drawing and design for manufacturing, construction and civil engineering projects.', icon: 'Building2', impact: 'Growing Demand', path: 'Diploma → CAD Cert → Design Role' }
    ],
    pathways: [
      {
        title: 'After 10th Grade (POLYCET Entry)',
        subtitle: 'Fast-track 3-year technical diploma for hands-on engineering careers.',
        icon: 'Target',
        subgroups: [
          {
            label: 'Core Engineering Diplomas',
            items: [
              { name: 'Civil Engineering Diploma', detail: 'AutoCAD, site supervision and structural basics. Entry to govt works departments and construction firms.', color: '#3b82f6' },
              { name: 'Mechanical Engineering', detail: 'CNC machining, tool design and production engineering. High demand in auto and aerospace manufacturing.', color: '#ef4444' },
              { name: 'Electrical Engineering', detail: 'Power distribution, substation operations and wiring technology. Core to energy and infrastructure sectors.', color: '#f59e0b' },
              { name: 'Computer Science (CSE)', detail: 'Programming, web development and networking basics. Bridge to IT entry-level roles or B.Tech lateral.', color: '#10b981' }
            ]
          },
          {
            label: 'Emerging Tech Diplomas',
            items: [
              { name: 'Electronics & Comm (ECE)', detail: 'Circuit design, VLSI basics, and embedded systems. Telecom and consumer electronics sector entry.', color: '#8b5cf6' },
              { name: 'Mining Engineering', detail: 'Entry to core mining sector roles in Coal India, NMDC and SESA Goa with strong salary growth.', color: '#6366f1' },
              { name: 'Automobile Technology', detail: 'EV systems, engine diagnostics and vehicle maintenance. Fast-growing due to EV revolution.', color: '#14b8a6' }
            ]
          }
        ]
      },
      {
        title: 'After Diploma (ECET / Lateral Entry)',
        subtitle: 'Accelerate into B.Tech 2nd Year or directly into core industry roles.',
        icon: 'GraduationCap',
        subgroups: [
          {
            label: 'Academic Advancement',
            items: [
              { name: 'ECET (Lateral Entry)', detail: 'State-level exam for direct admission to B.Tech 2nd Year. Skip Year 1 of engineering. Massive time-saver.', color: '#3b82f6' },
              { name: 'B.Tech + GATE Path', detail: 'After lateral B.Tech, crack GATE for PSU jobs (BHEL starting ₹8 LPA) or M.Tech research track.', color: '#a855f7' }
            ]
          },
          {
            label: 'Industry Entry',
            items: [
              { name: 'PSU Apprenticeships', detail: 'BHEL, ONGC, NTPC, Railways offer stipend apprenticeships for diploma holders with conversion pathways.', color: '#10b981' },
              { name: 'Own Business / Trade', detail: 'Use diploma skills to start a technical contracting business in electrical, plumbing or civil works.', color: '#f59e0b' }
            ]
          }
        ]
      }
    ],
    proTips: [
      { text: 'Learn AutoCAD and SolidWorks alongside your diploma—employers pay premium for these.', icon: 'Cog' },
      { text: 'Apply for BHEL/NTPC apprenticeships in 3rd year of diploma—it converts to permanent roles.', icon: 'Building2' },
      { text: 'Prepare for ECET from 2nd year of diploma itself for a seamless B.Tech transition.', icon: 'Target' },
      { text: 'Get certified in PLC/SCADA programming for industrial automation—huge global demand.', icon: 'Zap' }
    ],
    hub: [
      { cat: 'Govt Polytechnics', exam: 'POLYCET (State Level)', inst: 'Govt Polytechnic Hyderabad, BVRIT, CBIT Poly' },
      { cat: 'Lateral B.Tech', exam: 'ECET (State Level)', inst: 'NIT Lateral Entry, JNTUH, Osmania College of Tech' },
      { cat: 'PSU Jobs', exam: 'GATE, BHEL Apprentice', inst: 'BHEL, NTPC, Coal India, ONGC, Indian Railways' },
      { cat: 'Certifications', exam: 'NSDC, NCVT, Red Seal', inst: 'NSDC Partners, Bosch Training Center, L&T EduTech' }
    ]
  },

  iti: {
    leaderboard: [
      { title: 'Master Electrician', desc: 'Designing complex power distribution systems and industrial wiring. Critical to construction and infrastructure.', icon: 'Zap', impact: 'Always Needed', path: 'ITI Electrician → Apprentice → Master' },
      { title: 'Precision CNC Machinist', desc: 'Operating high-end CNC lathes and milling machines for automotive and aerospace part production.', icon: 'Cog', impact: 'High Skill Premium', path: 'ITI Turner → CNC Cert → Senior Machinist' },
      { title: 'HVAC / AC Technician', desc: 'Installing and servicing HVAC systems for commercial and residential complexes. Recession-proof demand.', icon: 'Wrench', impact: 'Evergreen Demand', path: 'ITI RAAC → Apprentice → Own Business' },
      { title: 'Structural Welder', desc: 'Structural and precision welding for shipbuilding, oil refineries and construction. High global mobility.', icon: 'Building2', impact: 'Global Mobility', path: 'ITI Welder → Certification → Gulf/EU Jobs' }
    ],
    pathways: [
      {
        title: 'Trade Programs (ITI Entry)',
        subtitle: '1-2 year skill-intensive trade certification leading to immediate industry placement.',
        icon: 'Target',
        subgroups: [
          {
            label: 'Engineering Trades',
            items: [
              { name: 'Electrician Trade (2Y)', detail: 'Wiring, switchgear and power systems. Mandatory for industrial licensing. Extremely high employment rate.', color: '#f59e0b' },
              { name: 'Fitter Trade (2Y)', detail: 'Precision mechanical assembly and maintenance. Core to aerospace, railways and defense manufacturing.', color: '#3b82f6' },
              { name: 'Turner / Machinist (2Y)', detail: 'Operating lathes and CNC machines. Gateway to premium manufacturing jobs in auto and aerospace.', color: '#ef4444' },
              { name: 'Welder Trade (2Y)', detail: 'Structural and arc welding for bridges, ships and pipelines. Global demand (Gulf, Europe, Australia).', color: '#10b981' }
            ]
          },
          {
            label: 'Non-Engineering Trades',
            items: [
              { name: 'Computer Operator (1Y)', detail: 'MS Office, data entry and basic programming. Fastest route to office-level IT support jobs.', color: '#8b5cf6' },
              { name: 'Refrigeration & AC (2Y)', detail: 'HVAC installation and servicing. One of the highest-demand trades in tier-2 and tier-3 cities.', color: '#14b8a6' },
              { name: 'Automobile Service Tech', detail: 'Commercial vehicle licensing and basic mechanic skills. High growth due to EV revolution.', color: '#6366f1' }
            ]
          }
        ]
      },
      {
        title: 'After ITI (Advancement Paths)',
        subtitle: 'Post-certificate options to move into supervisory and management roles.',
        icon: 'GraduationCap',
        subgroups: [
          {
            label: 'Skill Upgradation',
            items: [
              { name: 'Apprenticeship Act (1961)', detail: 'Registered apprenticeships at BHEL, NTPC, Indian Oil. Stipend ₹8k-14k/month with conversion chance.', color: '#3b82f6' },
              { name: 'CITS (Craft Instructor)', detail: 'Craft Instructor Training Scheme. Become a government-certified ITI instructor. Stable govt career.', color: '#10b981' }
            ]
          },
          {
            label: 'Higher Education',
            items: [
              { name: 'Diploma via Lateral Entry', detail: 'ITI holders can join Polytechnic 2nd year directly. Then ECET for B.Tech lateral—full upward path possible.', color: '#a855f7' },
              { name: 'Self-Employment / Trade', detail: 'Use your ITI trade to start an electrical contracting, AC servicing or fabrication business. Low capital.', color: '#f59e0b' }
            ]
          }
        ]
      }
    ],
    proTips: [
      { text: 'Get NCVT certification (national level)—it opens Gulf, Singapore and EU overseas job markets.', icon: 'Globe' },
      { text: 'Apply for registered apprenticeships on the National Apprenticeship Portal (NAPS.gov.in).', icon: 'Target' },
      { text: 'Learn digital trade skills (PLC, CNC programming) to double your salary potential.', icon: 'Zap' },
      { text: 'Join the ITI Alumni network for job referrals and business contracts.', icon: 'Users' }
    ],
    hub: [
      { cat: 'Govt ITIs', exam: 'State Merit List / ITI Entrance', inst: 'Govt ITI Hyderabad, ITI Mumbai, ITI Chennai' },
      { cat: 'PSU Apprentice', exam: 'NAPS Portal Application', inst: 'BHEL, NTPC, Indian Oil, Hindustan Aeronautics' },
      { cat: 'Overseas', exam: 'NCVT Certification', inst: 'Gulf (UAE/Saudi), Singapore Skill Development' },
      { cat: 'Upgradation', exam: 'ECET (via Diploma Lateral)', inst: 'State Polytechnics, JNTUH, Osmania' }
    ]
  },

  vocational: {
    leaderboard: [
      { title: 'UI/UX Designer', desc: 'Defining digital experiences for world-class apps and platforms. Highest demand in global tech hubs.', icon: 'Palette', impact: 'Creative Impact', path: 'Degree/Course → Portfolio → UX Design' },
      { title: 'Film Director / Producer', desc: 'Visual storytelling for OTT platforms, cinema and advertising. Explosive growth in India\'s creator economy.', icon: 'Film', impact: 'Social Impact', path: 'Fine Arts → FTII/NSD → Director' },
      { title: 'Professional Athlete', desc: 'National and international sports representation. Olympic pathway or franchise leagues (IPL, PKL, ISL).', icon: 'Trophy', impact: 'Elite Impact', path: 'Academy → State → National' },
      { title: 'Executive Chef', desc: 'Culinary mastery for luxury hotel chains, Michelin-starred restaurants and food entrepreneurship.', icon: 'ChefHat', impact: 'Global Impact', path: 'Hotel Mgmt → Specialization → Executive' }
    ],
    pathways: [
      {
        title: 'After Intermediate (Vocational Paths)',
        subtitle: 'Alternative elite success paths based on passion, skills and creativity.',
        icon: 'Award',
        subgroups: [
          {
            label: 'Design & Arts',
            items: [
              { name: 'Fashion Design (NIFT/NID)', detail: 'NIFT/NID entrance. Starting salary ₹4-10 LPA. Career trajectory into global luxury brands (Zara, Gucci).', color: '#ec4899' },
              { name: 'Animation & VFX', detail: 'High-growth sector in gaming and OTT entertainment. Tool proficiency: Maya, Blender, After Effects.', color: '#a855f7' },
              { name: 'Architecture (B.Arch)', detail: 'Designing homes, offices and urban spaces. Entry via NATA exam. Growing green architecture demand.', color: '#f59e0b' },
              { name: 'Fine Arts / Graphic Design', detail: 'Core artistic foundation. Freelancing earning potential unlimited on Behance, Dribbble or direct clients.', color: '#3b82f6' }
            ]
          },
          {
            label: 'Sports, Hospitality & Skill Economy',
            items: [
              { name: 'Hotel Management (IHM)', detail: 'NCHMCT-JEE gateway. World-class hospitality training. Salary ₹3-8 LPA starting, grows to ₹30 LPA.', color: '#10b981' },
              { name: 'Professional Sports Mgmt', detail: 'Sports coaching, sports science or management degrees. Pathway to national teams, academies and agencies.', color: '#ef4444' },
              { name: 'Entrepreneurship / Startup', detail: 'Startup India, MSME schemes and incubators. Build your own business with minimal regulatory friction.', color: '#6366f1' },
              { name: 'Digital Creator / Content', detail: 'Monetize via YouTube, Instagram, blogging. Professional photography, podcasting or influencer marketing.', color: '#14b8a6' }
            ]
          }
        ]
      },
      {
        title: 'Career Development (Skill Certification)',
        subtitle: 'Short-term, high-ROI certifications to accelerate vocational career income.',
        icon: 'GraduationCap',
        subgroups: [
          {
            label: 'Digital & Tech Skills',
            items: [
              { name: 'Digital Marketing Cert', detail: 'Google/Meta certification. Freelancing rate: ₹30k-₹1.5L/month. E-commerce and brand management.', color: '#3b82f6' },
              { name: 'Graphic Design (Adobe)', detail: 'Adobe CC mastery opens global client base. Many designers earn ₹50k/month purely freelancing.', color: '#a855f7' }
            ]
          },
          {
            label: 'Global Vocational',
            items: [
              { name: 'NSDC Skill Courses', detail: 'Government-certified short skill programs in IT, Beauty, Logistics and Automotive. Free or subsidized.', color: '#10b981' },
              { name: 'Study Abroad (Arts)', detail: 'Parsons (NY), Central Saint Martins (London). Global arts/design degree for premium career access.', color: '#ec4899' }
            ]
          }
        ]
      }
    ],
    proTips: [
      { text: 'Build a digital portfolio on Behance/Instagram early—it speaks louder than a resume.', icon: 'Palette' },
      { text: 'Freelance on Fiverr/Upwork while studying to build income and real-world experience.', icon: 'Briefcase' },
      { text: 'Attend national design competitions like NIFT Portfolio Reviews and NID Design Camp.', icon: 'Award' },
      { text: 'Focus on communication and networking—the "who you know" factor matters in creative industries.', icon: 'Users' }
    ],
    hub: [
      { cat: 'Design', exam: 'NIFT Entrance, NID DAT, UCEED', inst: 'NIFT Delhi, NID Ahmedabad, Pearl Academy' },
      { cat: 'Hospitality', exam: 'NCHMCT JEE', inst: 'IHM Pusa Delhi, IHM Mumbai, IHM Hyderabad' },
      { cat: 'Media & Film', exam: 'CUET, IIMC, FTII Entrance', inst: 'FTII Pune, IIMC Delhi, Symbiosis Comm' },
      { cat: 'Sports', exam: 'SAI Trials, State Selection', inst: 'SAI Centers, LNCPE, NIS Patiala' }
    ]
  }
};
