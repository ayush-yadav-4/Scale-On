'use client'

import { useEffect } from 'react'
import { reportClientError } from '@/lib/observability/report'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    reportClientError(error)
  }, [error])

  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg-light)] text-[var(--text-primary)] flex items-center justify-center px-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="text-[var(--text-muted)]">
            An unexpected error occurred. You can try again, or email hello@scaleon.io if it persists.
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-[var(--text-primary)] font-medium"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
