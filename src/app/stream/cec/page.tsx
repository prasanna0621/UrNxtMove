import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TrendingUp } from "lucide-react";
import SaveStreamButton from "@/components/SaveStreamButton";
import StreamRoadmap from "@/components/StreamRoadmap";
import DeepDiveDetails from "@/components/DeepDiveDetails";
import MentorChat from "@/components/MentorChat";
import { STREAM_INTEL } from "@/data/stream-details";
import { ROADMAP_DATA } from "@/data/roadmap-data";

const QUAL_LADDER = [
  { level: '1', title: 'CA Foundation', status: 'Entry', color: '#f59e0b', desc: '4-month prep. 2 attempts/year.' },
  { level: '2', title: 'CS Foundation', status: 'Entry', color: '#10b981', desc: 'ICSI standard. Corporate Law base.' },
  { level: '3', title: 'CA Intermediate', status: 'Mid', color: '#f59e0b', desc: '8 papers in 2 groups. Tough filter.' },
  { level: '4', title: 'CA Final + Articleship', status: 'Elite', color: '#dc2626', desc: 'The summit. 3-yr training + exam.' },
];

export default async function CECPage() {
  const stream = await prisma.stream.findUnique({ where: { slug: 'cec' } });
  if (!stream) notFound();

  const intel = STREAM_INTEL['cec'];
  const roadmap = ROADMAP_DATA['cec'];
  const accent = '#f59e0b';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <Image src="/stream_cec.jpg" alt="Finance Career" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(40,20,0,0.4) 0%, rgba(40,20,0,0.1) 55%, var(--background) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(245,158,11,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(245,158,11,0.4)', borderRadius: '50px', color: '#fef3c7', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={13} /> FINANCE & COMMERCE INTELLIGENCE
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '14px' }}>
            Commerce, Economics
            <br /><span style={{ color: accent }}>& Civics (CEC)</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, maxWidth: '700px', lineHeight: 1.5 }}>
            Command financial systems, corporate law, and the levers of global business.
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

      {/* CA QUALIFICATION LADDER — unique to CEC */}
      <div className="container" style={{ maxWidth: '1440px', padding: '30px 20px 0' }}>
        <div style={{ padding: '25px 30px', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid #fde68a', marginBottom: '0' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 900, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={16} /> Professional Qualification Ladder
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {QUAL_LADDER.map((item) => (
              <div key={item.level} style={{ padding: '16px', background: '#fffbeb', borderRadius: '14px', border: `1px solid ${item.color}30`, borderTop: `3px solid ${item.color}` }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 900, color: item.color, marginBottom: '6px', textTransform: 'uppercase' }}>LEVEL {item.level} · {item.status}</div>
                <div style={{ fontWeight: 900, fontSize: '0.95rem', color: 'var(--foreground)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="container" style={{ padding: '25px 20px 60px', maxWidth: '1440px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: '30px' }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'var(--card-bg)', borderRadius: '18px', border: '1px solid #fde68a', borderLeft: `4px solid ${accent}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--foreground)' }}>Finance Roadmap</h3>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, background: `${accent}20`, padding: '3px 10px', borderRadius: '6px' }}>INTERACTIVE</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5 }}>
              From CEC Intermediate to CA/IIM/NLU — track your full financial career journey.
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
