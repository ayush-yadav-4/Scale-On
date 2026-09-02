import type { Metadata } from 'next'
import { MarketingShell } from '@/components/layout/MarketingShell'
import { BlogPageClient } from '@/components/blog/BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog — ScaleOn',
  description:
    'Insights on web development, cloud architecture, AI automation, and building products that scale.',
}

export default function BlogPage() {
  return (
    <MarketingShell>
      <BlogPageClient />
    </MarketingShell>
  )
}
