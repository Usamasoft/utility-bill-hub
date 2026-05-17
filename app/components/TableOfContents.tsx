'use client';
import { useState } from 'react';

interface TocItem { id: string; label: string; }
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(true);
  return (
    <nav className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between font-bold text-blue-900 text-base">
        <span>📋 Table of Contents</span>
        <span className="text-blue-600 text-lg">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <ol className="mt-4 space-y-1 list-none pl-0 mb-0">
          {items.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="flex items-center gap-2 text-sm text-blue-800 hover:text-blue-600 no-underline py-0.5 transition-colors">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
