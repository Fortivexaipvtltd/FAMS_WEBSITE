import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of the Fortivex Attendance Management System (FAMS).',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="1 January 2026">
      <section>
        <h2>Acceptance</h2>
        <p>
          By accessing the FAMS website or signing in to the Financial &amp; Attendance Management System,
          you agree to these terms. If you are using FAMS on behalf of an organization, you confirm
          you are authorized to do so.
        </p>
      </section>

      <section>
        <h2>Accounts and access</h2>
        <ul>
          <li>Accounts are issued by the organization that operates the FAMS instance.</li>
          <li>Credentials are personal and must not be shared.</li>
          <li>Access rights are determined by the role assigned to each account.</li>
        </ul>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>
          FAMS may be used only for legitimate workforce and attendance management purposes. Attempting to access
          records outside your assigned role, disrupting the service, or misusing personal data
          within the platform is not permitted.
        </p>
      </section>

      <section>
        <h2>Data responsibility</h2>
        <p>
          The organization operating a FAMS instance is responsible for the accuracy of the records
          it maintains and for how those records are used within its own policies and applicable
          law.
        </p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>
          The platform is maintained and updated over time. Features may change, and access may be
          interrupted for maintenance. These terms may be revised; the date above indicates the most
          recent update.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a className="text-accent-soft hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
      </section>
    </LegalShell>
  );
}
