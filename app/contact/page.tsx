'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GradientText } from '@/components/ui/GradientText'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@scaleon.io',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 XXXXX XXXXX',
  },
  {
    icon: MapPin,
    label: 'Based In',
    value: 'India (Working with clients globally)',
  },
  {
    icon: MessageCircle,
    label: 'Response Time',
    value: 'Within 24 hours on weekdays',
  },
]

const faqs = [
  {
    question: 'How does the process start?',
    answer:
      "It starts with a free 30-minute call. We'll understand your needs, answer your questions, and tell you honestly if we're the right fit.",
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work with clients across India, the UAE, UK, US, and beyond. All our communication and collaboration is fully remote-ready.',
  },
  {
    question: 'What is the typical project timeline?',
    answer:
      "A simple website takes 2–4 weeks. A full web application can take 6–16 weeks depending on complexity. We'll give you a clear estimate after the discovery call.",
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Absolutely. We offer flexible monthly support and maintenance packages to keep your product running and improving after launch.',
  },
  {
    question: "What's the minimum budget for a project?",
    answer:
      "Our projects typically start from ₹30,000 for simple websites and scale up based on scope. We'll always be upfront about pricing.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'not-sure',
    budget: 'not-sure',
    message: '',
  })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <main className="overflow-x-hidden bg-transparent">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-6">
            Get in Touch
          </Badge>
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-[#e8f0fe] mb-6">
            Let&apos;s Talk About<br />
            <GradientText animate>Your Project</GradientText>
          </h1>
          <p className="text-xl text-[#9aa4b2] max-w-2xl">
            Whether you have a clear brief or just an idea — we&apos;re happy to talk. Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-body font-medium text-[#e8f0fe] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a1628] border border-[rgba(249,115,22,0.2)] rounded-lg text-[#e8f0fe] placeholder-[#9aa4b2] focus:outline-none focus:border-[rgba(249,115,22,0.35)] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-body font-medium text-[#e8f0fe] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a1628] border border-[rgba(249,115,22,0.2)] rounded-lg text-[#e8f0fe] placeholder-[#9aa4b2] focus:outline-none focus:border-[rgba(249,115,22,0.35)] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-body font-medium text-[#e8f0fe] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a1628] border border-[rgba(249,115,22,0.2)] rounded-lg text-[#e8f0fe] placeholder-[#9aa4b2] focus:outline-none focus:border-[rgba(249,115,22,0.35)] transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-body font-medium text-[#e8f0fe] mb-2">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a1628] border border-[rgba(249,115,22,0.2)] rounded-lg text-[#e8f0fe] placeholder-[#9aa4b2] focus:outline-none focus:border-[rgba(249,115,22,0.35)] transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-sm font-body font-medium text-[#e8f0fe] mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-[rgba(0,200,255,0.15)] rounded-lg text-[#e8f0fe] focus:outline-none focus:border-[rgba(0,200,255,0.4)] transition-colors"
                  >
                    <option value="not-sure">Not Sure Yet / General Enquiry</option>
                    <option value="web-dev">Full Stack Web Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">AI Agents & Automation</option>
                    <option value="website">Custom Website</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-body font-medium text-[#e8f0fe] mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-[rgba(0,200,255,0.15)] rounded-lg text-[#e8f0fe] focus:outline-none focus:border-[rgba(0,200,255,0.4)] transition-colors"
                  >
                    <option value="not-sure">Not Sure</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-150k">₹50,000 – ₹1,50,000</option>
                    <option value="150k-500k">₹1,50,000 – ₹5,00,000</option>
                    <option value="above-500k">₹5,00,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-body font-medium text-[#e8f0fe] mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                      className="w-full px-4 py-3 bg-[#0a1628] border border-[rgba(249,115,22,0.2)] rounded-lg text-[#e8f0fe] placeholder-[#9aa4b2] focus:outline-none focus:border-[rgba(249,115,22,0.35)] transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and what you're looking for..."
                  />
                </div>

                {/* Submit */}
                <Button size="lg" variant="primary" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-[#9aa4b2] text-center">
                  We typically respond within 24 business hours.
                </p>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-display font-bold text-[#e8f0fe] mb-8">
                Contact Info
              </h2>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon
                  return (
                    <Card key={index} variant="default" hoverable>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Icon size={24} className="text-[#f97316]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#9aa4b2] mb-1">
                            {detail.label}
                          </p>
                          <p className="text-[#e8f0fe] font-body font-medium">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-[#e8f0fe] mb-4 text-center">
            Quick Answers
          </h2>
          <p className="text-center text-[#9aa4b2] mb-12">
            Got questions? We've answered some of the most common ones below.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                variant="default"
                hoverable
                className="cursor-pointer"
                onClick={() =>
                  setExpandedFaq(
                    expandedFaq === index ? null : index
                  )
                }
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-display font-semibold text-[#e8f0fe] flex-1">
                    {faq.question}
                  </h3>
                  <div
                    className={`text-[#f97316] transition-transform flex-shrink-0 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </div>
                </div>

                {expandedFaq === index && (
                  <p className="text-[#9aa4b2] mt-4 pt-4 border-t border-[rgba(249,115,22,0.12)]">
                    {faq.answer}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-[#050d1a] border-t border-[rgba(0,200,255,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-[#e8f0fe] mb-4">
            Not Ready to Fill a Form? That&apos;s Fine.
          </h2>
          <p className="text-[#7a9cc0] mb-8">
            Drop us a message on WhatsApp and let&apos;s start a conversation.
          </p>
          <Button size="lg" variant="primary" className="gap-2">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
