'use client';
import Link from 'next/link';
import { useState } from 'react';

const nav = [
  { label: 'Pakistan', href: '/pakistan', children: [
    { label: 'SNGPL Bill Check', href: '/pakistan/sngpl-bill-check-online' },
    { label: 'Pay SNGPL Bill', href: '/pakistan/how-to-pay-sngpl-bill' },
    { label: 'Duplicate Bill', href: '/pakistan/sngpl-duplicate-bill' },
  ]},
  { label: 'Global Guides', href: '/global', children: [
    { label: 'Check Utility Bills', href: '/global/how-to-check-utility-bills' },
    { label: 'Pay Utility Bills', href: '/global/how-to-pay-utility-bills' },
  ]},
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🌐</span>
          <div>
            <div className="text-base font-extrabold text-blue-800 leading-none">UtilityBillHub</div>
            <div className="text-xs text-gray-500 leading-none">Global Knowledge Platform</div>
          </div>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(item => (
            <div key={item.href} className="relative group">
              <button
                onMouseEnter={() => setDropdown(item.href)}
                onMouseLeave={() => setDropdown(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-800 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1"
              >
                {item.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdown === item.href && (
                <div
                  onMouseEnter={() => setDropdown(item.href)}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-xl w-52 py-2 z-50"
                >
                  {item.children.map(c => (
                    <Link key={c.href} href={c.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 no-underline transition-colors">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/pakistan/sngpl-bill-check-online" className="ml-2 btn-primary text-sm px-4 py-2">Check Bill →</Link>
        </nav>
        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {nav.map(item => (
            <div key={item.href} className="mt-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{item.label}</div>
              {item.children.map(c => (
                <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-700 hover:text-blue-800 no-underline border-b border-gray-50">
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
