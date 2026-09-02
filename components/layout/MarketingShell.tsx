import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
