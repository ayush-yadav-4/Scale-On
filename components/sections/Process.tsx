'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We listen first. We learn about your business, goals, and target users before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We create a detailed roadmap — tech stack, timeline, milestones, and deliverables — so there are no surprises.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our team executes with precision. Regular updates, demo calls, and full transparency throughout development.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'We deploy, test, and hand over. But we don&apos;t disappear — we stay on for support, improvements, and scaling.',
  },
]

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      // Animate fill line on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      )

      // Animate steps
      stepsRef.current.forEach((step, index) => {
        if (!step) return

        gsap.fromTo(
          step,
          { opacity: 0.3, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: step,
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
    <section ref={containerRef} className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="default" className="mb-4">Our Process</Badge>
          <h2 className="text-5xl font-display font-bold text-[#e8f0fe] mb-4">
            From Idea to Launch — In 4 Simple Steps
          </h2>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto">
          {/* Timeline on Desktop */}
          <div className="hidden md:block relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#3a3f47] -translate-x-1/2">
              <div
                ref={lineRef}
                className="w-full bg-gradient-accent origin-top"
                style={{ scaleY: 0 }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    stepsRef.current[index] = el
                  }}
                  className={`relative flex gap-12 ${
                    index % 2 === 0 ? '' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-display font-bold text-[#e8f0fe] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#9aa4b2]">{step.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-8 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-4 border-[#111315] bg-[#f97316] z-10" />
                  </div>

                  {/* Step Number */}
                  <div className="flex-1 text-right pt-4">
                    <span className="text-6xl font-display font-bold opacity-10 text-[#f97316]">
                      {step.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline on Mobile */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepsRef.current[index] = el
                }}
                className="relative pl-12"
              >
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#f97316] to-[#3a3f47]" />
                )}

                {/* Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-[#050d1a] bg-[#f97316]" />

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-[#e8f0fe] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#9aa4b2]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
