'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  'React, Next.js & Node.js Development',
  'REST & GraphQL API Architecture',
  'AWS / GCP / Azure Cloud Deployments',
  'LLM Integration (OpenAI, Claude, Gemini)',
  'Automated Workflows & Chatbots',
  'E-commerce, CMS & Custom Portals',
]

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

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

      itemsRef.current.forEach((item, index) => {
        if (!item) return
        gsap.fromTo(
          item,
          { x: -24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.55,
            delay: index * 0.07,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
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
    <section ref={containerRef} className="bg-transparent py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16">
          <Badge variant="default" className="mb-4">
            Tech Stack
          </Badge>
          <h2 className="mb-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Built for the Real World
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            We solve real business problems with modern technology
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-orange-500/10 p-5 transition-all duration-300 hover:border-slate-300 hover:bg-orange-500/15 dark:border-slate-700 dark:hover:border-slate-600"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f97316]">
                <Check size={14} className="text-black" aria-hidden="true" />
              </div>
              <span className="font-medium text-[var(--text-primary)]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
