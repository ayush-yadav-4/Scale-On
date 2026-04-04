'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { GradientText } from '@/components/ui/GradientText'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 50, suffix: '+', label: 'Projects Delivered' },
  { number: 30, suffix: '+', label: 'Happy Clients' },
  { number: 3, suffix: 'x', label: 'Faster Delivery' },
  { number: 24, suffix: '/7', label: 'Support' },
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
            duration: 2,
            ease: 'power1.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'center 80%',
              once: true,
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-transparent relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-5xl font-display font-bold mb-4">
            We&apos;re Not Just Developers.<br />
            <GradientText animate>We&apos;re Growth Partners</GradientText>
          </h2>
          <p className="text-[#9aa4b2] text-lg max-w-2xl mx-auto">
            At ScaleOn, we combine technical depth with business thinking. Every solution we build is designed to perform, scale, and deliver real results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                statRefs.current[index] = el
              }}
              className="text-center group cursor-pointer"
            >
              {/* Number */}
              <div className="mb-4 text-5xl font-display font-bold">
                <GradientText>
                  <span data-number>0</span>
                  {stat.suffix}
                </GradientText>
              </div>

              {/* Label */}
              <p className="text-[#9aa4b2] group-hover:text-[#e8f0fe] transition-colors duration-300">
                {stat.label}
              </p>

              {/* Bottom Border */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#f97316] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
