import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utility Bill Hub — Check & Pay Utility Bills Online',
  description: 'Your complete guide to checking, paying, and managing utility bills in Pakistan and around the world. SNGPL gas bill, electricity, water, and more.',
  alternates: { canonical: 'https://utilitybillhub.pk' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UtilityBillHub.pk',
  url: 'https://utilitybillhub.pk',
  potentialAction: { '@type': 'SearchAction', target: 'https://utilitybillhub.pk/pakistan/sngpl-bill-check-online', 'query-input': 'required name=search_term_string' },
};

const pakistanGuides = [
  { icon: '🔍', title: 'SNGPL Bill Check Online', desc: 'Step-by-step guide to check your gas bill online using consumer number. Desktop and mobile methods.', href: '/pakistan/sngpl-bill-check-online', badge: 'Most Popular' },
  { icon: '💳', title: 'How to Pay SNGPL Bill', desc: 'Complete payment guide: Easypaisa, JazzCash, online banking, ATM, and bank branch payment methods.', href: '/pakistan/how-to-pay-sngpl-bill', badge: '' },
  { icon: '📄', title: 'Download Duplicate Bill', desc: 'Lost your gas bill? Download a duplicate copy instantly via the SNGPL portal, app, SMS, or WhatsApp.', href: '/pakistan/sngpl-duplicate-bill', badge: '' },
];

const globalGuides = [
  { icon: '🌍', title: 'How to Check Utility Bills', desc: 'Universal guide for checking electricity, gas, water and internet bills online globally.', href: '/global/how-to-check-utility-bills', badge: '' },
  { icon: '🌐', title: 'How to Pay Utility Bills', desc: 'Complete guide to paying utility bills worldwide using online banking, mobile wallets, and more.', href: '/global/how-to-pay-utility-bills', badge: '' },
];

const stats = [
  { value: '10M+', label: 'SNGPL Consumers' },
  { value: '5+', label: 'Payment Methods' },
  { value: '100%', label: 'Free Guides' },
  { value: '24/7', label: 'Information Available' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=60')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            🌐 Global Utility Bill Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Check &amp; Pay<br />
            <span className="text-teal-300">Utility Bills</span> Easily
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Complete step-by-step guides for SNGPL gas bills, electricity, water, and utility payments across Pakistan and worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pakistan/sngpl-bill-check-online" className="btn-primary bg-teal-500 hover:bg-teal-400 text-white">🔍 Check SNGPL Bill</Link>
            <Link href="/pakistan/how-to-pay-sngpl-bill" className="btn-secondary border-white/30 text-white hover:bg-white/10">💳 Pay Bill Online</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-800 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.value}>
              <div className="text-3xl font-extrabold text-teal-300">{s.value}</div>
              <div className="text-sm text-blue-200 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pakistan Guides */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-3">🇵🇰 Pakistan</div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Pakistan Utility Guides</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Comprehensive guides for SNGPL gas bills, tailored for Pakistani consumers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pakistanGuides.map(g => (
            <Link key={g.href} href={g.href} className="card group hover:shadow-lg hover:-translate-y-1 transition-all no-underline relative">
              {g.badge && <span className="absolute top-4 right-4 text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full font-semibold">{g.badge}</span>}
              <div className="text-4xl mb-4">{g.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{g.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{g.desc}</p>
              <span className="text-blue-700 text-sm font-semibold group-hover:gap-2 transition-all flex items-center gap-1">Read Guide →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Global Guides */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-3">🌍 Worldwide</div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Global Utility Guides</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Universal guides applicable to utility bill management worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {globalGuides.map(g => (
              <Link key={g.href} href={g.href} className="card group hover:shadow-lg hover:-translate-y-1 transition-all no-underline">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{g.desc}</p>
                <span className="text-blue-700 text-sm font-semibold flex items-center gap-1">Read Guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-teal-700 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Need to Check Your SNGPL Bill?</h2>
          <p className="text-blue-100 mb-8 text-lg">Follow our step-by-step guide and check your bill in under 2 minutes.</p>
          <Link href="/pakistan/sngpl-bill-check-online" className="btn-primary bg-white text-blue-800 hover:bg-blue-50">Start Here →</Link>
        </div>
      </section>
    </>
  );
}
