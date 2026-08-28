import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-accent-soft" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2 className={cn('h2 text-gradient', eyebrow && 'mt-6')}>{title}</h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className={cn('lede mt-5 max-w-2xl', align === 'center' && 'mx-auto')}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
