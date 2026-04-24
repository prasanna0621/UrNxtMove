export const dynamic = 'force-dynamic';

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Wrench } from "lucide-react";
import SaveStreamButton from "@/components/SaveStreamButton";
import StreamRoadmap from "@/components/StreamRoadmap";
import DeepDiveDetails from "@/components/DeepDiveDetails";
import MentorChat from "@/components/MentorChat";
import { STREAM_INTEL } from "@/data/stream-details";
import { ROADMAP_DATA } from "@/data/roadmap-data";

const TRADES = [
  { name: 'Electrician', dur: '2 Yrs', icon: '⚡', demand: 95, color: '#f59e0b' },
  { name: 'Fitter', dur: '2 Yrs', icon: '🔧', demand: 88, color: '#6366f1' },
  { name: 'Welder', dur: '2 Yrs', icon: '🔥', demand: 90, color: '#ef4444' },
  { name: 'Turner/CNC', dur: '2 Yrs', icon: '⚙️', demand: 85, color: '#10b981' },
  { name: 'COPA (Computer)', dur: '1 Yr', icon: '💻', demand: 80, color: '#3b82f6' },
  { name: 'RAAC (AC Tech)', dur: '2 Yrs', icon: '❄️', demand: 92, color: '#14b8a6' },
];

export default async function ITIPage() {
  const stream = await prisma.stream.findUnique({ where: { slug: 'iti' } });
  if (!stream) notFound();

  const intel = STREAM_INTEL['iti'];
  const roadmap = ROADMAP_DATA['iti'];
  const accent = '#f97316';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <Image src="/stream_iti.jpg" alt="Vocational Career" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,40,0.4) 0%, rgba(0,0,40,0.1) 55%, var(--background) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(249,115,22,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: '50px', color: '#fed7aa', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Wrench size={13} /> SKILLED TRADES INTELLIGENCE
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '14px' }}>
            Industrial Training Institute
            <br /><span style={{ color: '#fdba74' }}>(ITI)</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, maxWidth: '700px', lineHeight: 1.5 }}>
            Master a skilled trade and build a recession-proof career with global mobility.
          </p>
          <div style={{ marginTop: '16px', padding: '8px 18px', background: 'rgba(249,115,22,0.2)', borderRadius: '10px', color: '#fdba74', fontSize: '0.75rem', fontWeight: 800 }}>
            8th/10th Entry · 1-2 Year Trade · NCVT Certified · Gulf & Overseas Ready
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

      {/* TRADE DEMAND BARS — unique to ITI */}
      <div className="container" style={{ maxWidth: '1440px', padding: '30px 20px 0' }}>
        <div style={{ padding: '25px 30px', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid #fed7aa' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 900, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }}>
            🏭 Trade Employment Demand Meter (2025)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {TRADES.map((t) => (
              <div key={t.name} style={{ padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.1rem' }}>{t.icon}</span>
                    <div>
                      <div style={{ fontWeight: 900, fontSize: '0.9rem', color: 'var(--foreground)' }}>{t.name}</div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700 }}>{t.dur}</div>
                    </div>
                  </div>
                  <div style={{ fontWeight: 900, fontSize: '0.9rem', color: t.color }}>{t.demand}%</div>
                </div>
                <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${t.demand}%`, background: t.color, borderRadius: '4px', transition: 'width 1s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="container" style={{ padding: '25px 20px 60px', maxWidth: '1440px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: '30px' }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'var(--card-bg)', borderRadius: '18px', border: '1px solid #fed7aa', borderLeft: `4px solid ${accent}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--foreground)' }}>Trade Career Path</h3>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, background: '#ffedd5', padding: '3px 10px', borderRadius: '6px' }}>INTERACTIVE</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5 }}>
              ITI Trade → NCVT Certification → Apprenticeship → Master Tradesman or Overseas Jobs.
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
