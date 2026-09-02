import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingShell } from '@/components/layout/MarketingShell'

export const metadata: Metadata = {
  title: 'Privacy Policy — ScaleOn',
  description:
    'How ScaleOn collects, uses, and protects personal information from website visitors and enquiry forms.',
}

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-slate-950">
      <MarketingShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 prose dark:prose-invert">
        <h1 className="font-display text-4xl font-bold text-slate-950 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Last updated: 25 July 2026
        </p>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            ScaleOn (&quot;we&quot;, &quot;us&quot;) operates scaleon.io. This
            policy explains what information we collect when you use our
            website and how we use it.
          </p>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            Information we collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Contact form submissions: name, email, optional phone/company,
              service interest, budget range, and project message.
            </li>
            <li>
              Technical analytics in production via Vercel Analytics (page
              views and aggregated usage signals).
            </li>
          </ul>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            How we use information
          </h2>
          <p>
            Enquiry details are used only to respond to your request and
            evaluate project fit. We do not sell personal data. Analytics help
            us understand site performance and improve content.
          </p>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            Retention
          </h2>
          <p>
            Contact enquiries are retained only as long as needed to respond
            and maintain a reasonable business record of correspondence, unless
            a longer period is required by law.
          </p>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            Contact
          </h2>
          <p>
            Privacy questions: {' '}
            <a className="font-medium text-[var(--accent-primary)] hover:opacity-80" href="mailto:hello@scaleon.io">
              hello@scaleon.io
            </a>
            . See also our {' '}
            <Link className="font-medium text-[var(--accent-primary)] hover:opacity-80" href="/terms">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </article>
      </MarketingShell>
    </main>
  )
}
