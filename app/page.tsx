import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { HeroModern } from '@/components/hero/HeroModern'
import { ServicesModern } from '@/components/sections/ServicesModern'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { Features } from '@/components/sections/Features'
import { CTABanner } from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-transparent">
      <Navbar />
      <HeroModern />
      <ServicesModern />
      <WhyChooseUs />
      <Features />
      <Process />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
