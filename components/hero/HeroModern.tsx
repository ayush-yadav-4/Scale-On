'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroModern() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height

      const glows = containerRef.current.querySelectorAll('.glow-blob')
      glows.forEach((glow) => {
        const rect = glow.getBoundingClientRect()
        const glowX = rect.left + rect.width / 2 - clientX
        const glowY = rect.top + rect.height / 2 - clientY
        ;(glow as HTMLElement).style.transform = `translate(${glowX * 0.1}px, ${glowY * 0.1}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-20"
    >
      {/* Nature Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-nature.jpg)',
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 dark:from-black/60 dark:via-black/70 dark:to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-white/90 text-sm font-medium drop-shadow-md hover:bg-white/20 transition-all">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Cutting-edge web solutions for modern businesses
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4 text-white drop-shadow-lg">
              <span>Build & Scale Your</span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                Digital Presence
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-10">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              We&apos;re a modern IT agency specializing in full-stack web development, cloud solutions, AI agents, and
              custom websites. Let&apos;s build something extraordinary together.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="primary" asChild className="group">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 w-full max-w-md mb-16 pt-16 border-t border-white/30"
          >
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '50+', label: 'Team Members' },
              { number: '95%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <p className="text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trusted By */}
          <motion.div variants={itemVariants} className="w-full">
            <p className="text-sm font-medium text-white/80 mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center gap-8">
              {['Google', 'Microsoft', 'Amazon', 'Stripe', 'Vercel'].map((company, i) => (
                <motion.div
                  key={i}
                  className="text-white/70 font-medium hover:text-white transition-colors drop-shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-medium text-white/70 drop-shadow-md">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
