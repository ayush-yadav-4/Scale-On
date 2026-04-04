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

      // Feature items
      itemsRef.current.forEach((item, index) => {
        if (!item) return

        gsap.fromTo(
          item,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
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
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Tech Stack</Badge>
          <h2 className="text-5xl font-display font-bold text-[#e8f0fe] mb-4">
            Built for the Real World
          </h2>
          <p className="text-[#9aa4b2] text-lg">
            We solve real business problems with modern technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="flex items-center gap-4 p-6 bg-[rgba(249,115,22,0.08)] hover:bg-[rgba(249,115,22,0.12)] rounded-xl transition-all duration-300 border border-[rgba(249,115,22,0.12)] hover:border-[rgba(249,115,22,0.3)]"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center">
                <Check size={16} className="text-black" />
              </div>
              <span className="text-[#e8f0fe] font-body">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
