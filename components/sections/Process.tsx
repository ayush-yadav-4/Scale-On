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
    description:
      'We listen first. We learn about your business, goals, and target users before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We create a detailed roadmap — tech stack, timeline, milestones, and deliverables — so there are no surprises.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Our team executes with precision. Regular updates, demo calls, and full transparency throughout development.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description:
      "We deploy, test, and hand over. But we don't disappear — we stay on for support, improvements, and scaling.",
  },
]

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 55%',
            end: 'bottom 55%',
            scrub: 1,
          },
        },
      )

      stepsRef.current.forEach((step) => {
        if (!step) return
        gsap.fromTo(
          step,
          { opacity: 0.35, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              once: true,
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-transparent py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:mb-20">
          <Badge variant="default" className="mb-4">
            Our Process
          </Badge>
          <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            From Idea to Launch — In 4 Simple Steps
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative hidden md:block">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 bg-[var(--border-light)]">
              <div
                ref={lineRef}
                className="h-full w-full origin-top bg-gradient-to-b from-orange-500 to-orange-600"
                style={{ transform: 'scaleY(0)' }}
              />
            </div>

            <div className="space-y-20">
              {steps.map((step, index) => {
                const contentLeft = index % 2 === 0
                return (
                  <div
                    key={step.number}
                    ref={(el) => {
                      stepsRef.current[index] = el
                    }}
                    className="relative flex items-start gap-10"
                  >
                    <div className={`flex-1 pt-1 ${contentLeft ? 'text-right' : 'text-left order-3'}`}>
                      {contentLeft ? (
                        <>
                          <h3 className="mb-2 font-display text-2xl font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                          <p className="text-[var(--text-secondary)] leading-relaxed">
                            {step.description}
                          </p>
                        </>
                      ) : (
                        <span className="font-display text-5xl font-bold text-[var(--accent-primary)] opacity-20">
                          {step.number}
                        </span>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 flex w-5 shrink-0 justify-center order-2">
                      <div className="h-5 w-5 rounded-full border-4 border-[var(--bg-light)] bg-[#f97316]" />
                    </div>

                    <div className={`flex-1 pt-1 ${contentLeft ? 'text-left order-3' : 'text-left'}`}>
                      {contentLeft ? (
                        <span className="font-display text-5xl font-bold text-[var(--accent-primary)] opacity-20">
                          {step.number}
                        </span>
                      ) : (
                        <>
                          <h3 className="mb-2 font-display text-2xl font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                          <p className="text-[var(--text-secondary)] leading-relaxed">
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-6 md:hidden">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepsRef.current[index] = el
                }}
                className="relative border border-[var(--border-light)] bg-[var(--surface)] p-5 pl-14"
              >
                <div className="absolute top-6 left-5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f97316] font-display text-[10px] font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
