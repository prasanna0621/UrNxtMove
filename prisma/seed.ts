import "dotenv/config";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Extremely Detailed Career Routes (Phase 5 Consistency)...')

  // Clean up
  await prisma.streamDetailPro.deleteMany({})
  await prisma.streamDetailCon.deleteMany({})
  await prisma.streamPathwayStep.deleteMany({})
  await prisma.upcomingRole.deleteMany({})
  await prisma.careerPath.deleteMany({})

  // Default User for simulation
  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      id: 'user-1',
      email: 'user@example.com',
      password: 'password123',
      name: 'Future Achiever',
      bio: 'Aspiring professional exploring data-driven pathways.',
      interests: 'STEM, Research, Innovation',
      achievements: 'Gold Medalist - Science Fair 2025, Quiz Master'
    }
  });

  // 1. MPC
  await prisma.stream.upsert({
    where: { slug: 'mpc' },
    update: {
      detailedDescription: 'MPC is for the logic-driven minds aiming for engineering, architecture, and technology.',
      competitiveExams: 'JEE Mains & Advanced, BITSAT, VITEEE, NDA.',
      salaryRange: '₹6 LPA - ₹50 LPA',
      benefits: 'High global adaptability and massive technical earning potential.'
    },
    create: {
      slug: 'mpc',
      name: 'Mathematics, Physics, Chemistry (MPC)',
      description: 'The foundation for engineering, aerospace, and advanced logic.',
      detailedDescription: 'MPC is for the logic-driven minds aiming for engineering, architecture, and technology.',
      tags: 'Engineering,Tech,Aviation,Research',
      benefits: 'High global adaptability and massive technical earning potential.',
      furtherStudies: 'B.Tech/B.E, B.Arch, Integrated M.Sc, Merchant Navy.',
      competitiveExams: 'JEE Mains & Advanced, BITSAT, VITEEE, NDA.',
      salaryRange: '₹6 LPA - ₹50 LPA',
      careerPaths: {
        create: [
          { title: 'Software Architect', description: 'Design complex system architectures.', icon: '💻' },
          { title: 'Aerospace Scientist', description: 'Working with ISRO/NASA.', icon: '🚀' },
          { title: 'Data Scientist', description: 'Big data and AI modeling.', icon: '📊' },
        ]
      },
      pathwaySteps: {
        create: [
          { step: 'Years 1-2', desc: 'Intermediate (MPC) + JEE Prep', order: 1 },
          { step: 'Graduation', desc: '4-year B.Tech in Top Tier College', order: 2 },
          { step: 'Specialization', desc: 'Mastery in AI/Cloud/Robotics', order: 3 },
          { step: 'Industry', desc: 'Top Tech Placement (FAANG/Startups)', order: 4 },
        ]
      },
      pros: { create: [{ content: 'High Demand' }, { content: 'Logical Growth' }] },
      cons: { create: [{ content: 'High Competition' }, { content: 'Continuous Learning' }] }
    }
  });

  // 2. BIPC
  await prisma.stream.upsert({
    where: { slug: 'bipc' },
    update: {
      detailedDescription: 'Leading to medical excellence, surgery, and bio-tech research.',
      competitiveExams: 'NEET, AIIMS, JIPMER, EAMCET.',
      salaryRange: '₹5 LPA - ₹100 LPA',
      benefits: 'Incredible job security and high societal impact.'
    },
    create: {
      slug: 'bipc',
      name: 'Biology, Physics, Chemistry (BIPC)',
      description: 'Medical excellence, life sciences, and pharmaceutical mastery.',
      detailedDescription: 'Leading to medical excellence, surgery, and bio-tech research.',
      tags: 'Medicine,Dental,Pharma,Genetics',
      benefits: 'Incredible job security and high societal impact.',
      furtherStudies: 'MBBS, BDS, B.Pharm, Biotechnology.',
      competitiveExams: 'NEET, AIIMS, JIPMER, EAMCET.',
      salaryRange: '₹5 LPA - ₹100 LPA',
      careerPaths: {
        create: [
          { title: 'Neurosurgeon', description: 'Brain and spine surgery expert.', icon: '🧠' },
          { title: 'Genetic Scientist', description: 'DNA Research.', icon: '🧬' },
        ]
      },
      pathwaySteps: {
        create: [
          { step: 'Years 1-2', desc: 'Intermediate (BIPC) + NEET Coaching', order: 1 },
          { step: 'Med School', desc: '5.5 years of MBBS', order: 2 },
          { step: 'Specialty', desc: 'Post-Graduation MD/MS', order: 3 },
        ]
      },
      pros: { create: [{ content: 'Noble Profession' }, { content: 'Job Security' }] },
      cons: { create: [{ content: 'Long Study Years' }, { content: 'High Stress' }] }
    }
  });

  // 3. CEC
  await prisma.stream.upsert({
    where: { slug: 'cec' },
    update: {
      detailedDescription: 'Heartbeat of the economy: Finance, Auditing, and Business Mastery.',
      competitiveExams: 'CA Foundation, CS, CMA, DU JAT.',
      salaryRange: '₹5 LPA - ₹40 LPA',
      benefits: 'Most flexible stream for career pivots and self-employment.'
    },
    create: {
      slug: 'cec',
      name: 'Commerce, Economics, Civics (CEC)',
      description: 'Wealth management, corporate auditing, and business strategy.',
      detailedDescription: 'Heartbeat of the economy: Finance, Auditing, and Business Mastery.',
      tags: 'Accounting,Business,Finance,Law',
      benefits: 'Most flexible stream for career pivots and self-employment.',
      furtherStudies: 'B.Com, BBA, MBA, Chartered Accountancy.',
      competitiveExams: 'CA Foundation, CS, CMA, DU JAT.',
      salaryRange: '₹5 LPA - ₹40 LPA',
      careerPaths: {
        create: [
          { title: 'Chartered Accountant', description: 'Auditing and Taxation Expert.', icon: '📑' },
          { title: 'FinTech Strategist', description: 'Modern digital finance.', icon: '🏦' },
        ]
      },
      pathwaySteps: {
        create: [
          { step: 'Years 1-2', desc: 'Intermediate (CEC) + CA Base', order: 1 },
          { step: 'Professional', desc: 'Clearing CA Groups + Graduation', order: 2 },
          { step: 'Articleship', desc: 'Field experience in Auditing', order: 3 },
        ]
      },
      pros: { create: [{ content: 'Entrepreneurial' }, { content: 'Global Finance' }] },
      cons: { create: [{ content: 'Math/Accounts Heavy' }, { content: 'Competitive Finals' }] }
    }
  });

  // 4. HEC
  await prisma.stream.upsert({
    where: { slug: 'hec' },
    update: {
      detailedDescription: 'Public policy, governance, law, and creative humanities.',
      competitiveExams: 'CLAT, CUET, UPSC (Later stage).',
      salaryRange: '₹4 LPA - ₹30 LPA',
      benefits: 'Mastery in communication, law, and societal frameworks.'
    },
    create: {
      slug: 'hec',
      name: 'History, Economics, Civics (HEC)',
      description: 'Public policy, governance, law, and creative humanities.',
      detailedDescription: 'Public policy, governance, law, and creative humanities.',
      tags: 'UPSC,Law,Politics,Journalism',
      benefits: 'Mastery in communication, law, and societal frameworks.',
      furtherStudies: 'BA, LLB, Mass Comm, Social Work.',
      competitiveExams: 'CLAT, CUET, UPSC (Later stage).',
      salaryRange: '₹4 LPA - ₹30 LPA',
      careerPaths: {
        create: [
          { title: 'Civil Servant', description: 'IAS/IPS administrative roles.', icon: '🏛️' },
          { title: 'Legal Counsel', description: 'Justice and Constitutional law.', icon: '⚖️' },
        ]
      },
      pathwaySteps: {
        create: [
          { step: 'Years 1-2', desc: 'Intermediate (HEC) + CLAT Kickstart', order: 1 },
          { step: 'Degree', desc: 'BA or Integrated LLB at Top NLU', order: 2 },
          { step: 'Practice', desc: 'Judicial services or Litigation', order: 3 },
        ]
      },
      pros: { create: [{ content: 'Social Impact' }, { content: 'Prestigious Careers' }] },
      cons: { create: [{ content: 'Academic Reading' }, { content: 'Subjective Grading' }] }
    }
  });

  // 5. Polycet (NEW)
  await prisma.stream.upsert({
    where: { slug: 'polycet' },
    update: {
      detailedDescription: 'Fast-track to technical engineering and industrial mastery.',
      competitiveExams: 'POLYCET State Level Entrance.',
      salaryRange: '₹3 LPA - ₹15 LPA',
      benefits: 'Early work readiness and direct entry to B.Tech Year 2.'
    },
    create: {
      slug: 'polycet',
      name: 'Diploma (POLYCET)',
      description: 'Technical engineering foundation with early hands-on industry exposure.',
      detailedDescription: 'Fast-track to technical engineering and industrial mastery.',
      tags: 'Engineering,Trade,Industry,FastTrack',
      benefits: 'Early work readiness and direct entry to B.Tech Year 2.',
      furtherStudies: 'B.Tech (Lateral Entry), Post Diploma.',
      competitiveExams: 'POLYCET State Level Entrance.',
      salaryRange: '₹3 LPA - ₹15 LPA',
      careerPaths: {
        create: [
          { title: 'Industrial Technologist', description: 'Managing factory automation systems.', icon: '🏭' },
          { title: 'Field Service Engineer', description: 'Precision hardware diagnostics.', icon: '🛠️' },
        ]
      },
      pathwaySteps: {
        create: [
          { step: 'Entry', desc: 'Cracking Polycet Exam after 10th', order: 1 },
          { step: 'Diploma', desc: '3 Years Engineering Diploma in Specific Branch', order: 2 },
          { step: 'Evolution', desc: 'Lateral entry into B.Tech 2nd Year (ECET)', order: 3 },
        ]
      },
      pros: { create: [{ content: 'Hands-on Skill' }, { content: 'Early Earning' }] },
      cons: { create: [{ content: 'Narrower Theory' }, { content: 'Competitive ECET' }] }
    }
  });

  // 6. ITI (NEW)
  await prisma.stream.upsert({
    where: { slug: 'iti' },
    update: {
      detailedDescription: 'Specific technical trade foundation for immediate professional craftsmanship.',
      competitiveExams: 'ITI State Merit List.',
      salaryRange: '₹2.5 LPA - ₹10 LPA',
      benefits: 'Immediate skilled employment and strong entrepreneurship base.'
    },
    create: {
      slug: 'iti',
      name: 'Vocational (ITI)',
      description: 'Vocational trade specialization for direct industry craftsmanship.',
      detailedDescription: 'Specific technical trade foundation for immediate professional craftsmanship.',
      tags: 'Trade,Craft,Service,Technical',
      benefits: 'Immediate skilled employment and strong entrepreneurship base.',
      furtherStudies: 'Apprenticeship (ACT), CITS, Diploma (Lateral Entry).',
      competitiveExams: 'ITI State Merit List.',
      salaryRange: '₹2.5 LPA - ₹10 LPA',
      careerPaths: {
        create: [
          { title: 'Master Electrician', description: 'Designing complex power distribution systems.', icon: '⚡' },
          { title: 'Precision CNC Machinist', description: 'Operating high-end industrial equipment.', icon: '⚙️' },
        ]
      },
      pathwaySteps: {
        create: [
          { step: 'Apprentice', desc: '1-2 Year Trade Certificate from Govt ITI', order: 1 },
          { step: 'Practice', desc: 'Apprenticeship at Industry Leader (BHEL/NTPC)', order: 2 },
          { step: 'Mastery', desc: 'Specialized Certification or Own Business', order: 3 },
        ]
      },
      pros: { create: [{ content: 'Essential Skills' }, { content: 'Low Tuition' }] },
      cons: { create: [{ content: 'Physically Demanding' }, { content: 'Slower Early Growth' }] }
    }
  });

  // 7. VOCATIONAL / OTHER
  await prisma.stream.upsert({
    where: { slug: 'vocational' },
    update: {
      detailedDescription: 'Design, performing arts, sports, entrepreneurship and digital skill economy careers.',
      competitiveExams: 'NIFT, NID DAT, NCHMCT JEE, UCEED.',
      salaryRange: '₹3 LPA - ₹Unlimited (Entrepreneurship)',
      benefits: 'Maximum creative freedom and global freelancing potential.'
    },
    create: {
      slug: 'vocational',
      name: 'Vocational / Other Streams',
      description: 'Alternative elite career paths in design, sports, arts, hospitality and the digital creator economy.',
      detailedDescription: 'Design, performing arts, sports, entrepreneurship and digital skill economy careers.',
      tags: 'Design,Arts,Sports,Entrepreneurship,Media',
      benefits: 'Maximum creative freedom and global freelancing potential.',
      furtherStudies: 'B.Design, BFA, Hotel Management, Sports Science.',
      competitiveExams: 'NIFT, NID DAT, NCHMCT JEE, UCEED.',
      salaryRange: '₹3 LPA - ₹Unlimited (Entrepreneurship)',
      careerPaths: {
        create: [
          { title: 'UI/UX Designer', description: 'Designing digital product experiences.', icon: '🎨' },
          { title: 'Executive Chef', description: 'Culinary mastery in high-end hospitality.', icon: '👨‍🍳' },
        ]
      },
      pathwaySteps: {
        create: [
          { step: 'Skill Building', desc: 'Identify your passion and build foundational skills early', order: 1 },
          { step: 'Portfolio', desc: 'Build a strong portfolio with real projects and freelance work', order: 2 },
          { step: 'Specialization', desc: 'Master your niche (Design, Sports, Culinary arts)', order: 3 },
        ]
      },
      pros: { create: [{ content: 'Creative Freedom' }, { content: 'Global Reach' }] },
      cons: { create: [{ content: 'Income Variability' }, { content: 'Self-discipline Required' }] }
    }
  });

  console.log('Seeding completed successfully!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
