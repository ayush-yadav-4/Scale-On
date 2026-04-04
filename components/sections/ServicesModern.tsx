'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Code2, Cloud, Zap, Monitor, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Code2,
    title: 'Full Stack Web Development',
    description:
      'We design and develop high-performance web applications from front to back. Whether it\'s a SaaS product, internal tool, or complex platform — we build it clean, fast, and scalable.',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Deploy, manage, and scale your infrastructure on AWS, GCP, or Azure. We handle cloud architecture, DevOps, CI/CD pipelines, and server management.',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 3,
    icon: Zap,
    title: 'AI Agents & Automation',
    description:
      'Automate repetitive tasks, build intelligent chatbots, and integrate LLM-powered agents into your business workflows. We make AI practical, not just impressive.',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    id: 4,
    icon: Monitor,
    title: 'Custom Website Design',
    description:
      'Need a landing page, business website, or e-commerce store? We craft pixel-perfect, conversion-optimized websites tailored to your brand and audience.',
    gradient: 'from-amber-500 to-amber-600',
  },
]

export function ServicesModern() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="default" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white mb-4">
            We Build, Deploy & Scale
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From concept to production, we offer comprehensive services to transform your digital vision into reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
              >
                {/* Gradient Icon Background */}
                <div
                  className={`absolute top-6 right-6 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-slate-950 dark:text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 relative z-10 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium relative z-10 group/link cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
