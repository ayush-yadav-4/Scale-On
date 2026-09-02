'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const serviceDetails = [
  {
    id: 'web-dev',
    title: 'Full Stack Web Development',
    subtitle: 'Powerful Applications, Front to Back',
    description:
      'We build complete web applications — from beautiful, responsive front-end interfaces to robust, scalable back-end systems. Our full stack engineers handle the entire product lifecycle: architecture, development, testing, and deployment.',
    bullets: [
      'Custom web application development (React, Next.js, Vue.js)',
      'Backend development with Node.js, Python, or PHP',
      'RESTful and GraphQL API design and development',
      'Database architecture (PostgreSQL, MongoDB, MySQL)',
      'Authentication, security, and performance optimization',
      'Third-party integrations (payments, CRMs, analytics tools)',
      'Code reviews, documentation, and handover',
    ],
    goodFor: [
      'SaaS platforms',
      'Admin dashboards & internal tools',
      'Marketplaces & booking systems',
      'Customer portals & web apps',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    subtitle: 'Scalable, Secure, and Always On',
    description:
      "We help businesses move to the cloud, optimize their infrastructure, and build systems that scale automatically with demand. Whether you're starting fresh or migrating an existing system, our cloud engineers design reliable architectures.",
    bullets: [
      'Cloud setup and architecture on AWS, GCP, or Azure',
      'Server provisioning, configuration, and management',
      'Containerization with Docker & Kubernetes',
      'CI/CD pipeline setup (GitHub Actions, Jenkins, GitLab)',
      'Auto-scaling, load balancing, and cost optimization',
      'Monitoring, alerting, and logging (Grafana, Datadog, CloudWatch)',
      'Cloud security audits and compliance',
    ],
    goodFor: [
      'Startups moving to production',
      'Teams scaling infrastructure',
      'Businesses reducing server costs',
      'Companies needing DevOps support',
    ],
  },
  {
    id: 'ai',
    title: 'AI Agents & Automation',
    subtitle: 'Make Your Business Smarter with AI',
    description:
      "AI is no longer a luxury — it's a competitive advantage. We build custom AI agents, intelligent chatbots, and automated workflows that save your team hours every week and improve customer experience.",
    bullets: [
      'Custom AI chatbots and virtual assistants',
      'LLM integration (OpenAI GPT, Anthropic Claude, Google Gemini)',
      'Retrieval-Augmented Generation (RAG) systems',
      'Automated business workflows using n8n, Make, or Zapier',
      'AI-powered data extraction and document processing',
      'Internal knowledge base assistants',
      'AI agents for lead generation, support, and operations',
    ],
    goodFor: [
      'Businesses with repetitive manual workflows',
      'Customer support automation',
      'Sales and lead qualification bots',
      'Document processing and data extraction',
    ],
  },
  {
    id: 'web-design',
    title: 'Custom Websites',
    subtitle: 'Websites That Look Great and Convert',
    description:
      'Your website is your first impression. We design and build websites that are fast, mobile-first, visually striking, and built to convert visitors into customers. Every website we build is custom — no generic templates.',
    bullets: [
      'Business websites and landing pages',
      'E-commerce stores (custom or Shopify/WooCommerce)',
      'Portfolio and personal brand websites',
      'Blog and content-driven websites',
      'CMS integration (Sanity, Contentful, WordPress)',
      'SEO-ready structure and performance optimization',
      'Ongoing support and maintenance plans',
    ],
    goodFor: [
      'Startups launching their online presence',
      'Businesses rebranding or redesigning',
      'Creators and freelancers building their brand',
      'Retailers going online',
    ],
  },
]

export function ServicesPageClient() {
  const containerRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      servicesRef.current.forEach((service) => {
        if (!service) return

        gsap.fromTo(
          service,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: service,
              start: 'top 80%',
              once: true,
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="overflow-x-hidden bg-transparent">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[var(--bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-6">
            Our Services
          </Badge>
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-[var(--text-primary)] mb-6">
            End-to-End IT Services,
            <br />
            <span className="text-[var(--accent-primary)]">Built to Scale</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Whether you&apos;re launching a startup, scaling a product, or
            modernizing your operations — ScaleOn has the expertise to make it
            happen.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section ref={containerRef} className="py-24 bg-[var(--bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => {
                servicesRef.current[index] = el
              }}
              className={`mb-24 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center scroll-mt-28`}
            >
              <div className="flex-1">
                <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-3">
                  {service.title}
                </h2>
                <h3 className="text-2xl text-[#f97316] font-display mb-6">
                  {service.subtitle}
                </h3>
                <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-display font-semibold text-[var(--text-primary)] mb-4">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-[var(--text-muted)]">
                        <Check
                          size={20}
                          className="text-[#f97316] flex-shrink-0 mt-0.5"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-display font-semibold text-[var(--text-primary)] mb-3">
                    Good For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.goodFor.map((item, i) => (
                      <Badge key={i} variant="success">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button size="lg" variant="primary" className="group" asChild>
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </Button>
              </div>

              <div className="flex-1">
                <div className="h-96 bg-gradient-card rounded-2xl border border-[var(--border-light)] flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold opacity-20 text-[#f97316] mb-4">
                      {index + 1}
                    </div>
                    <p className="text-[var(--text-muted)] text-lg font-display">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--surface)] border-t border-[var(--border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-8">
            That&apos;s completely okay. Tell us about your business and your
            challenge — we&apos;ll recommend the best approach.
          </p>
          <Button size="lg" variant="primary" asChild>
            <Link href="/contact">Talk to an Expert — Free</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
