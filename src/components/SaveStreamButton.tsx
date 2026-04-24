'use client';

import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck, Loader2 } from 'lucide-react';
import { toggleSaveStream, getSavedStreams } from '../app/actions/profile';

interface SaveStreamButtonProps {
  streamId: string;
  userId: string;
}

export default function SaveStreamButton({ streamId, userId }: SaveStreamButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    async function checkSaved() {
      const saved = await getSavedStreams(userId);
      setIsSaved(saved.some(s => s.id === streamId));
      setIsLoading(false);
    }
    checkSaved();
  }, [streamId, userId]);

  const handleToggle = async () => {
    setIsToggling(true);
    const result = await toggleSaveStream(userId, streamId);
    if (result.success) {
      setIsSaved(result.saved || false);
    }
    setIsToggling(false);
  };

  if (isLoading) return <div style={{ height: '50px', width: '150px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', animation: 'pulse 2s infinite' }}></div>;

  return (
    <button 
      onClick={handleToggle}
      disabled={isToggling}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 24px',
        borderRadius: '12px',
        border: '1px solid',
        borderColor: isSaved ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
        background: isSaved ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255,255,255,0.02)',
        color: isSaved ? 'var(--primary)' : 'var(--foreground)',
        fontWeight: '800',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isSaved ? '0 0 20px rgba(59, 130, 246, 0.1)' : 'none'
      }}
      className="save-btn"
    >
      {isToggling ? (
        <Loader2 className="animate-spin" size={18} />
      ) : isSaved ? (
        <>
          <BookmarkCheck size={18} fill="currentColor" /> SAVED TO PROFILE
        </>
      ) : (
        <>
          <Bookmark size={18} /> SAVE THIS PATH
        </>
      )}
    </button>
  );
}
