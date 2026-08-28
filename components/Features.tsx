import {
  BarChart3,
  CalendarDays,
  FileText,
  LayoutDashboard,
  ScanLine,
  ShieldCheck,
  UserPlus,
  Wallet,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const FEATURES = [
  {
    icon: ScanLine,
    title: 'Attendance & Daily Reports',
    body: 'Record attendance quickly and accurately, and let the daily report build itself.',
  },
  {
    icon: CalendarDays,
    title: 'Leave & Shift Management',
    body: 'Handle requests, approvals, balances and rosters without a side spreadsheet.',
  },
  {
    icon: Wallet,
    title: 'Payroll & Reimbursements',
    body: 'Run payroll from the attendance and leave records your team already maintains.',
  },
  {
    icon: UserPlus,
    title: 'Onboarding & Recruitment',
    body: 'Move a candidate through the pipeline and into a structured onboarding process.',
  },
  {
    icon: BarChart3,
    title: 'Performance & Project Tracking',
    body: 'Connect the hours on the roster to the work that actually got delivered.',
  },
  {
    icon: FileText,
    title: 'Reports & Insights',
    body: 'Generate the numbers leadership asks for, without rebuilding them each month.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure, Role-Based Access',
    body: 'Protect employee data with verified sign-in and access scoped to each role.',
  },
  {
    icon: LayoutDashboard,
    title: 'Centralized Dashboard',
    body: 'See attendance, leave, payroll and people from a single, easy-to-use interface.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line opacity-40"
        aria-hidden
      />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything You Need to <span className="text-accent-gradient">Run HR Better</span>
            </>
          }
          description="A focused set of capabilities covering the full employee cycle — from the moment someone is hired to the payslip that closes the month."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.06} className="h-full">
              <article className="surface hover-card card-sheen group relative h-full overflow-hidden p-6">
                {/* Gradient glow revealed on hover */}
                <span
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(160px 120px at 22% 0%, rgba(79,124,255,0.16), transparent 70%)',
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-white/[0.08] bg-white/[0.04] transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent/[0.14]">
                    <Icon
                      size={18}
                      strokeWidth={1.75}
                      className="text-ink-soft transition-colors duration-500 group-hover:text-accent-soft"
                    />
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
