import {
  ClipboardCheck,
  CalendarClock,
  Wallet,
  UserPlus,
  Target,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

type Module = {
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
};

const MODULES: Module[] = [
  {
    icon: ClipboardCheck,
    title: 'Attendance & Daily Reports',
    body: 'Capture attendance once and let the daily report build itself.',
    points: ['Daily attendance register', 'Late and absence flags', 'Department-wise reports'],
  },
  {
    icon: CalendarClock,
    title: 'Leave & Shift Management',
    body: 'Requests, approvals and rosters in one place, with balances that stay current.',
    points: ['Leave requests and approvals', 'Leave balances', 'Shift and roster planning'],
  },
  {
    icon: Wallet,
    title: 'Payroll & Reimbursements',
    body: 'Payroll that reads from the same attendance and leave records your team already keeps.',
    points: ['Attendance-linked payroll runs', 'Reimbursement claims', 'Payslip records'],
  },
  {
    icon: UserPlus,
    title: 'Onboarding & Recruitment',
    body: 'Follow a candidate from application through to their first marked day.',
    points: ['Recruitment pipeline', 'Candidate stages', 'Structured employee onboarding'],
  },
  {
    icon: Target,
    title: 'Performance & Project Tracking',
    body: 'See how time on the roster turns into work delivered.',
    points: ['Performance reviews', 'Project and task tracking', 'Team-level visibility'],
  },
];

export default function Modules() {
  return (
    <section id="modules" className="section relative">
      <div className="shell relative">
        <SectionHeading
          eyebrow="Modules"
          title={
            <>
              Five Modules, <span className="text-accent-gradient">One Connected System</span>
            </>
          }
          description="Each module works on its own and gets better beside the others — attendance feeds payroll, recruitment feeds onboarding, and every record lives in the same place."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ icon: Icon, title, body, points }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08} className="h-full">
              <article className="surface hover-card card-sheen group relative h-full overflow-hidden p-7">
                <span
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(200px 150px at 20% 0%, rgba(79,124,255,0.16), transparent 70%)',
                  }}
                  aria-hidden
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-accent/25 to-violet/20">
                      <Icon size={19} strokeWidth={1.75} className="text-accent-soft" />
                    </span>
                    <span className="tnum text-[11px] font-semibold tracking-[0.2em] text-ink-faint">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[17px] font-semibold leading-snug tracking-[-0.015em] text-white">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{body}</p>

                  <div className="hairline my-6" />

                  <ul className="mt-auto space-y-2.5">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[13px] text-ink-muted">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent-soft" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Closing tile keeps the 3-column grid balanced on large screens */}
          <Reveal delay={0.24} className="h-full">
            <div className="surface-raised card-sheen relative flex h-full flex-col justify-center overflow-hidden p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    'radial-gradient(80% 70% at 30% 0%, rgba(124,92,255,0.18), transparent 70%)',
                }}
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-display text-[19px] font-semibold leading-snug tracking-[-0.02em] text-white">
                  One record, end to end.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  A person is hired once, onboarded once and marked present once — and every module
                  downstream reads from that same record instead of a fresh spreadsheet.
                </p>
                <a
                  href="#pricing"
                  className="mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-accent-soft transition-colors hover:text-white"
                >
                  See plans
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
