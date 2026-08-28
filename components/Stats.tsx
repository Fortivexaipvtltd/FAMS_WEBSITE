import { Activity, Layers, LineChart } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import SectionHeading from '@/components/ui/SectionHeading';

const CARDS = [
  {
    icon: Activity,
    title: 'Real-Time Tracking',
    body: 'Monitor attendance and workforce activity, reflected as the day happens.',
  },
  {
    icon: Layers,
    title: 'Centralized Management',
    body: 'Keep people, attendance, leave and payroll records in one platform instead of scattered files.',
  },
  {
    icon: LineChart,
    title: 'Actionable Insights',
    body: 'Turn attendance and HR data into insights your team can actually act on.',
  },
];

const FIGURES = [
  { value: 5, suffix: '', label: 'Core modules' },
  { value: 8, suffix: '', label: 'Platform capabilities' },
  { value: 1, suffix: '', label: 'Unified dashboard' },
  { value: 100, suffix: '%', label: 'Browser-based access' },
];

export default function Stats() {
  return (
    <section className="section relative">
      <div className="shell relative">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              One Platform. <span className="text-accent-gradient">Complete Workforce Visibility.</span>
            </>
          }
          description="FAMS gives organizations a single, centralized way to record, monitor and understand their workforce — attendance, leave, payroll and people, across departments and teams."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.09} className="h-full">
              <article className="surface hover-card card-sheen h-full p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-accent/25 to-violet/20">
                  <Icon size={19} strokeWidth={1.75} className="text-accent-soft" />
                </span>
                <h3 className="h3 mt-6">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="surface mt-5 grid grid-cols-2 divide-x divide-y divide-white/[0.05] overflow-hidden md:grid-cols-4 md:divide-y-0">
            {FIGURES.map((f) => (
              <div key={f.label} className="px-6 py-8 text-center">
                <div className="tnum font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  <Counter to={f.value} suffix={f.suffix} />
                </div>
                <div className="mt-2 text-[12.5px] text-ink-muted">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
