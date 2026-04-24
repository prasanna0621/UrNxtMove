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

export default async function BiPCPage() {
  const stream = await prisma.stream.findUnique({ where: { slug: 'bipc' } });
  if (!stream) notFound();

  const intel = STREAM_INTEL['bipc'];
  const roadmap = ROADMAP_DATA['bipc'];
  const accent = '#3b82f6';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <Image src="/stream_bipc.jpg" alt="Medical Career" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,40,10,0.4) 0%, rgba(10,40,10,0.1) 55%, var(--background) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ padding: '6px 18px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: 'white', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.18em', marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={13} /> MEDICAL CAREER INTELLIGENCE
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '14px', textShadow: '0 8px 25px rgba(0,0,0,0.3)' }}>
            Biology, Physics, Chemistry
            <span style={{ color: accent, marginLeft: '12px' }}>(BiPC)</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, maxWidth: '700px', lineHeight: 1.5 }}>
            Your gateway to medical excellence, pharmaceutical mastery, and life science innovation.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '18px' }}>
            {['MEDICAL','PHARMA','AGRI-SCIENCE'].map(b => (
              <div key={b} style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', color: 'white', fontSize: '0.68rem', fontWeight: 900 }}>{b}</div>
            ))}
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

      {/* TWO-COLUMN LAYOUT */}
      <div className="container" style={{ padding: '0 20px 60px', maxWidth: '1440px', marginTop: '-30px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '35px', alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: '30px' }}>
          <div style={{ marginBottom: '18px', padding: '22px 25px', background: 'var(--card-bg)', borderRadius: '18px', border: '1px solid var(--card-border)', borderLeft: `4px solid ${accent}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--foreground)' }}>Career Flowchart</h3>
              <span style={{ fontSize: '0.6rem', fontWeight: 900, color: accent, background: `${accent}15`, padding: '3px 10px', borderRadius: '6px' }}>INTERACTIVE</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, lineHeight: 1.5, marginBottom: '10px' }}>
              Click any node to explore detailed steps, exam info and expert tips for your medical journey.
            </p>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[['#3b82f6','MEDICAL'],['#8b5cf6','PHARMA'],['#10b981','AGRI']].map(([c,l]) => (
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
