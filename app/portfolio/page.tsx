'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GradientText } from '@/components/ui/GradientText'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Web Apps', 'Cloud', 'AI / Automation', 'Websites']

const projects = [
  {
    category: 'Web Apps',
    name: 'TaskFlow Pro',
    industry: 'SaaS / Productivity',
    description: 'A project management SaaS platform with real-time collaboration, role-based access, and a Kanban interface.',
    stack: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    category: 'AI / Automation',
    name: 'SupportBot AI',
    industry: 'E-commerce',
    description: 'An AI-powered customer support chatbot integrated into an e-commerce platform, handling 70% of support queries.',
    stack: ['Python', 'OpenAI API', 'FastAPI', 'Vercel'],
  },
  {
    category: 'Cloud',
    name: 'InfraScale Migration',
    industry: 'Healthcare Tech',
    description: 'Migrated a legacy on-prem application to AWS with Docker containers, auto-scaling groups, and CI/CD.',
    stack: ['AWS', 'Docker', 'GitHub Actions', 'Terraform'],
  },
  {
    category: 'Websites',
    name: 'BrandLift Agency Site',
    industry: 'Marketing Agency',
    description: 'A high-performance marketing website with CMS, animations, and a lead generation funnel.',
    stack: ['Next.js', 'Sanity CMS', 'Vercel'],
  },
  {
    category: 'Web Apps',
    name: 'PayFlow Dashboard',
    industry: 'Fintech',
    description: 'Real-time payment analytics dashboard with advanced visualizations and data export capabilities.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    category: 'AI / Automation',
    name: 'Content Automation Suite',
    industry: 'Content Creation',
    description: 'Automated content generation and scheduling platform powered by LLMs with multi-channel publishing.',
    stack: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Stripe'],
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const projectsRef = useRef<(HTMLDivElement | null)[]>([])

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  )

  useEffect(() => {
    // Animate projects on category change
    projectsRef.current.forEach((project, index) => {
      if (!project) return

      gsap.fromTo(
        project,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
        }
      )
    })
  }, [activeCategory])

  return (
    <main className="overflow-x-hidden bg-transparent">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-6">
            Our Work
          </Badge>
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-[#e8f0fe] mb-6">
            Projects We&apos;re<br />
            <GradientText animate>Proud Of</GradientText>
          </h1>
          <p className="text-xl text-[#9aa4b2] max-w-2xl">
            A selection of products, platforms, and websites we&apos;ve built for clients across industries.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#050d1a] border-b border-[rgba(0,200,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-body transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-accent text-[#050d1a]'
                    : 'border border-[rgba(0,200,255,0.25)] text-[#7a9cc0] hover:border-[rgba(0,200,255,0.4)] hover:text-[#e8f0fe]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={`${activeCategory}-${index}`}
                ref={(el) => {
                  projectsRef.current[index] = el
                }}
                variant="default"
                hoverable
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-card rounded-lg mb-6 flex items-center justify-center border border-[rgba(249,115,22,0.12)]">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold opacity-20 text-[#00c8ff]">
                      {project.name.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <Badge variant="default" className="mb-3">
                  {project.category}
                </Badge>

                {/* Project Info */}
                <h3 className="text-xl font-display font-bold text-[#e8f0fe] mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-[#f97316] mb-4">{project.industry}</p>
                <p className="text-[#7a9cc0] mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[rgba(249,115,22,0.08)] text-[#f97316] rounded-full border border-[rgba(249,115,22,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button size="sm" variant="ghost" className="group">
                  View Case Study
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0a1628] border-t border-[rgba(249,115,22,0.12)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-[#e8f0fe] mb-4">
            Have a Project in Mind?
          </h2>
          <Button size="lg" variant="primary" asChild>
            <Link href="/contact">Let&apos;s Build It Together</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
