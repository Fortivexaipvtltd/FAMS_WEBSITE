import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SITE } from '@/lib/site';
import './globals.css';

const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
  fallback: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

const display = localFont({
  src: './fonts/plus-jakarta-sans-latin-wght-normal.woff2',
  variable: '--font-display',
  display: 'swap',
  weight: '200 800',
  style: 'normal',
  fallback: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'FAMS — Financial & Attendance Management System',
    template: '%s | FAMS',
  },
  description: SITE.description,
  applicationName: 'FAMS',
  keywords: [
    'FAMS',
    'Financial & Attendance Management System',
    'HR management system',
    'attendance management system',
    'employee attendance management',
    'student attendance management',
    'leave and shift management',
    'payroll management software',
    'recruitment and onboarding software',
    'attendance tracking software',
    'attendance dashboard',
    'attendance reporting system',
  ],
  authors: [{ name: 'FAMS' }],
  creator: 'FAMS',
  publisher: 'FAMS',
  alternates: { canonical: '/' },
  category: 'technology',
  openGraph: {
    type: 'website',
    siteName: 'FAMS — Financial & Attendance Management System',
    title: 'FAMS — Financial & Attendance Management System',
    description: SITE.description,
    url: SITE.url,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAMS — Financial & Attendance Management System',
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '256x256' }],
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#050816',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FAMS — Financial & Attendance Management System',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: SITE.url,
  description: SITE.description,
  offers: { '@type': 'Offer', category: 'SaaS' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen bg-base text-ink">
        <a
          href="#main"
          className="btn-ghost btn btn-md sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
