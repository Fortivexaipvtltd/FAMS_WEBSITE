'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Stage from '@/components/ui/Stage';
import BrowserFrame from '@/components/BrowserFrame';
import DashboardUI from '@/components/DashboardUI';
import SectionHeading from '@/components/ui/SectionHeading';
import Ambient from '@/components/ui/Ambient';

const HIGHLIGHTS = [
  {
    label: 'At a glance',
    body: 'Attendance rate, present and absent counts, and the day’s direction of travel.',
  },
  {
    label: 'Over time',
    body: 'Twelve weeks of trend beside today’s breakdown — context, not just a number.',
  },
  {
    label: 'As it happens',
    body: 'The latest check-ins, late arrivals and approved leave, in one running list.',
  },
];

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Gentle parallax — the frame drifts a little slower than the page.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, -48]);
  const scale = useTransform(scrollYProgress, [0, 0.4], reduce ? [1, 1] : [0.97, 1]);

  return (
    <section className="section relative overflow-hidden">
      <Ambient variant="violet" />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Product"
          title={
            <>
              See Your Attendance <span className="text-accent-gradient">Clearly</span>
            </>
          }
          description="Attendance rate, presence breakdown, trends over time, upcoming schedule and the latest activity — all on one screen, in the language your organization already uses."
        />

        <div ref={ref} className="relative mt-16">
          <motion.div style={{ y, scale }} className="relative">
            <div
              className="pointer-events-none absolute -inset-x-8 -top-8 bottom-0 blur-3xl"
              style={{
                background:
                  'radial-gradient(55% 55% at 50% 45%, rgba(124,92,255,0.20), transparent 70%)',
              }}
              aria-hidden
            />
            <Stage width={1160} height={748} className="relative">
              <BrowserFrame>
                <DashboardUI />
              </BrowserFrame>
            </Stage>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <div className="surface hover-card h-full p-6">
                <div className="text-[10.5px] uppercase tracking-[0.16em] text-accent-soft">
                  {h.label}
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{h.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
