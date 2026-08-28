import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import mark from '@/public/fortivex-mark.png';
import { APP_URL, SITE } from '@/lib/site';
import Footer from '@/components/Footer';

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-base/80 backdrop-blur-xl">
        <div className="shell flex h-[72px] items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src={mark} alt="Fortivex" height={38} width={48} className="h-[34px] w-auto sm:h-[38px]" />
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-bold tracking-[-0.02em] text-white">
                FAMS
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.14em] text-ink-muted sm:block">
                {SITE.longName}
              </span>
            </span>
          </a>
          <a href={APP_URL} rel="noopener" className="btn-primary btn-md">
            Sign In
          </a>
        </div>
      </header>

      <main id="main" className="relative pb-24 pt-[136px]">
        <div className="shell max-w-3xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[13.5px] text-ink-muted transition-colors hover:text-white"
          >
            <ArrowLeft size={15} strokeWidth={2} />
            Back to home
          </a>
          <h1 className="h2 mt-6 text-gradient">{title}</h1>
          <p className="mt-3 text-[13.5px] text-ink-muted">Last updated: {updated}</p>
          <div className="hairline my-10" />
          <div className="space-y-8 text-[15px] leading-[1.75] text-ink-soft [&_h2]:font-display [&_h2]:text-[1.25rem] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-white [&_li]:mt-2 [&_p]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
