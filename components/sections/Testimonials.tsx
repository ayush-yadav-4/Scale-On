'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      'ScaleOn delivered our entire platform in under 6 weeks. Clean code, great communication, and they actually understood what we were trying to build.',
    author: 'Rohan M.',
    title: 'Founder, SaaS Startup',
  },
  {
    quote:
      'We needed an AI chatbot integrated into our operations within a month. ScaleOn made it happen — and it worked exactly as we envisioned.',
    author: 'Priya S.',
    title: 'Operations Head, Logistics Firm',
  },
  {
    quote:
      'From the landing page to the backend API, everything was handled professionally. These guys know their craft.',
    author: 'Arjun K.',
    title: 'Co-Founder, D2C Brand',
  },
]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const heading = containerRef.current?.querySelector('h2')
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              once: true,
            },
          },
        )
      }

      const cards = cardsRef.current
      gsap.fromTo(
        cards[0],
        { x: -50, y: 30, opacity: 0, rotationZ: -5 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotationZ: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )
      gsap.fromTo(
        cards[1],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )
      gsap.fromTo(
        cards[2],
        { x: 50, y: 30, opacity: 0, rotationZ: 5 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotationZ: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-transparent py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16">
          <Badge variant="default" className="mb-4">
            What Clients Say
          </Badge>
          <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Real Words from Real Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              variant="glass"
              className="relative overflow-hidden px-2"
            >
              <div
                className="pointer-events-none absolute top-2 left-4 font-display text-7xl leading-none text-[var(--accent-primary)] opacity-10"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="relative z-10 mb-8 px-4 pt-4 text-[var(--text-primary)] italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-slate-200 px-4 pt-5 dark:border-slate-700">
                <p className="font-display font-semibold text-[var(--text-primary)]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[var(--text-muted)]">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
