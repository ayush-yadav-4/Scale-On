import type { Metadata } from 'next'
import { MarketingShell } from '@/components/layout/MarketingShell'
import { PortfolioPageClient } from '@/components/portfolio/PortfolioPageClient'

export const metadata: Metadata = {
  title: 'Portfolio — ScaleOn',
  description:
    'Selected ScaleOn projects across web apps, cloud migrations, AI automation, and custom websites.',
}

export default function PortfolioPage() {
  return (
    <MarketingShell>
      <PortfolioPageClient />
    </MarketingShell>
  )
}
