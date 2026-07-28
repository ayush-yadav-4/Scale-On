import type { Metadata } from 'next'
import { MarketingShell } from '@/components/layout/MarketingShell'
import { ServicesPageClient } from '@/components/services/ServicesPageClient'

export const metadata: Metadata = {
  title: 'Services — ScaleOn',
  description:
    'Full stack web development, cloud solutions, AI agents, and custom websites from ScaleOn.',
}

export default function ServicesPage() {
  return (
    <MarketingShell>
      <ServicesPageClient />
    </MarketingShell>
  )
}
