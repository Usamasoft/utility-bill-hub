import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://utilitybillhub.pk'),
  title: { default: 'Utility Bill Hub — Global Guide to Check & Pay Utility Bills', template: '%s | UtilityBillHub.pk' },
  description: 'Complete guides for checking and paying utility bills worldwide. SNGPL gas bill, electricity bills, payment methods, duplicate bills and troubleshooting.',
  keywords: ['utility bill', 'SNGPL bill check', 'gas bill Pakistan', 'pay utility bill online', 'duplicate bill download'],
  openGraph: {
    type: 'website', siteName: 'UtilityBillHub.pk',
    title: 'Utility Bill Hub — Global Knowledge Platform',
    description: 'Step-by-step guides for utility bill checking, payment, and troubleshooting across Pakistan and worldwide.',
    url: 'https://utilitybillhub.pk',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://utilitybillhub.pk' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
