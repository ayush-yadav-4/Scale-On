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
      gsap.fromTo(
        headingRef.current,
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
      gsap.fromTo(
        subheadingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.55,
          delay: 0.24,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )

      gsap.to(orb1Ref.current, {
        x: 80,
        y: -40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(orb2Ref.current, {
        x: -80,
        y: 40,
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
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute -top-32 -left-40 h-96 w-96 rounded-full bg-[rgba(249,115,22,0.08)] blur-3xl"
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-[rgba(234,88,12,0.08)] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="mb-5 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl"
        >
          Ready to Build Something Great?
        </h2>
        <p
          ref={subheadingRef}
          className="mx-auto mb-10 max-w-2xl text-lg text-[var(--text-secondary)]"
        >
          Let&apos;s talk about your project. First consultation is free, fast, and
          no-commitment.
        </p>
        <div
          ref={buttonRef}
          className="mb-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Button size="lg" variant="primary" asChild className="min-h-12 px-7">
            <Link href="/contact">Book a Free Call</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="min-h-12 px-7">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
        <p className="text-sm text-[var(--text-muted)]">
          No spam. No pressure. Just a real conversation about your goals.
        </p>
      </div>
    </section>
  )
}
