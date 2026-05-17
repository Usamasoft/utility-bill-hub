import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbNav from '../components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Global Utility Bill Guides — Check & Pay Bills Worldwide',
  description: 'Universal guides for checking and paying utility bills worldwide. Electricity, gas, water, and internet bills across different countries.',
  alternates: { canonical: 'https://utilitybillhub.pk/global' },
};

const guides = [
  { icon: '🌍', title: 'How to Check Utility Bills', desc: 'Universal guide for checking electricity, gas, water, and internet bills online — applicable worldwide.', href: '/global/how-to-check-utility-bills', time: '10 min read' },
  { icon: '💸', title: 'How to Pay Utility Bills', desc: 'Complete global guide to paying utility bills using online banking, mobile wallets, direct debit, and more.', href: '/global/how-to-pay-utility-bills', time: '12 min read' },
];

export default function GlobalPage() {
  return (
    <>
      <BreadcrumbNav crumbs={[{ label: 'Global Guides' }]} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-5xl block mb-4">🌐</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Global Utility Bill Guides</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Universal knowledge hub for utility bill management applicable to consumers worldwide — from basic bill reading to advanced payment strategies.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {guides.map(g => (
            <Link key={g.href} href={g.href} className="card hover:shadow-xl hover:-translate-y-1 transition-all no-underline group">
              <div className="text-5xl mb-4">{g.icon}</div>
              <div className="text-xs text-gray-400 font-medium mb-2">{g.time}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700">{g.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-4">{g.desc}</p>
              <span className="text-blue-700 font-semibold flex items-center gap-1">Read Full Guide →</span>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Looking for Pakistan-Specific Guides?</h2>
          <p className="text-gray-500 mb-6">We have detailed guides specifically for SNGPL gas bill consumers in Pakistan.</p>
          <Link href="/pakistan" className="btn-primary">🇵🇰 View Pakistan Guides →</Link>
        </div>
      </div>
    </>
  );
}
