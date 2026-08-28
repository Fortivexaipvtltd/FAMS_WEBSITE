import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type StageProps = {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
  /** Tailwind arbitrary-property classes that set the --s scale per breakpoint. */
  scale?: string;
};

/**
 * Renders a fixed-size interface mock and scales it down to fit any viewport.
 *
 * The mock keeps its exact desktop proportions at every breakpoint (so it always
 * reads as real software) while the wrapper's height tracks the scaled height —
 * which is what keeps the page free of horizontal overflow on small screens.
 */
export default function Stage({
  width,
  height,
  children,
  className,
  scale = '[--s:0.275] sm:[--s:0.47] md:[--s:0.58] lg:[--s:0.79] xl:[--s:0.95]',
}: StageProps) {
  return (
    <div
      className={cn('relative w-full', scale, className)}
      style={{ height: `calc(${height}px * var(--s))` }}
    >
      <div
        className="absolute left-1/2 top-0 origin-top-left"
        style={{
          width,
          height,
          // scale() then translateX(-50%) — the translate is applied in the
          // element's own coordinates, so the mock stays perfectly centred at
          // every scale instead of drifting off to the right.
          transform: 'scale(var(--s)) translateX(-50%)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
