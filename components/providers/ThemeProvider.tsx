'use client'

import { useEffect } from 'react'

/**
 * Keeps the document theme class in sync after hydration.
 * Initial theme is applied earlier by the layout beforeInteractive script.
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])

  return <>{children}</>
}
