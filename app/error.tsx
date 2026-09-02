'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { reportClientError } from '@/lib/observability/report'

export default function Error({
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
    <main className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-slate-950">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-3xl font-display font-bold text-slate-950 dark:text-white">
          Something went wrong
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          We hit an unexpected error. You can try again or return home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" onClick={reset}>
            Try again
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
