import { ArrowRight } from 'lucide-react';
import { APP_URL } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

export default function CTA() {
  return (
    <section className="relative pb-24 pt-8 sm:pb-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-white/[0.09] bg-[#070A15] px-6 py-16 text-center shadow-panel sm:px-12 sm:py-24">
            {/* Animated gradient field */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div
                className="glow-orb animate-drift"
                style={{
                  width: 520,
                  height: 520,
                  top: '-40%',
                  left: '8%',
                  background:
                    'radial-gradient(circle, rgba(79,124,255,0.34), rgba(79,124,255,0) 68%)',
                }}
              />
              <div
                className="glow-orb animate-drift"
                style={{
                  width: 480,
                  height: 480,
                  bottom: '-42%',
                  right: '6%',
                  animationDelay: '-9s',
                  background:
                    'radial-gradient(circle, rgba(124,92,255,0.30), rgba(124,92,255,0) 68%)',
                }}
              />
              <div className="grid-field absolute inset-0 opacity-40" />
              <div className="absolute inset-x-0 top-0 h-px bg-accent-line" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="h2 text-gradient">Ready to Transform How You Run HR?</h2>
              <p className="lede mx-auto mt-6 max-w-xl">
                Bring attendance, leave, payroll and people together in one platform — and give your team back the hours they spend reconciling them.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a href={APP_URL} rel="noopener" className="btn-primary btn-lg w-full sm:w-auto">
                  Get Started
                  <ArrowRight size={17} strokeWidth={2} />
                </a>
                <a href="#contact" className="btn-ghost btn-lg w-full sm:w-auto">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
