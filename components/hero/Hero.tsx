'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { HeroBackground } from './HeroBackground'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { Sparkles } from 'lucide-react'

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create timeline for page load animations
    const tl = gsap.timeline()

    // Navbar slide in
    tl.fromTo(
      'nav',
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      0
    )

    // Badge fade in
    if (badgeRef.current) {
      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.2
      )
    }

    // Headline word-by-word reveal
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word')
      tl.fromTo(
        words,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0 0 0)', duration: 0.6, stagger: 0.08 },
        0.4
      )
    }

    // Subheadline fade in
    if (subheadlineRef.current) {
      tl.fromTo(
        subheadlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.8
      )
    }

    // CTA buttons slide in
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current.children,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        1.0
      )
    }

    // Trust line fade in
    if (trustRef.current) {
      tl.fromTo(
        trustRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        1.2
      )
    }
  }, [])

  return (
    <section className="relative w-full h-screen bg-transparent overflow-hidden pt-20">
      {/* Three.js Background */}
      <HeroBackground />

      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[rgba(249,115,22,0.06)] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[rgba(234,88,12,0.08)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[rgba(251,146,60,0.05)] rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div ref={badgeRef} className="mb-8">
              <Badge icon={<Sparkles size={16} />}>
                New-Age IT Agency
              </Badge>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-6xl sm:text-7xl font-display font-bold leading-tight mb-8 text-[#e8f0fe]"
            >
              <span className="word block">We</span>
              <span className="word block">Build</span>
              <span className="word block">Digital</span>
              <span className="word block">Products</span>
              <span className="word block">That</span>
              <span className="word">
                <GradientText animate>Scale</GradientText>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="text-lg text-[#9aa4b2] mb-12 max-w-2xl leading-relaxed"
            >
              From full stack web apps to AI-powered automation — ScaleOn is your end-to-end technology partner. We help startups and businesses grow faster with smart, scalable digital solutions.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="primary">
                Start Your Project
              </Button>
              <Button size="lg" variant="secondary">
                See Our Work
              </Button>
            </div>

            {/* Trust Line */}
            <div
              ref={trustRef}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-accent border-2 border-[#050d1a] flex items-center justify-center text-[#050d1a] font-display font-bold shadow-lg"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#9aa4b2]">
                Trusted by founders, startups, and growing businesses
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-[#9aa4b2] uppercase tracking-widest">Scroll to explore</p>
          <svg
            className="w-5 h-5 text-[#f97316]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
