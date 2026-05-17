import Link from 'next/link';

interface Crumb { label: string; href?: string; }
export default function BreadcrumbNav({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://utilitybillhub.pk${c.href}` } : {}),
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="bg-gray-50 border-b border-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500 list-none pl-0 mb-0">
            <li><Link href="/" className="hover:text-blue-700 no-underline">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                <span className="text-gray-300">/</span>
                {c.href && i < crumbs.length - 1
                  ? <Link href={c.href} className="hover:text-blue-700 no-underline">{c.label}</Link>
                  : <span className="text-gray-800 font-medium">{c.label}</span>}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
