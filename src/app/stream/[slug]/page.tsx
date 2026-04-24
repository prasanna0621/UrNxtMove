export const dynamic = 'force-dynamic';

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";
import SaveStreamButton from "@/components/SaveStreamButton";
import StreamRoadmap from "@/components/StreamRoadmap";
import DeepDiveDetails from "@/components/DeepDiveDetails";
import MentorChat from "@/components/MentorChat";
import { STREAM_INTEL } from "@/data/stream-details";
import { ROADMAP_DATA } from "@/data/roadmap-data";

export default async function StreamPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const stream = await prisma.stream.findUnique({ where: { slug } });
  if (!stream) notFound();

  const intel = STREAM_INTEL[slug] || STREAM_INTEL['vocational'];
  const roadmap = ROADMAP_DATA[slug] || ROADMAP_DATA['vocational'];
  const accentColor = roadmap.accentColor;

  const HERO_IMAGES: Record<string, string> = {
    bipc: '/images/streams/bipc-hero.png',
    mpc: '/images/streams/mpc-hero.png',
    cec: '/images/streams/cec-hero.png',
    hec: '/images/streams/hec-hero.png',
    polycet: '/images/streams/polycet-hero.png',
    iti: '/images/streams/polycet-hero.png', // fallback to polycet until generated
    vocational: '/images/streams/other-hero.png'
  };

  const STREAM_BADGES: Record<string, string[]> = {
    bipc:     ['MEDICAL', 'PHARMA', 'AGRI'],
    mpc:      ['ENGINEERING', 'RESEARCH', 'DEFENSE'],
    cec:      ['FINANCE', 'LAW', 'MANAGEMENT'],
    hec:      ['CIVIL SERVICES', 'LAW', 'MEDIA'],
    polycet:  ['DIPLOMA', 'LATERAL B.TECH', 'INDUSTRY'],
    iti:      ['TRADES', 'APPRENTICESHIP', 'SKILL'],
    vocational: ['DESIGN', 'SPORTS', 'CREATIVITY']
  };

  const badges = STREAM_BADGES[slug] || ['CAREER', 'PATHWAYS', 'GUIDANCE'];
  const USER_ID = "user-1";

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden' }}>
        {HERO_IMAGES[slug] ? (
          <Image src={HERO_IMAGES[slug]} alt={`${stream.name} Career Path`} fill style={{ objectFit: 'cover' }} priority />
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${accentColor} 0%, #1e293b 100%)` }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 55%, rgba(248,250,252,1) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: 'white', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.18em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={13} /> CAREER INTELLIGENCE STREAM
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', fontWeight: 900, color: 'white', lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '14px', textShadow: '0 8px 25px rgba(0,0,0,0.3)' }}>
            {stream.name.split('(')[0].trim()}
            {stream.name.includes('(') && (
              <span style={{ color: accentColor, marginLeft: '10px' }}>({stream.name.split('(')[1]?.replace(')', '').trim()})</span>
            )}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.82)', fontWeight: 600, maxWidth: '750px', lineHeight: 1.5 }}>
            {stream.description}
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {badges.map(b => (
              <div key={b} style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '20px', color: 'white', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em' }}>{b}</div>
            ))}
          </div>
        </div>

        {/* Nav overlays */}
        <div style={{ position: 'absolute', top: '28px', left: '28px', zIndex: 20 }}>
          <Link href="/home" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', fontWeight: 800, background: 'rgba(0,0,0,0.3)', padding: '9px 16px', borderRadius: '50px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem' }}>
            <ArrowLeft size={15} /> BACK TO HUB
          </Link>
        </div>
        <div style={{ position: 'absolute', top: '28px', right: '28px', zIndex: 20 }}>
          <SaveStreamButton streamId={stream.id} userId={USER_ID} />
        </div>
      </div>

      {/* ── TWO-COLUMN INTELLIGENCE LAYOUT ── */}
      <div className="container" style={{ padding: '0 20px 60px 20px', maxWidth: '1440px', marginTop: '-30px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>

        {/* LEFT: sticky roadmap */}
        <aside style={{ position: 'sticky', top: '30px', zIndex: 5 }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'var(--card-bg)', border: `1px solid ${accentColor}25`, borderRadius: '18px', borderLeft: `4px solid ${accentColor}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--foreground)' }}>Career Flowchart</h3>
              <div style={{ padding: '3px 10px', background: `${accentColor}15`, borderRadius: '6px', fontSize: '0.6rem', fontWeight: 900, color: accentColor }}>INTERACTIVE</div>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5, marginBottom: '14px' }}>
              Visual journey from your starting point to peak career specialization in {roadmap.themeLabel}.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {badges.map(b => (
                <div key={b} style={{ fontSize: '0.6rem', fontWeight: 900, color: accentColor, background: `${accentColor}12`, padding: '3px 8px', borderRadius: '4px' }}>{b}</div>
              ))}
            </div>
          </div>
          <StreamRoadmap nodes={roadmap.nodes} accentColor={accentColor} />
        </aside>

        {/* RIGHT: deep-dive intelligence */}
        <main>
          <DeepDiveDetails data={intel} accentColor={accentColor} />
        </main>
      </div>

      {/* Context-aware Mentor Bot */}
      <MentorChat streamName={stream.name} />
    </div>
  );
}
