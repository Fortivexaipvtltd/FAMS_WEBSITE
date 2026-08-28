import { Check, Minus } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const TRADITIONAL = [
  'Paper-based processes',
  'Manual calculations',
  'Scattered records',
  'Time-consuming reports',
  'Limited visibility',
  'Payroll rebuilt from scratch each month',
];

const MODERN = [
  'Centralized platform',
  'Faster tracking',
  'Organized records',
  'Easy reporting',
  'Clear insights',
  'Modern digital workflow',
];

export default function WhyFams() {
  return (
    <section className="section relative">
      <div className="shell relative">
        <SectionHeading
          eyebrow="Why FAMS"
          title={
            <>
              From Manual Tracking to{' '}
              <span className="text-accent-gradient">Intelligent Management</span>
            </>
          }
          description="The difference is not only speed. It is whether the record can be trusted the moment payroll, an audit or a manager asks for it."
        />

        <div className="mt-16 grid items-start gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Traditional */}
          <Reveal>
            <div className="surface h-full p-7 opacity-80">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[17px] font-semibold tracking-[-0.015em] text-ink-soft">
                  Traditional HR &amp; Attendance
                </h3>
                <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                  Before
                </span>
              </div>
              <ul className="mt-7 space-y-4">
                {TRADITIONAL.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[14.5px] text-ink-muted">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02]">
                      <Minus size={13} strokeWidth={2.4} className="text-ink-faint" />
                    </span>
                    <span className="line-through decoration-white/15 decoration-1">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* FAMS */}
          <Reveal delay={0.1}>
            <div className="relative h-full">
              <div
                className="pointer-events-none absolute -inset-4 blur-3xl"
                style={{
                  background:
                    'radial-gradient(55% 55% at 50% 40%, rgba(79,124,255,0.20), transparent 72%)',
                }}
                aria-hidden
              />
              <div className="surface-raised card-sheen relative h-full overflow-hidden p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-white">
                    FAMS
                  </h3>
                  <span className="rounded-full border border-accent/30 bg-accent/[0.12] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-accent-soft">
                    With FAMS
                  </span>
                </div>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {MODERN.map((m) => (
                    <li key={m} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/[0.16]">
                        <Check size={13} strokeWidth={2.8} className="text-accent-soft" />
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="hairline my-8" />
                <p className="text-[14.5px] leading-relaxed text-ink-soft">
                  Same daily routine, fewer moving parts — the record is created once, stored in one
                  place, and read by every module that needs it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
