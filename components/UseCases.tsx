import { Briefcase, Building2, GraduationCap, Layers3 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

type Motif = 'grid' | 'arcs' | 'bars' | 'nodes';

const CASES: { icon: typeof Briefcase; title: string; body: string; motif: Motif }[] = [
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    body: 'Manage student attendance efficiently across classes, sections and terms.',
    motif: 'grid',
  },
  {
    icon: Layers3,
    title: 'Academies & Training Centers',
    body: 'Track learner attendance and participation across batches and programs.',
    motif: 'arcs',
  },
  {
    icon: Briefcase,
    title: 'Businesses',
    body: 'Monitor attendance, leave, payroll and workforce activity from one dashboard.',
    motif: 'bars',
  },
  {
    icon: Building2,
    title: 'Organizations',
    body: 'Centralize HR and attendance operations across teams, sites and departments.',
    motif: 'nodes',
  },
];

function MotifArt({ type }: { type: Motif }) {
  const stroke = 'rgba(143,176,255,0.55)';
  const faint = 'rgba(143,176,255,0.16)';

  return (
    <svg viewBox="0 0 200 90" className="h-[90px] w-full" aria-hidden>
      {type === 'grid' &&
        Array.from({ length: 7 }).map((_, c) =>
          Array.from({ length: 4 }).map((__, r) => (
            <circle
              key={`${c}-${r}`}
              cx={22 + c * 26}
              cy={18 + r * 18}
              r={c === 3 && r === 1 ? 3.4 : 2}
              fill={c === 3 && r === 1 ? stroke : faint}
            />
          )),
        )}

      {type === 'arcs' &&
        [0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M14 78 A ${52 + i * 22} ${52 + i * 22} 0 0 1 ${118 + i * 22} 78`}
            fill="none"
            stroke={i === 1 ? stroke : faint}
            strokeWidth={i === 1 ? 1.6 : 1}
          />
        ))}

      {type === 'bars' &&
        [26, 44, 34, 58, 48, 70, 62, 80].map((h, i) => (
          <rect
            key={i}
            x={18 + i * 21}
            y={82 - h}
            width="9"
            height={h}
            rx="3"
            fill={i > 5 ? stroke : faint}
          />
        ))}

      {type === 'nodes' && (
        <>
          <path d="M100 45 L44 22 M100 45 L156 22 M100 45 L44 70 M100 45 L156 70 M100 45 L100 12"
            stroke={faint} strokeWidth="1" fill="none" />
          {[[44, 22], [156, 22], [44, 70], [156, 70], [100, 12]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={faint} />
          ))}
          <circle cx="100" cy="45" r="6" fill="rgba(79,124,255,0.35)" stroke={stroke} strokeWidth="1.4" />
        </>
      )}
    </svg>
  );
}

export default function UseCases() {
  return (
    <section className="section relative">
      <div className="shell relative">
        <SectionHeading
          eyebrow="Who it's for"
          title={
            <>
              One System, <span className="text-accent-gradient">Many Kinds of Organizations</span>
            </>
          }
          description="The attendance and HR problem looks different in a classroom than it does on a shop floor. FAMS adapts to the structure you already run."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map(({ icon: Icon, title, body, motif }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <article className="surface hover-card card-sheen group h-full overflow-hidden">
                <div className="relative border-b border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent px-4 pb-2 pt-5">
                  <MotifArt type={motif} />
                </div>
                <div className="p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-white/[0.08] bg-white/[0.04] transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent/[0.14]">
                    <Icon size={18} strokeWidth={1.75} className="text-accent-soft" />
                  </span>
                  <h3 className="mt-5 font-display text-[16.5px] font-semibold leading-snug tracking-[-0.015em] text-white">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
