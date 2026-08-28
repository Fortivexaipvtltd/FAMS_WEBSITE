import { ArrowRight, Check } from 'lucide-react';
import { APP_URL } from '@/lib/site';
import Ambient from '@/components/ui/Ambient';
import Reveal from '@/components/ui/Reveal';
import Stage from '@/components/ui/Stage';
import DashboardUI from '@/components/DashboardUI';

const TRUST = ['Secure authentication', 'Role-based access', 'Centralized records'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-[136px] sm:pt-[160px] lg:pb-28">
      <Ambient variant="duo" />

      {/* Structural grid, faded out towards the edges */}
      <div
        className="grid-field pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          maskImage: 'radial-gradient(ellipse 78% 58% at 50% 32%, #000 30%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 78% 58% at 50% 32%, #000 30%, transparent 78%)',
        }}
        aria-hidden
      />

      <div className="shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-soft" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Financial &amp; Attendance Management System
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="h1 mt-7 lg:text-[4rem]">
              <span className="text-gradient">Streamline Your Workforce, Attendance &amp; </span>
              <span className="text-accent-gradient">HR Operations in One Place.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="lede mx-auto mt-7 max-w-2xl">
              Track employee attendance, manage leaves, run payroll, and streamline onboarding
              effortlessly — from a single platform your whole organization can rely on.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a href={APP_URL} rel="noopener" className="btn-primary btn-lg w-full sm:w-auto">
                Get Started
                <ArrowRight size={17} strokeWidth={2} />
              </a>
              <a href="#features" className="btn-ghost btn-lg w-full sm:w-auto">
                Explore FAMS
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {TRUST.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-ink-muted">
                  <Check size={14} strokeWidth={2.4} className="text-accent-soft" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Application preview */}
        <Reveal delay={0.4} y={44} className="mt-16 sm:mt-20">
          <div className="relative">
            {/* Glow bed behind the panel */}
            <div
              className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 blur-3xl"
              style={{
                background:
                  'radial-gradient(60% 60% at 50% 40%, rgba(79,124,255,0.22), transparent 70%)',
              }}
              aria-hidden
            />
            <div className="relative animate-float-slow [transform:perspective(2200px)_rotateX(4deg)] lg:[transform:perspective(2200px)_rotateX(7deg)]">
              <div className="rounded-[20px] border border-white/[0.09] bg-gradient-to-b from-white/[0.08] to-white/[0.015] p-1.5 shadow-panel backdrop-blur-xl sm:p-2">
                <Stage width={1160} height={700} className="overflow-hidden rounded-[16px]">
                  <DashboardUI />
                </Stage>
              </div>
              {/* Light sweep across the glass */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]" aria-hidden>
                <div className="absolute -inset-y-8 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Blend into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base"
        aria-hidden
      />
    </section>
  );
}
