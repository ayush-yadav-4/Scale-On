import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--surface)]">
      <div className="section-inner section-shell !pb-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-3 font-display text-lg font-bold text-[var(--text-primary)]">
              Scale<span className="gradient-text">On</span>
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Scale smarter. Build faster. Grow bigger.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-[var(--text-primary)]">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/about#team', label: 'Our Team' },
                { href: '/contact', label: 'Contact' },
                { href: '/blog', label: 'Blog' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-[var(--text-primary)]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/services#web-dev', label: 'Full Stack Development' },
                { href: '/services#cloud', label: 'Cloud Solutions' },
                { href: '/services#ai', label: 'AI Agents & Automation' },
                { href: '/services#web-design', label: 'Custom Website Design' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-[var(--text-primary)]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" className="shrink-0" />
                <a
                  href="mailto:hello@scaleon.io"
                  className="transition-colors hover:text-[var(--accent-primary)]"
                >
                  hello@scaleon.io
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" className="shrink-0" />
                <span>India (Global)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border-light)] pt-6 text-sm text-[var(--text-muted)] md:flex-row">
          <p>© {currentYear} ScaleOn. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--accent-primary)]"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--accent-primary)]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
