import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import logo from '@/public/fortivex-logo-light.png';
import { APP_URL, SITE } from '@/lib/site';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Modules', href: '#modules' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#security' },
      { label: 'Sign In', href: APP_URL, external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#home' },
      { label: 'Contact', href: `mailto:${SITE.email}` },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help', href: `mailto:${SITE.email}?subject=FAMS%20Help` },
      { label: 'Support', href: `mailto:${SITE.email}?subject=FAMS%20Support` },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/[0.07] bg-base-soft">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line opacity-50"
        aria-hidden
      />
      <div className="shell relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Image
              src={logo}
              alt="Fortivex.AI"
              width={198}
              height={124}
              className="h-auto w-[178px]"
            />

            <div className="mt-7 leading-tight">
              <span className="block font-display text-[19px] font-bold tracking-[-0.02em] text-white">
                FAMS
              </span>
              <span className="block text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                {SITE.longName}
              </span>
            </div>

            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
              A modern HR and attendance platform designed to simplify tracking, visibility and
              reporting — from the first day of onboarding to the monthly payroll run.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-[14px] text-ink-soft transition-colors hover:text-white"
            >
              <Mail size={15} strokeWidth={1.8} className="text-accent-soft" />
              {SITE.email}
            </a>

            <div className="mt-8">
              <a href={APP_URL} rel="noopener" className="btn-primary btn-md">
                Sign In to FAMS
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label="Footer">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        rel={'external' in link && link.external ? 'noopener' : undefined}
                        className="inline-flex items-center gap-1.5 text-[14px] text-ink-soft transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                        {'external' in link && link.external ? (
                          <ArrowUpRight size={13} strokeWidth={2} className="text-ink-faint" />
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-[13px] text-ink-muted sm:flex-row">
          <p>© 2026 FAMS. All rights reserved.</p>
          <p className="text-ink-faint">Financial &amp; Attendance Management System</p>
        </div>
      </div>
    </footer>
  );
}
