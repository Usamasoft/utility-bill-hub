import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbNav from '../components/BreadcrumbNav';
import SectionImage from '../components/SectionImage';

export const metadata: Metadata = {
  title: 'Pakistan Utility Bill Guides — SNGPL Gas Bill Hub',
  description: 'Complete Pakistan utility bill guides. Check SNGPL gas bill online, pay via Easypaisa/JazzCash, download duplicate bills, troubleshoot errors.',
  alternates: { canonical: 'https://utilitybillhub.pk/pakistan' },
};

const guides = [
  { icon: '🔍', title: 'SNGPL Bill Check Online', desc: 'Learn how to check your SNGPL gas bill using your consumer number — desktop, mobile, and app methods.', href: '/pakistan/sngpl-bill-check-online', time: '10 min read' },
  { icon: '💳', title: 'How to Pay SNGPL Bill', desc: 'Complete payment guide for Easypaisa, JazzCash, online banking, ATM, and bank branch payment.', href: '/pakistan/how-to-pay-sngpl-bill', time: '12 min read' },
  { icon: '📄', title: 'Download Duplicate Bill', desc: 'Get your duplicate SNGPL gas bill instantly via the official portal, app, WhatsApp, or SMS.', href: '/pakistan/sngpl-duplicate-bill', time: '8 min read' },
];

export default function PakistanPage() {
  return (
    <>
      <BreadcrumbNav crumbs={[{ label: 'Pakistan' }]} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-5xl block mb-4">🇵🇰</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Pakistan Utility Bill Guides</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Everything you need to know about SNGPL gas bills — checking, paying, downloading duplicates, and troubleshooting.</p>
        </div>
        <SectionImage src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80" alt="Gas pipeline infrastructure in Pakistan" caption="SNGPL serves over 10 million consumers across Punjab and KPK" priority />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {guides.map(g => (
            <Link key={g.href} href={g.href} className="card hover:shadow-xl hover:-translate-y-1 transition-all no-underline group">
              <div className="text-4xl mb-4">{g.icon}</div>
              <div className="text-xs text-gray-400 font-medium mb-2">{g.time}</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700">{g.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{g.desc}</p>
              <span className="text-blue-700 text-sm font-semibold flex items-center gap-1">Read Guide →</span>
            </Link>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">About SNGPL</h2>
          <p className="text-blue-800 max-w-3xl mx-auto leading-relaxed">Sui Northern Gas Pipelines Limited (SNGPL) is Pakistan&apos;s largest integrated gas company, serving over 10 million consumers across Punjab and Khyber Pakhtunkhwa. SNGPL provides natural gas for residential, commercial, and industrial use, and offers multiple digital channels for bill checking and payment.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">SNGPL Official ↗</a>
            <a href="https://billchecker.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">Check Bill Now →</a>
          </div>
        </div>
      </div>
    </>
  );
}
