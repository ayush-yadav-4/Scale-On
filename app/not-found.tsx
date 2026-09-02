import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-slate-950">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-3xl font-display font-bold text-slate-950 dark:text-white">
          Page not found
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          The page you requested does not exist or has moved.
        </p>
        <Button variant="primary" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  )
}
