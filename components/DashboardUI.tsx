import Image from 'next/image';
import {
  BarChart3,
  Bell,
  CalendarCheck,
  CalendarDays,
  LayoutDashboard,
  LifeBuoy,
  Search,
  Settings,
  UserPlus,
  Users,
  Wallet,
} from 'lucide-react';
import mark from '@/public/fortivex-mark.png';

/**
 * A static, pixel-accurate representation of the FAMS application interface.
 * Rendered at a fixed 1160 x 700 and scaled down by its parent, so the
 * proportions stay identical from a 375px phone to a 1440px desktop.
 *
 * Everything here is markup + SVG — no images, no screenshots.
 */

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: CalendarCheck, label: 'Attendance' },
  { icon: CalendarDays, label: 'Leave & Shift' },
  { icon: Wallet, label: 'Payroll' },
  { icon: Users, label: 'Employees' },
  { icon: UserPlus, label: 'Recruitment' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
];

const KPIS = [
  { label: 'Attendance Rate', value: '94.2%', delta: '+2.4%', up: true, spark: [8, 12, 9, 14, 11, 16, 15, 19] },
  { label: 'Present Today', value: '1,284', delta: '+38', up: true, spark: [10, 9, 13, 12, 15, 14, 17, 18] },
  { label: 'Absent Today', value: '68', delta: '-12', up: false, spark: [16, 14, 15, 11, 12, 9, 8, 6] },
  { label: 'On Leave Today', value: '46', delta: '-4', up: false, spark: [12, 13, 11, 12, 10, 9, 9, 8] },
];

const TREND = [52, 64, 58, 71, 66, 78, 74, 83, 79, 88, 84, 92];
const TREND_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'];

const ACTIVITY = [
  { initials: 'AR', name: 'Aarav Reddy', meta: 'Marked present · Grade 10-B', time: '2 min ago', tone: 'ok' as const, status: 'Present' },
  { initials: 'SK', name: 'Sana Kapoor', meta: 'Checked in · Operations', time: '9 min ago', tone: 'ok' as const, status: 'Present' },
  { initials: 'MJ', name: 'Meera Joshi', meta: 'Late arrival · Design Studio', time: '24 min ago', tone: 'warn' as const, status: 'Late' },
  { initials: 'DV', name: 'Dev Varma', meta: 'Leave approved · Payroll notified', time: '1 hr ago', tone: 'muted' as const, status: 'On leave' },
];

const TONE = {
  ok: { dot: '#34D399', chip: 'rgba(52,211,153,0.12)', text: '#6EE7B7' },
  warn: { dot: '#F5B449', chip: 'rgba(245,180,73,0.12)', text: '#FBCF88' },
  muted: { dot: '#7C89A6', chip: 'rgba(255,255,255,0.06)', text: '#98A1B8' },
};

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = Math.max(max - min, 1);
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 64;
      const y = 20 - ((p - min) / span) * 18;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <svg width="64" height="22" viewBox="0 0 64 22" fill="none" aria-hidden>
      <path d={d} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Donut() {
  const segments = [
    { value: 91, color: '#4F7CFF', label: 'Present' },
    { value: 4, color: '#F5B449', label: 'Late' },
    { value: 5, color: '#5A6486', label: 'Absent' },
  ];
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width="124" height="124" viewBox="0 0 124 124" aria-hidden>
          <circle cx="62" cy="62" r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth="12" fill="none" />
          {segments.map((s) => {
            const length = (s.value / 100) * circumference;
            const dash = `${length} ${circumference - length}`;
            const el = (
              <circle
                key={s.label}
                cx="62"
                cy="62"
                r={radius}
                stroke={s.color}
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={dash}
                strokeDashoffset={-offset}
                transform="rotate(-90 62 62)"
              />
            );
            offset += length;
            return el;
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[22px] font-semibold tracking-tight text-white tnum">91%</span>
          <span className="text-[10px] uppercase tracking-[0.14em] text-[#6E7793]">Present</span>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col gap-2">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-2 text-[#98A1B8]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
              {s.label}
            </span>
            <span className="tnum text-[#D6DCEC]">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const marked = new Set([2, 5, 9, 12, 16, 19, 23, 26]);
  const light = new Set([7, 14, 21]);

  return (
    <div className="grid grid-cols-7 gap-x-1 gap-y-[6px]">
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
        <span key={`${d}-${i}`} className="text-center text-[9px] font-medium uppercase text-[#5B6480]">
          {d}
        </span>
      ))}
      {days.map((d) => {
        const isToday = d === 16;
        return (
          <div
            key={d}
            className="flex h-[22px] items-center justify-center rounded-[6px] text-[10px] tnum"
            style={{
              background: isToday
                ? 'linear-gradient(135deg,#4F7CFF,#7C5CFF)'
                : marked.has(d)
                  ? 'rgba(79,124,255,0.14)'
                  : light.has(d)
                    ? 'rgba(255,255,255,0.04)'
                    : 'transparent',
              color: isToday ? '#fff' : marked.has(d) ? '#AFC2FF' : '#79839E',
            }}
          >
            {d}
          </div>
        );
      })}
    </div>
  );
}

