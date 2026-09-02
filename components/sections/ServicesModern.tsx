'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Code2, Cloud, Zap, Monitor, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    href: '/services#web-dev',
    icon: Code2,
    title: 'Full Stack Web Development',
    description:
      "We design and develop high-performance web applications from front to back. Whether it's a SaaS product, internal tool, or complex platform — we build it clean, fast, and scalable.",
    gradient: 'from-indigo-500 to-indigo-600',
    accent: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    id: 2,
    href: '/services#cloud',
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Deploy, manage, and scale your infrastructure on AWS, GCP, or Azure. We handle cloud architecture, DevOps, CI/CD pipelines, and server management.',
    gradient: 'from-cyan-500 to-cyan-600',
    accent: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    id: 3,
    href: '/services#ai',
    icon: Zap,
    title: 'AI Agents & Automation',
    description:
      'Automate repetitive tasks, build intelligent chatbots, and integrate LLM-powered agents into your business workflows. We make AI practical, not just impressive.',
    gradient: 'from-pink-500 to-rose-500',
    accent: 'text-pink-600 dark:text-pink-400',
  },
  {
    id: 4,
    href: '/services#web-design',
    icon: Monitor,
    title: 'Custom Website Design',
    description:
      'Need a landing page, business website, or e-commerce store? We craft pixel-perfect, conversion-optimized websites tailored to your brand and audience.',
    gradient: 'from-amber-500 to-orange-500',
    accent: 'text-amber-600 dark:text-amber-400',
  },
]

export function ServicesModern() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65 },
    },
  }

  return (
    <section className="relative bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="default" className="mb-4">
            Our Services
          </Badge>
          <h2 className="mb-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            We Build, Deploy &amp; Scale
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)] md:text-xl">
            From concept to production, we offer comprehensive services to transform
            your digital vision into reality.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={itemVariants}
                className="group relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-7 transition-all duration-300 hover:border-slate-300 hover:shadow-xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 dark:hover:border-slate-600 dark:hover:shadow-2xl sm:p-8"
              >
                <div
                  className={`absolute top-6 right-6 h-20 w-20 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10 transition-opacity group-hover:opacity-20`}
                  aria-hidden="true"
                />

                <div
                  className={`relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>

                <h3 className="relative z-10 mb-3 font-display text-2xl font-bold text-slate-950 dark:text-white">
                  {service.title}
                </h3>
                <p className="relative z-10 mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <motion.div whileHover={{ x: 5 }} className="relative z-10">
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-2 font-medium ${service.accent} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
