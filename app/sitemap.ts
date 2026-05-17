import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://utilitybillhub.pk';
  const now = new Date();
  return [
    { url: base,                                                lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/pakistan`,                                  lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/pakistan/sngpl-bill-check-online`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/pakistan/how-to-pay-sngpl-bill`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/pakistan/sngpl-duplicate-bill`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/global`,                                    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/global/how-to-check-utility-bills`,         lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/global/how-to-pay-utility-bills`,           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];
}
