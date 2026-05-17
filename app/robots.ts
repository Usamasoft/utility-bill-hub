import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] }],
    sitemap: 'https://utilitybillhub.pk/sitemap.xml',
    host: 'https://utilitybillhub.pk',
  };
}
