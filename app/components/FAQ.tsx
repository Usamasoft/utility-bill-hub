'use client';
import { useState } from 'react';

interface FAQItem { q: string; a: string; }
export default function FAQ({ items, pageUrl }: { items: FAQItem[]; pageUrl: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span className="pr-4">{item.q}</span>
              <span className="flex-shrink-0 text-blue-600 text-xl font-light">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
