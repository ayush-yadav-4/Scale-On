'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const onDarkHero = pathname === '/' && !isScrolled && !isOpen

  useEffect(() => {
    let frame = 0
    const handleScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        setIsScrolled(window.scrollY > 24)
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? 'border-b border-[var(--border-light)] bg-[var(--surface)]/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="section-inner px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2.5">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-600 font-display text-sm font-bold text-white`}
            >
              S
            </span>
            <span
              className={`font-display text-lg font-bold ${
                onDarkHero ? 'text-white' : 'text-[var(--text-primary)]'
              }`}
            >
              Scale
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                On
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-md px-2.5 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 ${
                    onDarkHero
                      ? active
                        ? 'bg-white/15 text-white'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                      : active
                        ? 'bg-orange-500/10 text-orange-700 dark:text-orange-300'
                        : 'text-[var(--text-secondary)] hover:bg-slate-100 hover:text-[var(--text-primary)] dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button size="sm" variant="primary" asChild>
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className={`rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                onDarkHero
                  ? 'text-white hover:bg-white/10'
                  : 'text-[var(--text-primary)] hover:bg-[var(--surface-muted)]'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-nav"
            className="space-y-1 border-t border-[var(--border-light)] py-3 md:hidden"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-md px-3 py-2.5 text-sm font-semibold ${
                    active
                      ? 'bg-orange-500/10 text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="px-3 pt-2">
              <Button size="sm" variant="primary" className="w-full" asChild>
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
