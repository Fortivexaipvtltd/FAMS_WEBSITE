import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const BENEFITS = [
  'Reduce manual attendance and HR work',
  'Improve workforce visibility',
  'Centralize employee information',
  'Simplify payroll and reporting',
  'Improve accountability',
  'Make better operational decisions',
];

export default function Benefits() {
  return (
    <section id="benefits" className="section relative">
      <div className="shell relative">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent-soft" aria-hidden />
                Benefits
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h2 mt-6 text-gradient">
                Built for Simpler, Smarter Workforce Management
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 font-display text-[1.35rem] font-medium leading-[1.45] tracking-[-0.02em] text-ink-soft sm:text-[1.6rem]">
                “Spend less time managing paperwork.{' '}
                <span className="text-accent-gradient">Spend more time managing what matters.</span>”
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="hairline mt-9" />
              <p className="lede mt-8">
                Attendance, leave and payroll are rarely the point of the work — they are the records
                that make the work accountable. FAMS is designed to make those records accurate and
                effortless, so the time your team spends on them shrinks.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b} delay={i * 0.07}>
                <li className="surface hover-card group flex items-center gap-4 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.12] transition-all duration-500 group-hover:scale-110 group-hover:border-accent/60 group-hover:bg-accent/25">
                    <Check size={15} strokeWidth={2.6} className="text-accent-soft" />
                  </span>
                  <span className="text-[15px] font-medium tracking-[-0.01em] text-ink">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
