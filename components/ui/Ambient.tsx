import { cn } from '@/lib/utils';

/**
 * Slow-drifting gradient orbs behind a section. Purely decorative and
 * pointer-events-none so it never interferes with interaction.
 */
export default function Ambient({
  className,
  variant = 'blue',
}: {
  className?: string;
  variant?: 'blue' | 'violet' | 'duo';
}) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {(variant === 'blue' || variant === 'duo') && (
        <div
          className="glow-orb animate-drift"
          style={{
            width: 560,
            height: 560,
            top: '4%',
            left: '-10%',
            background:
              'radial-gradient(circle at 50% 50%, rgba(79,124,255,0.30), rgba(79,124,255,0) 68%)',
          }}
        />
      )}
      {(variant === 'violet' || variant === 'duo') && (
        <div
          className="glow-orb animate-drift"
          style={{
            width: 620,
            height: 620,
            bottom: '4%',
            right: '-12%',
            animationDelay: '-7s',
            background:
              'radial-gradient(circle at 50% 50%, rgba(124,92,255,0.26), rgba(124,92,255,0) 68%)',
          }}
        />
      )}
    </div>
  );
}
