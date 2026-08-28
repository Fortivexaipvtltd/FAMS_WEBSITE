import { Eye, KeyRound, Lock, ServerCog, UserCheck } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Ambient from '@/components/ui/Ambient';

const POINTS = [
  {
    icon: KeyRound,
    title: 'Secure authentication',
    body: 'Access begins with a verified sign-in — no shared spreadsheets, no open links.',
  },
  {
    icon: UserCheck,
    title: 'Role-based access',
    body: 'People see what their role requires, and nothing beyond it.',
  },
  {
    icon: Eye,
    title: 'Controlled data visibility',
    body: 'Records stay scoped to the departments, teams and groups they belong to.',
  },
  {
    icon: Lock,
    title: 'Protected user information',
    body: 'Personal and organizational details are handled as sensitive by default.',
  },
  {
    icon: ServerCog,
    title: 'Reliable application architecture',
    body: 'A maintained, centrally hosted platform rather than files on individual machines.',
  },
];

function ShieldVisual() {
  return (
    <div className="relative mx-auto flex h-[340px] w-full max-w-[420px] items-center justify-center sm:h-[400px]">
      {/* Concentric pulse rings */}
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute animate-pulse-ring rounded-full border border-accent/25"
          style={{
            width: 300,
            height: 300,
            animationDelay: `${i * 1}s`,
          }}
          aria-hidden
        />
      ))}
      <span
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          background: 'radial-gradient(circle, rgba(79,124,255,0.20), transparent 66%)',
          filter: 'blur(18px)',
        }}
        aria-hidden
      />

      <svg
        viewBox="0 0 200 220"
        className="relative h-[240px] w-[240px] animate-float-slow drop-shadow-[0_24px_60px_rgba(79,124,255,0.35)] sm:h-[270px] sm:w-[270px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="shieldFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F7CFF" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="shieldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8FB0FF" />
            <stop offset="100%" stopColor="#A08CFF" />
          </linearGradient>
        </defs>
        <path
          d="M100 8 L182 40 V108 C182 158 146 194 100 212 C54 194 18 158 18 108 V40 Z"
          fill="url(#shieldFill)"
          stroke="url(#shieldStroke)"
          strokeWidth="1.6"
          strokeOpacity="0.85"
        />
        <path
          d="M100 26 L166 52 V108 C166 149 137 179 100 194 C63 179 34 149 34 108 V52 Z"
          fill="none"
          stroke="#8FB0FF"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <path
          d="M74 108 l18 19 l36 -40"
          fill="none"
          stroke="url(#shieldStroke)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Security() {
  return (
    <section id="security" className="section relative overflow-hidden">
      <Ambient variant="blue" />
      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent-soft" aria-hidden />
                Security
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h2 mt-6 text-gradient">
                Your Employee Data Deserves{' '}
                <span className="text-accent-gradient">Enterprise-Level Protection.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede mt-6">
                FAMS is designed with security and controlled access at its foundation. Attendance,
                payroll and personnel records describe real people, so the platform treats access as
                something to be granted deliberately rather than assumed.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-3">
              {POINTS.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={0.14 + i * 0.06} className="h-full">
                  <li className="surface hover-card flex gap-4 p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.04]">
                      <Icon size={16} strokeWidth={1.8} className="text-accent-soft" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white">{title}</h3>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <ShieldVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
