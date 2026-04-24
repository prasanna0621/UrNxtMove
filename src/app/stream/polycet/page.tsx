import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cog } from "lucide-react";
import SaveStreamButton from "@/components/SaveStreamButton";
import StreamRoadmap from "@/components/StreamRoadmap";
import DeepDiveDetails from "@/components/DeepDiveDetails";
import MentorChat from "@/components/MentorChat";
import { STREAM_INTEL } from "@/data/stream-details";
import { ROADMAP_DATA } from "@/data/roadmap-data";

const DIPLOMA_BRANCHES = [
  { name: 'Civil Engg', icon: '🏗️', demand: 'Very High', color: '#0ea5e9', job: 'Govt PWD / Construction' },
  { name: 'Mechanical', icon: '⚙️', demand: 'High', color: '#6366f1', job: 'Auto / Aerospace Mfg' },
  { name: 'Electrical (EEE)', icon: '⚡', demand: 'Very High', color: '#f59e0b', job: 'Power Utilities / PSU' },
  { name: 'Computer Sci', icon: '💻', demand: 'Highest', color: '#10b981', job: 'IT / Software Entry' },
  { name: 'Electronics (ECE)', icon: '📡', demand: 'High', color: '#8b5cf6', job: 'Telecom / Embedded Sys' },
  { name: 'Automobile', icon: '🚗', demand: 'Growing', color: '#ef4444', job: 'EV / OEM Industry' },
];

export default async function PolycetPage() {
  const stream = await prisma.stream.findUnique({ where: { slug: 'polycet' } });
  if (!stream) notFound();

  const intel = STREAM_INTEL['polycet'];
  const roadmap = ROADMAP_DATA['polycet'];
  const accent = '#0ea5e9';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <Image src="/stream_polycet.jpg" alt="Technical Career" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,40,40,0.4) 0%, rgba(0,40,40,0.1) 55%, var(--background) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(14,165,233,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(14,165,233,0.4)', borderRadius: '50px', color: '#e0f2fe', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Cog size={13} /> DIPLOMA ENGINEERING INTELLIGENCE
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '14px' }}>
            Polytechnic Diploma
            <br /><span style={{ color: '#7dd3fc' }}>(POLYCET)</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, maxWidth: '700px', lineHeight: 1.5 }}>
            Fast-track from 10th grade to real engineering — 3 years to industry-ready expertise.
          </p>
          <div style={{ marginTop: '16px', padding: '8px 18px', background: 'rgba(14,165,233,0.2)', borderRadius: '10px', color: '#bae6fd', fontSize: '0.75rem', fontWeight: 800 }}>
            10th Pass Entry · 3-Year Diploma · ECET Lateral to B.Tech
          </div>
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

      {/* DIPLOMA BRANCH SELECTOR — unique to Polycet */}
      <div className="container" style={{ maxWidth: '1440px', padding: '30px 20px 0' }}>
        <div style={{ padding: '25px 30px', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid #bae6fd' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 900, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }}>
            ⚙️ Choose Your Engineering Branch
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {DIPLOMA_BRANCHES.map((b) => (
              <div key={b.name} style={{ padding: '16px 12px', background: `${b.color}08`, borderRadius: '14px', border: `1px solid ${b.color}25`, borderTop: `3px solid ${b.color}`, textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{b.icon}</div>
                <div style={{ fontWeight: 900, fontSize: '0.8rem', color: 'var(--foreground)', marginBottom: '4px' }}>{b.name}</div>
                <div style={{ fontSize: '0.6rem', fontWeight: 900, color: b.color, marginBottom: '4px' }}>{b.demand}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.3 }}>{b.job}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="container" style={{ padding: '25px 20px 60px', maxWidth: '1440px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: '30px' }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'var(--card-bg)', borderRadius: '18px', border: '1px solid #bae6fd', borderLeft: `4px solid ${accent}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--foreground)' }}>Diploma Roadmap</h3>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, background: '#e0f2fe', padding: '3px 10px', borderRadius: '6px' }}>INTERACTIVE</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5 }}>
              POLYCET → 3-Year Diploma → ECET → B.Tech Lateral → PSU Jobs or GATE.
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
