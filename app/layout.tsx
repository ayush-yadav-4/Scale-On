import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import ThemeProvider from '@/components/providers/ThemeProvider'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'ScaleOn — IT Agency for Web Development, Cloud & AI Solutions',
  description: 'ScaleOn is a modern IT agency offering full stack web development, cloud solutions, AI agents, and custom websites. Build faster. Scale smarter.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'ScaleOn — IT Agency for Web Development, Cloud & AI Solutions',
    description: 'ScaleOn is a modern IT agency offering full stack web development, cloud solutions, AI agents, and custom websites.',
    url: 'https://scaleon.io',
    siteName: 'ScaleOn',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var saved = localStorage.getItem('theme');
              var shouldDark = saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
              if (shouldDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-white dark:bg-[#0f1115] text-slate-950 dark:text-slate-50 transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
