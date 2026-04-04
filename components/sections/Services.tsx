'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Code2, Cloud, Zap, Monitor } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    icon: Code2,
    title: 'Full Stack Web Development',
    description:
      'We design and develop high-performance web applications from front to back. Whether it\'s a SaaS product, internal tool, or complex platform — we build it clean, fast, and scalable.',
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Deploy, manage, and scale your infrastructure on AWS, GCP, or Azure. We handle cloud architecture, DevOps, CI/CD pipelines, and server management.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'AI Agents & Automation',
    description:
      'Automate repetitive tasks, build intelligent chatbots, and integrate LLM-powered agents into your business workflows. We make AI practical, not just impressive.',
  },
  {
    id: 4,
    icon: Monitor,
    title: 'Custom Website Design',
    description:
      'Need a landing page, business website, or e-commerce store? We craft pixel-perfect, conversion-optimized websites tailored to your brand and audience.',
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        containerRef.current?.querySelector('h2'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Card animations
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.12,
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
    <section ref={containerRef} className="py-24 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Our Services</Badge>
          <h2 className="text-5xl font-display font-bold text-[#e8f0fe] mb-4">
            Everything You Need to Build & Scale Online
          </h2>
          <p className="text-[#7a9cc0] text-lg max-w-2xl mx-auto">
            Comprehensive solutions for every stage of your digital journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                variant="default"
                hoverable
                className="relative overflow-hidden group"
              >
                {/* Background Icon */}
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Icon size={120} className="text-[#00c8ff]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 bg-[rgba(0,200,255,0.15)] rounded-lg group-hover:bg-[rgba(0,200,255,0.25)] transition-colors duration-300">
                    <Icon size={32} className="text-[#00c8ff]" />
                  </div>

                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base text-[#7a9cc0]">
                    {service.description}
                  </CardDescription>
                </div>

                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-500" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
