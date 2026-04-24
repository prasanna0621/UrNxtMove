import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import SaveStreamButton from "@/components/SaveStreamButton";
import StreamRoadmap from "@/components/StreamRoadmap";
import DeepDiveDetails from "@/components/DeepDiveDetails";
import MentorChat from "@/components/MentorChat";
import { STREAM_INTEL } from "@/data/stream-details";
import { ROADMAP_DATA } from "@/data/roadmap-data";

const UPSC_STAGES = [
  { stage: '01', name: 'Prelims', detail: '2 Papers: GS (200 marks) + CSAT (200 marks). Qualifying round. Held May every year.' },
  { stage: '02', name: 'Mains', detail: '9 Papers: GS I-IV, 2 Optionals, Essay, Language. Written in Hindi/English. Held Oct-Nov.' },
  { stage: '03', name: 'Interview', detail: 'Personality Test by UPSC board. 275 marks. Tests overall personality, not just knowledge.' },
  { stage: '04', name: 'IAS/IPS/IFS', detail: 'Final rank = Mains + Interview combined. ~500,000 apply for ~900 final selections.' },
];

export default async function HECPage() {
  const stream = await prisma.stream.findUnique({ where: { slug: 'hec' } });
  if (!stream) notFound();

  const intel = STREAM_INTEL['hec'];
  const roadmap = ROADMAP_DATA['hec'];
  const accent = '#dc2626';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <Image src="/stream_hec.jpg" alt="Humanities Career" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(40,0,0,0.4) 0%, rgba(40,0,0,0.1) 55%, var(--background) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(220,38,38,0.2)', backdropFilter: 'blur(12px)', border: '1px solid rgba(220,38,38,0.35)', borderRadius: '50px', color: '#fecaca', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={13} /> GOVERNANCE & HUMANITIES INTELLIGENCE
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '14px' }}>
            History, Economics
            <br /><span style={{ color: '#fca5a5' }}>& Civics (HEC)</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, maxWidth: '700px', lineHeight: 1.5 }}>
            Master governance, law, journalism and the art of shaping public policy.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '28px', left: '28px', zIndex: 20 }}>
          <Link href="/home" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', fontWeight: 800, background: 'rgba(0,0,0,0.3)', padding: '9px 16px', borderRadius: '50px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem' }}>
            <ArrowLeft size={15} /> BACK
          </Link>
        </div>
        <div style={{ position: 'absolute', top: '28px', right: '28px', zIndex: 20 }}>
          <SaveStreamButton streamId={stream.id} userId="user-1" />
        </div>
      </div>

      {/* UPSC JOURNEY STAGES — unique to HEC */}
      <div className="container" style={{ maxWidth: '1440px', padding: '30px 20px 0' }}>
        <div style={{ padding: '25px 30px', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid #fecaca', marginBottom: '0' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 900, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }}>
            🏛️ The UPSC Civil Services Journey — India&apos;s Toughest Path
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
            {UPSC_STAGES.map((s, i) => (
              <div key={s.stage} style={{ padding: '18px 20px', borderRight: i < 3 ? '1px solid #fee2e2' : 'none', position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fee2e2', position: 'absolute', top: '10px', right: '12px', lineHeight: 1 }}>{s.stage}</div>
                <div style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, textTransform: 'uppercase', marginBottom: '6px' }}>STAGE {s.stage}</div>
                <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '8px' }}>{s.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5 }}>{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="container" style={{ padding: '25px 20px 60px', maxWidth: '1440px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: '30px' }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'var(--card-bg)', borderRadius: '18px', border: '1px solid #fecaca', borderLeft: `4px solid ${accent}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--foreground)' }}>Governance Roadmap</h3>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, background: '#fee2e2', padding: '3px 10px', borderRadius: '6px' }}>INTERACTIVE</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5 }}>
              From HEC foundation to IAS officer, Constitutional Lawyer or Senior Journalist.
            </p>
          </div>
          <StreamRoadmap nodes={roadmap.nodes} accentColor={accent} />
        </aside>
        <main><DeepDiveDetails data={intel} accentColor={accent} /></main>
      </div>

      <MentorChat streamName={stream.name} />
    </div>
  );
}
