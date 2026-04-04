'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { GradientText } from '@/components/ui/GradientText'
import { Zap, Target, Heart, Rocket, Shield, Brain } from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Quality First',
    description: "We don't ship half-baked work. Every line of code, every design decision, every deployment goes through our quality bar.",
  },
  {
    icon: Target,
    title: 'Radical Transparency',
    description: 'No hidden costs, no vague timelines. We keep you in the loop at every stage — because you deserve to know what\'s happening.',
  },
  {
    icon: Rocket,
    title: 'Speed Without Shortcuts',
    description: 'We move fast using agile processes — but we never compromise on architecture, security, or maintainability.',
  },
  {
    icon: Heart,
    title: 'Client-First Thinking',
    description: 'Your goals are our goals. We measure our success by the results you achieve — not just the features we ship.',
  },
  {
    icon: Brain,
    title: 'Always Learning',
    description: 'Technology moves fast. So do we. Our team constantly upskills and brings the best practices to your project.',
  },
]

const differences = [
  {
    title: 'Big Agency Output, Startup Speed',
    description: 'We combine the polish and process of a large agency with the speed and flexibility of a startup team. You get both.',
  },
  {
    title: 'One Point of Contact',
    description: 'No shuffling between account managers and delivery teams. You work directly with the people building your product.',
  },
  {
    title: 'Built for Long-Term Relationships',
    description: "We're not looking for one-off projects. We want to grow with you — from version 1.0 to your next big product milestone.",
  },
]

const team = [
  {
    name: 'Asad Khan',
    role: 'Quality Assurance Engineer',
    bio:
      'Quality Assurance Engineer with 5+ years experience in Manual and Automation testing. Built robust automation frameworks with Selenium WebDriver and Java, managed ETL workflows (AWS Glue), and oversaw data-driven campaigns. Proven in Agile teams delivering high-quality software via cross-functional collaboration and meticulous test documentation.',
  },
  {
    name: 'Ayush Yadav',
    role: 'Full Stack Developer',
    bio:
      'Full stack developer focused on performant frontends and scalable backends. Comfortable across React/Next.js, Node.js, and databases, shipping reliable features end-to-end.',
  },
  {
    name: 'Husain Khan',
    role: 'Cloud Engineer',
    bio:
      'Cloud engineer specializing in AWS infrastructure, automation, and cost-efficient architectures. Enables resilient deployments and smooth DevOps workflows.',
  },
]

export default function AboutPage() {
  const valuesRef = useRef<(HTMLDivElement | null)[]>([])
  const differenceRef = useRef<(HTMLDivElement | null)[]>([])
  const teamRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Values animation
    valuesRef.current.forEach((card, index) => {
      if (!card) return
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    // Differences animation
    differenceRef.current.forEach((card, index) => {
      if (!card) return
      gsap.fromTo(
        card,
        { x: index % 2 === 0 ? -40 : 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    // Team animation
    teamRef.current.forEach((card, index) => {
      if (!card) return
      gsap.fromTo(
        card,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: card,
            start: 'center 80%',
            once: true,
          },
        }
      )
    })
  }, [])

  return (
    <main className="overflow-x-hidden bg-transparent">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-6">
            About ScaleOn
          </Badge>
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-[#e8f0fe] mb-6">
            We&apos;re a Team That<br />
            <GradientText animate>Builds for Impact</GradientText>
          </h1>
          <p className="text-xl text-[#9aa4b2] max-w-2xl">
            ScaleOn is a new-generation IT agency built by developers, designers, and strategists who believe great technology should be accessible to every business.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-display font-bold text-[#e8f0fe] mb-6">Who We Are</h2>
              <div className="space-y-4 text-[#7a9cc0]">
                <p>
                  ScaleOn was founded with one clear mission: to help businesses grow with technology that actually works. We saw too many companies struggling with bloated agencies, slow timelines, and solutions that didn&apos;t fit their real needs. So we built something different.
                </p>
                <p>
                  We&apos;re a lean, focused team of engineers and creators who combine technical expertise with a genuine understanding of business. We don&apos;t just write code — we ask the right questions, think through problems end-to-end, and build solutions that make a real difference.
                </p>
                <p>
                  From early-stage startups to growing mid-size companies, we&apos;ve worked across industries and product types. And we bring that breadth of experience to every project we take on.
                </p>
              </div>
            </div>
            <div className="h-96 bg-gradient-card rounded-2xl border border-[rgba(249,115,22,0.12)] flex items-center justify-center">
              <div className="text-center text-[#9aa4b2]">Our Story</div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card variant="default" hoverable>
              <Badge variant="default" className="mb-4">Our Mission</Badge>
              <p className="text-lg text-[#e8f0fe]">
                To empower businesses of all sizes with smart, scalable technology — delivered fast, built right, and designed to grow with them.
              </p>
            </Card>
            <Card variant="default" hoverable>
              <Badge variant="success" className="mb-4">Our Vision</Badge>
              <p className="text-lg text-[#e8f0fe]">
                To become the most trusted IT partner for ambitious businesses in India and beyond — known for quality, integrity, and real impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-[#e8f0fe] mb-16 text-center">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  ref={(el) => {
                    valuesRef.current[index] = el
                  }}
                  variant="default"
                  hoverable
                >
                  <div className="mb-4 inline-flex p-3 bg-[rgba(249,115,22,0.15)] rounded-lg">
                    <Icon size={28} className="text-[#f97316]" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#e8f0fe] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#9aa4b2]">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-[#e8f0fe] mb-16 text-center">
            The ScaleOn Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((diff, index) => (
              <Card
                key={index}
                ref={(el) => {
                  differenceRef.current[index] = el
                }}
                variant="gradient"
                hoverable
              >
                <h3 className="text-xl font-display font-bold text-[#e8f0fe] mb-3">
                  {diff.title}
                </h3>
                <p className="text-[#7a9cc0]">{diff.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-[#e8f0fe] mb-6 text-center">
            The People Behind ScaleOn
          </h2>
          <p className="text-center text-[#7a9cc0] mb-16 max-w-2xl mx-auto">
            A small team with big skills. Every person at ScaleOn is a specialist in their domain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                ref={(el) => {
                  teamRef.current[index] = el
                }}
                variant="default"
                hoverable
              >
                <div className="h-48 bg-[rgba(249,115,22,0.10)] rounded-lg mb-4 flex items-center justify-center border border-[rgba(249,115,22,0.15)]">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold opacity-20 text-[#f97316]">
                      {member.name[0]}
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-bold text-[#e8f0fe]">{member.name}</h3>
                <p className="text-sm text-[#f97316] mb-2">{member.role}</p>
                <p className="text-sm text-[#9aa4b2]">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
