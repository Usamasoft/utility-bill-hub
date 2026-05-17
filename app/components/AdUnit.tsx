'use client';
import { useEffect } from 'react';

interface AdUnitProps { slot: string; format?: 'auto' | 'horizontal' | 'rectangle'; className?: string; }
declare global { interface Window { adsbygoogle: unknown[] } }

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const isProd = process.env.NODE_ENV === 'production';
  useEffect(() => {
    if (isProd && typeof window !== 'undefined') {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
    }
  }, [isProd]);
  if (!isProd) {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-sm font-medium ${format === 'rectangle' ? 'h-64' : 'h-24'} ${className}`}>
        📢 Ad Unit — Slot {slot}
      </div>
    );
  }
  return (
    <div className={className}>
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot={slot} data-ad-format={format} data-full-width-responsive="true" />
    </div>
  );
}
