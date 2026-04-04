'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Section animations
      gsap.fromTo(
        headingRef.current,
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

      gsap.fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        buttonRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.4,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Orbiting orbs animation
      gsap.to(orb1Ref.current, {
        x: 100,
        y: -50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(orb2Ref.current, {
        x: -100,
        y: 50,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-transparent overflow-hidden"
    >
      {/* Animated Orbs */}
      <div
        ref={orb1Ref}
        className="absolute -top-32 -left-40 w-96 h-96 bg-[rgba(249,115,22,0.06)] rounded-full blur-3xl pointer-events-none"
      />
      <div
        ref={orb2Ref}
        className="absolute -bottom-32 -right-40 w-96 h-96 bg-[rgba(234,88,12,0.06)] rounded-full blur-3xl pointer-events-none"
      />

      {/* Top and Bottom Glow Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97316] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97316] to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          ref={headingRef}
          className="text-5xl font-display font-bold text-[#e8f0fe] mb-6"
        >
          Ready to Build Something Great?
        </h2>

        <p
          ref={subheadingRef}
          className="text-lg text-[#9aa4b2] mb-12 max-w-2xl mx-auto"
        >
          Let&apos;s talk about your project. First consultation is free, fast, and no-commitment.
        </p>

        <div ref={buttonRef} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button size="lg" variant="primary" asChild>
            <Link href="/contact">Book a Free Call</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Learn More</Link>
          </Button>
        </div>

        <p className="text-sm text-[#9aa4b2]">
          No spam. No pressure. Just a real conversation about your goals.
        </p>
      </div>
    </section>
  )
}
