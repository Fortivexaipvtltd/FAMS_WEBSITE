/**
 * Single source of truth for outbound links and copy that repeats across sections.
 *
 * IMPORTANT: every "Sign In / Log In / Get Started / Access FAMS" call to action on the
 * marketing site points at APP_URL — the public entry point of the FAMS application.
 * It deliberately does NOT deep-link to /dashboard/, so the application decides whether
 * to show the login screen or the dashboard based on the visitor's session.
 */
export const APP_URL = 'https://fams.empowersacademy.com';

export const SITE = {
  name: 'FAMS',
  longName: 'Financial & Attendance Management System',
  url: 'https://fams.empowersacademy.com',
  description:
    'FAMS is a modern HR and attendance management system that brings attendance tracking, leave and shift management, payroll, recruitment and onboarding together in one platform.',
  // TODO: replace with the address that should receive enquiries.
  email: 'support@empowersacademy.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Security', href: '#security' },
  { label: 'Contact', href: '#contact' },
] as const;
