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
      "ScaleOn delivered our entire platform in under 6 weeks. Clean code, great communication, and they actually understood what we were trying to build.",
    author: 'Rohan M.',
    title: 'Founder, SaaS Startup',
  },
  {
    quote:
      "We needed an AI chatbot integrated into our operations within a month. ScaleOn made it happen — and it worked exactly as we envisioned.",
    author: 'Priya S.',
    title: 'Operations Head, Logistics Firm',
  },
  {
    quote:
      "From the landing page to the backend API, everything was handled professionally. These guys know their craft.",
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
      // Section title
      gsap.fromTo(
        containerRef.current?.querySelector('h2'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Card animations with fan effect
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
        }
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
        }
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
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">What Clients Say</Badge>
          <h2 className="text-5xl font-display font-bold text-[#e8f0fe] mb-4">
            Real Words from Real Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              variant="glass"
              className="relative"
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-2 text-8xl font-display opacity-5 text-[#f97316]">
                "
              </div>

              {/* Quote */}
              <p className="text-[#e8f0fe] mb-8 italic relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-[rgba(249,115,22,0.12)] pt-6">
                <p className="font-display font-semibold text-[#e8f0fe]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#9aa4b2]">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
