import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingShell } from '@/components/layout/MarketingShell'

export const metadata: Metadata = {
  title: 'Terms of Service — ScaleOn',
  description:
    'Terms governing use of the ScaleOn website and general engagement expectations.',
}

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-slate-950">
      <MarketingShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="font-display text-4xl font-bold text-slate-950 dark:text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Last updated: 25 July 2026
        </p>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            By using scaleon.io you agree to these terms. Website content is
            provided for general information about ScaleOn services and is not
            a binding proposal unless confirmed in a separate written agreement.
          </p>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            Enquiries and proposals
          </h2>
          <p>
            Submitting the contact form requests a conversation. Project scope,
            pricing, timelines, and deliverables are confirmed only through an
            explicit proposal or contract.
          </p>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            Acceptable use
          </h2>
          <p>
            Do not misuse the website, attempt to disrupt service, submit
            unlawful content, or abuse enquiry channels with spam or automated
            abuse.
          </p>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            Liability
          </h2>
          <p>
            The website is provided as-is. To the fullest extent permitted by
            law, ScaleOn is not liable for indirect or consequential damages
            arising from website use. Paid project work is governed by the
            applicable engagement agreement.
          </p>
          <h2 className="text-2xl font-display font-semibold text-slate-950 dark:text-white">
            Contact
          </h2>
          <p>
            Questions:{' '}
            <a className="font-medium text-[var(--accent-primary)] hover:opacity-80" href="mailto:hello@scaleon.io">
              hello@scaleon.io
            </a>
            . Review our{' '}
            <Link className="font-medium text-[var(--accent-primary)] hover:opacity-80" href="/privacy">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </article>
      </MarketingShell>
    </main>
  )
}
