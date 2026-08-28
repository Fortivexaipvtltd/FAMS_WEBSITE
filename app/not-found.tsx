import { ArrowLeft } from 'lucide-react';
import { APP_URL } from '@/lib/site';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <span className="eyebrow">Error 404</span>
        <h1 className="h2 mt-6 text-gradient">This page could not be found.</h1>
        <p className="lede mx-auto mt-5 max-w-md">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/" className="btn-ghost btn-lg w-full sm:w-auto">
            <ArrowLeft size={16} strokeWidth={2} />
            Back to home
          </a>
          <a href={APP_URL} rel="noopener" className="btn-primary btn-lg w-full sm:w-auto">
            Sign In to FAMS
          </a>
        </div>
      </div>
    </main>
  );
}
