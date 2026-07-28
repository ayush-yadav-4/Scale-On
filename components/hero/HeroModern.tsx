'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const focusAreas = [
  { number: 'Web', label: 'Full-stack products' },
  { number: 'Cloud', label: 'Reliable infrastructure' },
  { number: 'AI', label: 'Practical automation' },
]

export function HeroModern() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const glows = containerRef.current.querySelectorAll('.glow-blob')
      glows.forEach((glow) => {
        const rect = glow.getBoundingClientRect()
        const glowX = rect.left + rect.width / 2 - e.clientX
        const glowY = rect.top + rect.height / 2 - e.clientY
        ;(glow as HTMLElement).style.transform = `translate(${glowX * 0.08}px, ${glowY * 0.08}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-20"
    >
      {/* Nature background image the site was designed around */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(/hero-nature.jpg)',
        }}
        aria-hidden="true"
      />

      {/* Soft animated color washes */}
      <div
        className="glow-blob absolute -left-24 top-16 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl transition-transform duration-300 ease-out animate-blob"
        aria-hidden="true"
      />
      <div
        className="glow-blob absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl transition-transform duration-300 ease-out animate-blob"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      <div
        className="glow-blob absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-300 ease-out"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="mb-4 font-display text-sm font-semibold tracking-[0.2em] text-orange-300 uppercase drop-shadow-md sm:text-base">
              ScaleOn
            </p>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md drop-shadow-md transition-all hover:bg-white/20">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
              Cutting-edge web solutions for modern businesses
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="mb-4 font-display text-5xl leading-tight font-bold text-white drop-shadow-lg md:text-7xl">
              <span>Build &amp; Scale Your</span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                Digital Presence
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-white/90 drop-shadow-md md:text-xl">
              We&apos;re a modern IT agency specializing in full-stack web development,
              cloud solutions, AI agents, and custom websites. Let&apos;s build something
              extraordinary together.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" variant="primary" asChild className="group">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="border border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-16 grid w-full max-w-2xl grid-cols-1 gap-8 border-t border-white/30 pt-16 sm:grid-cols-3"
          >
            {focusAreas.map((item) => (
              <motion.div
                key={item.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mb-2 bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text font-display text-3xl font-bold text-transparent drop-shadow-lg md:text-4xl">
                  {item.number}
                </div>
                <p className="text-sm text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="w-full max-w-xl">
            <p className="mb-2 text-sm font-medium text-white/80 drop-shadow-md">
              Built for startups and growing businesses
            </p>
            <p className="text-sm text-white/70 drop-shadow-md">
              We partner with founders and teams that need clear delivery, modern
              engineering, and long-term maintainability.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-medium text-white/70 drop-shadow-md">Scroll to explore</p>
          <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-white/50">
            <motion.div
              className="h-2 w-1 rounded-full bg-white"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
