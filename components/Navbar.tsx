'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import mark from '@/public/fortivex-mark.png';
import { APP_URL, NAV_LINKS } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the navigation item for the section currently in view.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
        scrolled
          ? 'border-b border-white/[0.07] bg-base/72 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="shell flex h-[72px] items-center justify-between gap-6" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-3" aria-label="FAMS — home">
          <Image
            src={mark}
            alt="Fortivex"
            height={38}
            width={48}
            priority
            className="h-[34px] w-auto sm:h-[38px]"
          />
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-bold tracking-[-0.02em] text-white">
              FAMS
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.14em] text-ink-muted sm:block">
              Financial &amp; Attendance Management System
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-[13.5px] transition-colors duration-300',
                  active === link.href ? 'text-white' : 'text-ink-soft hover:text-white',
                )}
              >
                {link.label}
                {active === link.href ? (
                  <span className="absolute inset-x-3 -bottom-[3px] h-px bg-accent-line" aria-hidden />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Both entry points go to the application root, which decides whether to
              show the login screen or the dashboard based on the visitor's session. */}
          <a href={APP_URL} className="btn-ghost btn-md hidden md:inline-flex" rel="noopener">
            Log In
          </a>
          <a href={APP_URL} className="btn-primary btn-md hidden sm:inline-flex" rel="noopener">
            Sign In
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03] text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-white/[0.06] bg-base/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-premium lg:hidden',
          open ? 'max-h-[440px] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <ul className="shell flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/[0.04] py-3.5 text-[15px] text-ink-soft transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex flex-col gap-3 pt-4">
            <a
              href={APP_URL}
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn-primary btn-lg w-full"
            >
              Sign In to FAMS
            </a>
            <a
              href={APP_URL}
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn-ghost btn-lg w-full"
            >
              Log In
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
