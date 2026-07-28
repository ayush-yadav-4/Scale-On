import type { Metadata } from 'next'
import { MarketingShell } from '@/components/layout/MarketingShell'
import { HeroModern } from '@/components/hero/HeroModern'
import { ServicesModern } from '@/components/sections/ServicesModern'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { Features } from '@/components/sections/Features'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'ScaleOn — IT Agency for Web Development, Cloud & AI Solutions',
  description:
    'ScaleOn builds full stack web apps, cloud infrastructure, AI automation, and custom websites for ambitious teams.',
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-white via-orange-50/40 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <MarketingShell>
        <HeroModern />
        <ServicesModern />
        <WhyChooseUs />
        <Features />
        <Process />
        <Testimonials />
        <CTABanner />
      </MarketingShell>
    </main>
  )
}
