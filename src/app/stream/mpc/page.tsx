export const dynamic = 'force-dynamic';

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Code, Cpu, Rocket, ChevronRight } from "lucide-react";
import SaveStreamButton from "@/components/SaveStreamButton";
import StreamRoadmap from "@/components/StreamRoadmap";
import DeepDiveDetails from "@/components/DeepDiveDetails";
import MentorChat from "@/components/MentorChat";
import { STREAM_INTEL } from "@/data/stream-details";
import { ROADMAP_DATA } from "@/data/roadmap-data";

const STATS = [
  { label: 'Avg IIT Package', value: '₹25 LPA', sub: 'Median CTC across IITs' },
  { label: 'JEE Applicants', value: '11L+', sub: 'Per year nationally' },
  { label: 'ISRO Scientists', value: '17,000+', sub: 'Active MPC graduates' },
  { label: 'Tech Job Growth', value: '32% YoY', sub: 'India tech hiring 2024' },
];

export default async function MPCPage() {
  const stream = await prisma.stream.findUnique({ where: { slug: 'mpc' } });
  if (!stream) notFound();

  const intel = STREAM_INTEL['mpc'];
  const roadmap = ROADMAP_DATA['mpc'];
  const accent = '#6366f1';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <Image src="/stream_mpc.jpg" alt="MPC Engineering Career" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,40,0.4) 0%, rgba(10,10,40,0.1) 55%, var(--background) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(99,102,241,0.3)', backdropFilter: 'blur(12px)', border: '1px solid rgba(99,102,241,0.4)', borderRadius: '50px', color: 'white', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Code size={13} /> ENGINEERING MISSION CONTROL
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '14px' }}>
            Mathematics, Physics
            <br /><span style={{ color: accent }}>& Chemistry (MPC)</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, maxWidth: '700px', lineHeight: 1.5 }}>
            The launchpad for engineers, data scientists, aerospace pioneers and technology leaders.
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

      {/* STATS BAR — unique to MPC */}
      <div style={{ background: accent, padding: '0' }}>
        <div className="container" style={{ maxWidth: '1440px', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '18px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'rgba(255,255,255,0.9)', marginBottom: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="container" style={{ padding: '35px 20px 60px', maxWidth: '1440px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: '30px' }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'var(--card-bg)', borderRadius: '18px', border: '1px solid var(--card-border)', borderLeft: `4px solid ${accent}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--foreground)' }}>Engineering Roadmap</h3>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, background: `${accent}15`, padding: '3px 10px', borderRadius: '6px' }}>INTERACTIVE</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5, marginBottom: '10px' }}>
              From JEE preparation to FAANG/ISRO/IIM — track your full technical career journey.
            </p>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[['#6366f1','TECH'],['#ef4444','DEFENSE'],['#a855f7','RESEARCH']].map(([c,l]) => (
                <div key={l} style={{ fontSize: '0.6rem', fontWeight: 900, color: c, background: `${c}15`, padding: '3px 8px', borderRadius: '4px' }}>{l}</div>
              ))}
            </div>
          </div>
          <StreamRoadmap nodes={roadmap.nodes} accentColor={accent} />
        </aside>
        <main><DeepDiveDetails data={intel} accentColor={accent} /></main>
      </div>

      <MentorChat streamName={stream.name} />
    </div>
  );
}
