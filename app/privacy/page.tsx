import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How the FAMS website and the Fortivex Attendance Management System handle information.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="1 January 2026">
      <section>
        <h2>Overview</h2>
        <p>
          This policy describes how the FAMS website and the Financial &amp; Attendance Management
          System handle information. FAMS is used by organizations to manage attendance, leave, payroll and
          recruitment, which means the platform processes information about the people those
          organizations employ or enrol.
        </p>
      </section>

      <section>
        <h2>Information we process</h2>
        <ul>
          <li>Account information used to sign in to the FAMS application.</li>
          <li>Organizational records such as employee, student, department and schedule details.</li>
          <li>Attendance, leave, payroll and recruitment records created through normal use of the platform.</li>
          <li>Basic technical information required to operate and secure the application.</li>
        </ul>
      </section>

      <section>
        <h2>How information is used</h2>
        <p>
          Information is used to provide the service: recording attendance and leave, running
          payroll, managing recruitment and onboarding, producing reports, and giving authorized
          users access to the records that belong to their organization. It is not sold.
        </p>
      </section>

      <section>
        <h2>Access and control</h2>
        <p>
          Access to employee and attendance data is controlled by role. Each organization administers its own
          users and determines who may view or manage records within it.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          Records are retained for as long as the organization using FAMS requires them, or as
          required by applicable law and institutional policy.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a className="text-accent-soft hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
      </section>
    </LegalShell>
  );
}
