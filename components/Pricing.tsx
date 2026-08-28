import { Check } from 'lucide-react';
import { APP_URL, SITE } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

/**
 * Pricing is quoted per organization, so the plans describe scope rather than a
 * number. Replace `price` with real figures once they are set.
 */
const PLANS = [
  {
    name: 'Starter',
    price: 'On request',
    tagline: 'For a single team or campus getting attendance in order.',
    features: [
      'Attendance & daily reports',
      'Leave requests and balances',
      'Employee and student records',
      'Standard reports',
      'Email support',
    ],
    cta: 'Talk to us',
    href: `mailto:${SITE.email}?subject=FAMS%20Starter%20plan`,
    featured: false,
  },
  {
    name: 'Professional',
    price: 'On request',
    tagline: 'For organizations running attendance, leave and payroll together.',
    features: [
      'Everything in Starter',
      'Shift and roster planning',
      'Payroll & reimbursements',
      'Recruitment pipeline & onboarding',
      'Advanced analytics and exports',
      'Role-based access controls',
    ],
    cta: 'Talk to us',
    href: `mailto:${SITE.email}?subject=FAMS%20Professional%20plan`,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'On request',
    tagline: 'For multi-site organizations with their own processes.',
    features: [
      'Everything in Professional',
      'Performance & project tracking',
      'Multi-department structure',
      'Custom reporting requirements',
      'Onboarding and migration support',
      'Priority support',
    ],
    cta: 'Contact sales',
    href: `mailto:${SITE.email}?subject=FAMS%20Enterprise%20plan`,
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section relative">
      <div className="shell relative">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Plans That Match <span className="text-accent-gradient">How You Operate</span>
            </>
          }
          description="FAMS is quoted per organization, based on the modules you run and the number of people you manage. Tell us your setup and we'll come back with a figure."
        />

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.09} className="h-full">
              <div className="relative h-full">
                {plan.featured ? (
                  <div
                    className="pointer-events-none absolute -inset-4 blur-3xl"
                    style={{
                      background:
                        'radial-gradient(55% 55% at 50% 30%, rgba(79,124,255,0.22), transparent 72%)',
                    }}
                    aria-hidden
                  />
                ) : null}

                <article
                  className={
                    plan.featured
                      ? 'surface-raised card-sheen relative flex h-full flex-col overflow-hidden p-8'
                      : 'surface hover-card card-sheen relative flex h-full flex-col overflow-hidden p-8'
                  }
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-white">
                      {plan.name}
                    </h3>
                    {plan.featured ? (
                      <span className="rounded-full border border-accent/30 bg-accent/[0.12] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-accent-soft">
                        Most complete
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{plan.tagline}</p>

                  <div className="mt-7">
                    <span className="font-display text-[2rem] font-semibold tracking-[-0.03em] text-white">
                      {plan.price}
                    </span>
                    <p className="mt-1.5 text-[12.5px] text-ink-muted">
                      Quoted per organization and module set.
                    </p>
                  </div>

                  <div className="hairline my-7" />

                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px] text-ink-soft">
                        <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/[0.14]">
                          <Check size={10} strokeWidth={3} className="text-accent-soft" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <a
                      href={plan.href}
                      className={
                        plan.featured
                          ? 'btn-primary btn-md w-full'
                          : 'btn-ghost btn-md w-full'
                      }
                    >
                      {plan.cta}
                    </a>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-[13.5px] text-ink-muted">
            Already have an account?{' '}
            <a
              href={APP_URL}
              rel="noopener"
              className="font-medium text-accent-soft transition-colors hover:text-white"
            >
              Sign in to FAMS
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