export default function DashboardUI() {
  return (
    <div className="flex h-[700px] w-[1160px] select-none overflow-hidden rounded-[16px] bg-[#070A15] text-left font-sans">
      {/* Sidebar */}
      <aside className="flex w-[232px] shrink-0 flex-col border-r border-white/[0.06] bg-[#080C18] px-4 py-5">
        <div className="flex items-center gap-2.5 px-2">
          <Image src={mark} alt="" height={28} width={35} className="h-7 w-auto" />
          <div className="leading-tight">
            <div className="text-[13px] font-semibold tracking-tight text-white">FAMS</div>
            <div className="text-[9px] uppercase tracking-[0.14em] text-[#5B6480]">Financial &amp; AMS</div>
          </div>
        </div>

        <div className="mt-7 px-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#4E5670]">
          Workspace
        </div>

        <nav className="mt-3 flex flex-col gap-1">
          {NAV.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-[9px] px-3 py-[9px] text-[12.5px]"
              style={{
                background: active ? 'rgba(79,124,255,0.12)' : 'transparent',
                color: active ? '#DCE5FF' : '#7B8399',
                boxShadow: active ? 'inset 0 0 0 1px rgba(79,124,255,0.22)' : 'none',
              }}
            >
              <Icon size={15} strokeWidth={1.75} color={active ? '#8FB0FF' : '#666F87'} />
              {label}
            </div>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="flex items-center gap-2 text-[11px] text-[#98A1B8]">
              <LifeBuoy size={14} strokeWidth={1.75} color="#8FB0FF" />
              Help &amp; Support
            </div>
            <p className="mt-1.5 text-[10px] leading-relaxed text-[#5B6480]">
              Guides and answers for your team.
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.06] px-6">
          <div>
            <div className="text-[15px] font-semibold tracking-tight text-white">Attendance Overview</div>
            <p className="text-[11px] text-[#5B6480]">Friday, 16 October · All departments</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-[220px] items-center gap-2 rounded-[10px] border border-white/[0.06] bg-white/[0.025] px-3">
              <Search size={14} strokeWidth={1.75} color="#5B6480" />
              <span className="text-[11.5px] text-[#5B6480]">Search people or records</span>
            </div>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.025]">
              <Bell size={15} strokeWidth={1.75} color="#7B8399" />
              <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4F7CFF] to-[#7C5CFF] text-[11px] font-semibold text-white">
              EA
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* KPI row */}
          <div className="grid h-[92px] grid-cols-4 gap-4">
            {KPIS.map((k) => (
              <div
                key={k.label}
                className="flex flex-col justify-between rounded-xl border border-white/[0.06] bg-[#0B1020] px-4 py-3"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10.5px] uppercase tracking-[0.12em] text-[#5B6480]">{k.label}</span>
                  <Sparkline points={k.spark} color={k.up ? '#4F7CFF' : '#5A6486'} />
                </div>
                <div className="flex items-end gap-2">
                  <span className="tnum text-[22px] font-semibold leading-none tracking-tight text-white">
                    {k.value}
                  </span>
                  <span
                    className="mb-[2px] rounded-full px-1.5 py-[2px] text-[9.5px] font-medium tnum"
                    style={{
                      background: k.up ? 'rgba(52,211,153,0.10)' : 'rgba(255,255,255,0.05)',
                      color: k.up ? '#6EE7B7' : '#98A1B8',
                    }}
                  >
                    {k.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="flex h-[240px] gap-4">
            <div className="flex flex-1 flex-col rounded-xl border border-white/[0.06] bg-[#0B1020] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-medium text-[#E8ECF7]">Attendance Trend</div>
                  <p className="text-[10.5px] text-[#5B6480]">Average daily attendance · last 12 weeks</p>
                </div>
                <div className="flex items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-[3px]">
                  {['Week', 'Month', 'Term'].map((t, i) => (
                    <span
                      key={t}
                      className="rounded-[6px] px-2.5 py-[5px] text-[10.5px]"
                      style={{
                        background: i === 1 ? 'rgba(79,124,255,0.16)' : 'transparent',
                        color: i === 1 ? '#C7D6FF' : '#6E7793',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 flex flex-1 items-end gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-x-0 h-px bg-white/[0.04]"
                    style={{ bottom: `${18 + i * 30}%` }}
                  />
                ))}
                {TREND.map((v, i) => (
                  <div key={i} className="relative flex h-full flex-1 flex-col justify-end gap-2">
                    <div
                      className="w-full rounded-t-[4px]"
                      style={{
                        height: `${v}%`,
                        background:
                          i >= TREND.length - 3
                            ? 'linear-gradient(180deg,#5F8BFF 0%, rgba(79,124,255,0.25) 100%)'
                            : 'linear-gradient(180deg,rgba(124,146,214,0.55) 0%, rgba(79,124,255,0.10) 100%)',
                      }}
                    />
                    <span className="text-center text-[8.5px] text-[#4E5670]">{TREND_LABELS[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-[236px] shrink-0 flex-col rounded-xl border border-white/[0.06] bg-[#0B1020] p-4">
              <div className="text-[13px] font-medium text-[#E8ECF7]">Today&rsquo;s Breakdown</div>
              <div className="mt-3 flex flex-1 items-center justify-center">
                <Donut />
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex h-[208px] gap-4">
            <div className="flex flex-1 flex-col rounded-xl border border-white/[0.06] bg-[#0B1020] p-4">
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-medium text-[#E8ECF7]">Recent Activity</div>
                <span className="text-[10.5px] text-[#5B6480]">View all</span>
              </div>
              <div className="mt-2 flex flex-col divide-y divide-white/[0.04]">
                {ACTIVITY.map((a) => (
                  <div key={a.name} className="flex items-center gap-3 py-[9px]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-[9.5px] font-semibold text-[#C7D6FF]">
                      {a.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11.5px] text-[#DDE3F2]">{a.name}</div>
                      <div className="truncate text-[10px] text-[#5B6480]">{a.meta}</div>
                    </div>
                    <span
                      className="rounded-full px-2 py-[3px] text-[9.5px]"
                      style={{ background: TONE[a.tone].chip, color: TONE[a.tone].text }}
                    >
                      {a.status}
                    </span>
                    <span className="w-[58px] text-right text-[9.5px] text-[#4E5670]">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-[236px] shrink-0 flex-col rounded-xl border border-white/[0.06] bg-[#0B1020] p-4">
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-medium text-[#E8ECF7]">October</div>
                <span className="text-[10.5px] text-[#5B6480]">2026</span>
              </div>
              <div className="mt-3">
                <MiniCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
