import { BarChart3, LogIn, MonitorCheck, Settings2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const STEPS = [
  {
    num: '01',
    icon: LogIn,
    title: 'Sign In',
    body: 'Access your secure FAMS account with your organization credentials.',
  },
  {
    num: '02',
    icon: Settings2,
    title: 'Manage',
    body: 'Manage employees, students, attendance, leave, payroll and schedules in one place.',
  },
  {
    num: '03',
    icon: MonitorCheck,
    title: 'Monitor',
    body: 'Track attendance and workforce activity through the centralized dashboard as the day unfolds.',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Analyze',
    body: 'Use reports and insights to make informed operational decisions.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section relative">
      <div className="shell relative">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Four Steps From Sign In to <span className="text-accent-gradient">Insight</span>
            </>
          }
          description="No lengthy onboarding ritual. The workflow is the same on day one as it is a year in."
        />

        <div className="relative mt-16">
          {/* Connector: horizontal on desktop, vertical on mobile */}
          <div
            className="pointer-events-none absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent sm:block lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block"
            aria-hidden
          />

          <ol className="grid gap-10 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {STEPS.map(({ num, icon: Icon, title, body }, i) => (
              <Reveal key={num} delay={i * 0.1}>
                <li className="relative flex gap-5 sm:gap-6 lg:block">
                  <div className="relative shrink-0">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.09] bg-base-raised shadow-card">
                      <Icon size={20} strokeWidth={1.75} className="text-accent-soft" />
                      <span
                        className="absolute inset-0 rounded-2xl opacity-70"
                        style={{
                          background:
                            'radial-gradient(60% 60% at 50% 0%, rgba(79,124,255,0.20), transparent 70%)',
                        }}
                        aria-hidden
                      />
                    </span>
                  </div>
                  <div className="pt-0.5 lg:pt-7">
                    <span className="tnum font-display text-[12px] font-semibold tracking-[0.2em] text-accent-soft">
                      {num}
                    </span>
                    <h3 className="h3 mt-2">{title}</h3>
                    <p className="mt-2.5 max-w-sm text-[14.5px] leading-relaxed text-ink-soft">{body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
