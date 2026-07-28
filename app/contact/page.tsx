import type { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { MarketingShell } from '@/components/layout/MarketingShell'
import { ContactForm } from '@/components/contact/ContactForm'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
export const metadata: Metadata = {
  title: 'Contact — ScaleOn',
  description:
    'Start a conversation with ScaleOn about web development, cloud, AI automation, or custom websites.',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@scaleon.io',
    href: 'mailto:hello@scaleon.io',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: 'Available on request',
    href: 'mailto:hello@scaleon.io?subject=Call%20request',
  },
  {
    icon: MapPin,
    label: 'Based In',
    value: 'India (Working with clients globally)',
  },
  {
    icon: MessageCircle,
    label: 'Response Time',
    value: 'Within 24 hours on weekdays',
  },
]

const faqs = [
  {
    question: 'How does the process start?',
    answer:
      "It starts with a free 30-minute call. We'll understand your needs, answer your questions, and tell you honestly if we're the right fit.",
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work with clients across India, the UAE, UK, US, and beyond. All our communication and collaboration is fully remote-ready.',
  },
  {
    question: 'What is the typical project timeline?',
    answer:
      "A simple website takes 2–4 weeks. A full web application can take 6–16 weeks depending on complexity. We'll give you a clear estimate after the discovery call.",
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Absolutely. We offer flexible monthly support and maintenance packages to keep your product running and improving after launch.',
  },
  {
    question: "What's the minimum budget for a project?",
    answer:
      "Our projects typically start from ₹30,000 for simple websites and scale up based on scope. We'll always be upfront about pricing.",
  },
]

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-transparent">
      <MarketingShell>
        <section className="relative pt-32 pb-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge variant="default" className="mb-6">
              Get in Touch
            </Badge>
            <h1 className="text-6xl sm:text-7xl font-display font-bold text-[var(--text-primary)] mb-6">
              Let&apos;s Talk About
              <br />
              <span className="text-[var(--accent-primary)]">Your Project</span>
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl">
              Whether you have a clear brief or just an idea — we&apos;re happy to
              talk. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </section>

        <section className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-8">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon
                    return (
                      <Card key={detail.label} variant="default">
                        <div className="flex gap-4 px-6">
                          <Icon size={24} className="text-[#f97316]" aria-hidden="true" />
                          <div>
                            <p className="text-sm text-[var(--text-muted)] mb-1">{detail.label}</p>
                            {detail.href ? (
                              <a
                                href={detail.href}
                                className="text-[var(--text-primary)] font-body font-medium hover:underline"
                              >
                                {detail.value}
                              </a>
                            ) : (
                              <p className="text-[var(--text-primary)] font-body font-medium">
                                {detail.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--surface)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4 text-center">
              Quick Answers
            </h2>
            <p className="text-center text-[var(--text-muted)] mb-12">
              Got questions? We&apos;ve answered some of the most common ones below.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[var(--border-light)] bg-[var(--surface)] px-6 py-4"
                >
                  <summary className="cursor-pointer list-none font-display font-semibold text-[var(--text-primary)] flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-[#f97316] transition-transform group-open:rotate-180" aria-hidden="true">
                      ↓
                    </span>
                  </summary>
                  <p className="text-[var(--text-muted)] mt-4 pt-4 border-t border-[var(--border-light)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--bg-light)] border-t border-[var(--border-light)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-4">
              Prefer Email?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Reach us directly at hello@scaleon.io and we&apos;ll start the conversation.
            </p>
            <Button size="lg" variant="primary" className="gap-2" asChild>
              <a href="mailto:hello@scaleon.io">
                <MessageCircle size={20} aria-hidden="true" />
                Email ScaleOn
              </a>
            </Button>
          </div>
        </section>
      </MarketingShell>
    </main>
  )
}
