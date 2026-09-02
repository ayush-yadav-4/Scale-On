import type { Metadata } from 'next'
import { MarketingShell } from '@/components/layout/MarketingShell'
import { AboutPageClient } from '@/components/about/AboutPageClient'

export const metadata: Metadata = {
  title: 'About — ScaleOn',
  description:
    'Meet the ScaleOn team and learn how we help businesses ship quality software with speed and transparency.',
}

export default function AboutPage() {
  return (
    <MarketingShell>
      <AboutPageClient />
    </MarketingShell>
  )
}
