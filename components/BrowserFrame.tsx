import type { ReactNode } from 'react';

/** Neutral browser chrome used to frame the product mock. */
export default function BrowserFrame({
  url = 'fams.empowersacademy.com/dashboard',
  children,
}: {
  url?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/[0.09] bg-[#0A0E1B] shadow-panel">
      <div className="flex h-11 items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4">
        <div className="flex gap-2" aria-hidden>
          <span className="h-[10px] w-[10px] rounded-full bg-white/[0.14]" />
          <span className="h-[10px] w-[10px] rounded-full bg-white/[0.10]" />
          <span className="h-[10px] w-[10px] rounded-full bg-white/[0.07]" />
        </div>
        <div className="mx-auto flex h-[26px] w-[340px] items-center justify-center gap-2 rounded-md border border-white/[0.06] bg-black/25 text-[11px] text-ink-muted">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="4" y="10" width="16" height="11" rx="2.5" stroke="#6E7793" strokeWidth="2" />
            <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="#6E7793" strokeWidth="2" />
          </svg>
          {url}
        </div>
        <div className="w-[46px]" aria-hidden />
      </div>
      {children}
    </div>
  );
}
