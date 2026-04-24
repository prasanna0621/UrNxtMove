export const dynamic = 'force-dynamic';

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Palette } from "lucide-react";
import SaveStreamButton from "@/components/SaveStreamButton";
import StreamRoadmap from "@/components/StreamRoadmap";
import DeepDiveDetails from "@/components/DeepDiveDetails";
import MentorChat from "@/components/MentorChat";
import { STREAM_INTEL } from "@/data/stream-details";
import { ROADMAP_DATA } from "@/data/roadmap-data";

const CREATIVE_TILES = [
  { label: 'UI/UX Design', icon: '🎨', salary: '₹5–25 LPA', tag: 'Digital' },
  { label: 'Fashion Design', icon: '👗', salary: '₹4–15 LPA', tag: 'NIFT/NID' },
  { label: 'Film Direction', icon: '🎬', salary: 'Project-based', tag: 'FTII' },
  { label: 'Hotel Mgmt', icon: '🍽️', salary: '₹3–25 LPA', tag: 'NCHMCT' },
  { label: 'Sports Career', icon: '🏅', salary: 'Variable', tag: 'SAI/National' },
  { label: 'Entrepreneurship', icon: '🚀', salary: 'Unlimited', tag: 'Startup India' },
  { label: 'Content Creation', icon: '📸', salary: '₹3 LPA–∞', tag: 'Creator Economy' },
  { label: 'Animation/VFX', icon: '✨', salary: '₹5–20 LPA', tag: 'OTT Boom' },
];

export default async function VocationalPage() {
  const stream = await prisma.stream.findUnique({ where: { slug: 'vocational' } });
  if (!stream) notFound();

  const intel = STREAM_INTEL['vocational'];
  const roadmap = ROADMAP_DATA['vocational'];
  const accent = '#ec4899';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <Image src="/stream_vocational.jpg" alt="Vocational Career" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(40,0,40,0.4) 0%, rgba(40,0,40,0.1) 55%, var(--background) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(236,72,153,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(236,72,153,0.4)', borderRadius: '50px', color: '#fbcfe8', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Palette size={13} /> CREATIVE & VOCATIONAL CAREERS
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '14px' }}>
            Vocational &
            <br /><span style={{ color: '#f9a8d4' }}>Other Streams</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, maxWidth: '700px', lineHeight: 1.5 }}>
            Your passion is your career. Design, arts, sports, hospitality and the digital creator economy.
          </p>
          <div style={{ marginTop: '16px', padding: '8px 18px', background: 'rgba(236,72,153,0.2)', borderRadius: '10px', color: '#fbcfe8', fontSize: '0.75rem', fontWeight: 800 }}>
            No Fixed Path · Skill-Driven · Portfolio Over Degree · Global Opportunities
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

      {/* CREATIVE CAREER MOSAIC — unique to Vocational */}
      <div className="container" style={{ maxWidth: '1440px', padding: '30px 20px 0' }}>
        <div style={{ padding: '25px 30px', background: 'rgba(255,255,255,0.8)', borderRadius: '20px', border: '1px solid #fbcfe8', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 900, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }}>
            🎨 Your Creative Career Universe
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
            {CREATIVE_TILES.map((t, i) => {
              const colors = ['#ec4899','#a855f7','#6366f1','#3b82f6','#10b981','#f59e0b','#ef4444','#14b8a6'];
              const c = colors[i % colors.length];
              return (
                <div key={t.label} style={{ padding: '16px 10px', background: `${c}10`, borderRadius: '14px', border: `1px solid ${c}20`, textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{t.icon}</div>
                  <div style={{ fontWeight: 900, fontSize: '0.72rem', color: 'var(--foreground)', marginBottom: '4px', lineHeight: 1.2 }}>{t.label}</div>
                  <div style={{ fontSize: '0.58rem', fontWeight: 900, color: c, marginBottom: '2px' }}>{t.tag}</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 700 }}>{t.salary}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="container" style={{ padding: '25px 20px 60px', maxWidth: '1440px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: '30px' }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'rgba(255,255,255,0.9)', borderRadius: '18px', border: '1px solid #fbcfe8', borderLeft: `4px solid ${accent}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--foreground)' }}>Creative Roadmap</h3>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, background: '#fce7f3', padding: '3px 10px', borderRadius: '6px' }}>INTERACTIVE</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5 }}>
              Passion → Portfolio → Specialization → Freelance or Full-time Creative Career.
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
