import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌐</span>
            <div>
              <div className="text-base font-extrabold text-white">UtilityBillHub</div>
              <div className="text-xs text-gray-400">Global Knowledge Platform</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">Your trusted source for utility bill information, payment guides, and troubleshooting help across Pakistan and worldwide.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Pakistan Guides</h4>
          <ul className="space-y-2 list-none pl-0">
            {[['SNGPL Bill Check Online', '/pakistan/sngpl-bill-check-online'],
              ['How to Pay SNGPL Bill', '/pakistan/how-to-pay-sngpl-bill'],
              ['Download Duplicate Bill', '/pakistan/sngpl-duplicate-bill'],
              ['Pakistan Overview', '/pakistan']].map(([l,h]) => (
              <li key={h}><Link href={h} className="text-sm text-gray-400 hover:text-teal-400 no-underline transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Global Guides</h4>
          <ul className="space-y-2 list-none pl-0">
            {[['How to Check Utility Bills', '/global/how-to-check-utility-bills'],
              ['How to Pay Utility Bills', '/global/how-to-pay-utility-bills'],
              ['Global Hub', '/global']].map(([l,h]) => (
              <li key={h}><Link href={h} className="text-sm text-gray-400 hover:text-teal-400 no-underline transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Official Resources</h4>
          <ul className="space-y-2 list-none pl-0">
            {[['SNGPL Official Site', 'https://www.sngpl.com.pk'],
              ['SNGPL Bill Checker', 'https://billchecker.sngpl.com.pk'],
              ['SNGPL Consumer Portal', 'https://selfservice.sngpl.com.pk']].map(([l,h]) => (
              <li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-teal-400 no-underline transition-colors">{l} ↗</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} UtilityBillHub.pk — Informational purposes only.</span>
          <span>Not affiliated with SNGPL or any government body.</span>
        </div>
      </div>
    </footer>
  );
}
