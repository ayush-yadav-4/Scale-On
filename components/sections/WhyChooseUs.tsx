'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { GradientText } from '@/components/ui/GradientText'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 4, suffix: '', label: 'Core Service Areas' },
  { number: 3, suffix: '', label: 'Specialist Team Members' },
  { number: 1, suffix: '', label: 'Dedicated Delivery Contact' },
  { number: 24, suffix: 'h', label: 'Weekday Response Target' },
]

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const statRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      statRefs.current.forEach((stat, index) => {
        if (!stat) return
        const numberEl = stat.querySelector('[data-number]')
        if (!numberEl) return

        gsap.fromTo(
          numberEl,
          { innerText: '0' },
          {
            innerText: stats[index].number,
            duration: 1.8,
            ease: 'power1.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'center 85%',
              once: true,
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16">
          <Badge variant="default" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="mb-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            We&apos;re Not Just Developers.
            <br />
            <span className="text-[var(--accent-primary)]">We&apos;re Growth Partners</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
            At ScaleOn, we combine technical depth with business thinking. Every
            solution we build is designed to perform, scale, and deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => {
                statRefs.current[index] = el
              }}
              className="group cursor-default text-center"
            >
              <div className="mb-3 font-display text-4xl font-bold md:text-5xl">
                <GradientText>
                  <span data-number>0</span>
                  {stat.suffix}
                </GradientText>
              </div>
              <p className="text-sm text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)] md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
