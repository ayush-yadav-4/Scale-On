'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: 'not-sure',
  budget: 'not-sure',
  message: '',
  website: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    setFieldErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = (await response.json()) as {
        ok?: boolean
        error?: {
          message?: string
          details?: Record<string, string[]>
        }
      }

      if (!response.ok) {
        setFieldErrors(data.error?.details || {})
        setErrorMessage(
          data.error?.message ||
            'We could not send your message. Please email hello@scaleon.io.',
        )
        setStatus('error')
        return
      }

      setFormData(initialForm)
      setStatus('success')
    } catch {
      setErrorMessage(
        'Network error. Please try again or email hello@scaleon.io.',
      )
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const fieldClassName =
    'w-full px-4 py-3 bg-[var(--bg-light)] border border-[var(--border-light)] rounded-md text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus:border-[var(--accent-primary)] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-body font-medium text-[var(--text-primary)] mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className={fieldClassName}
            placeholder="John Doe"
            aria-invalid={Boolean(fieldErrors.name)}
          />
          {fieldErrors.name?.[0] && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.name[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-body font-medium text-[var(--text-primary)] mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={fieldClassName}
            placeholder="john@example.com"
            aria-invalid={Boolean(fieldErrors.email)}
          />
          {fieldErrors.email?.[0] && (
            <p className="mt-1 text-sm text-red-400">{fieldErrors.email[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-body font-medium text-[var(--text-primary)] mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={fieldClassName}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-body font-medium text-[var(--text-primary)] mb-2">
            Company / Business Name
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            className={fieldClassName}
            placeholder="Your Company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-body font-medium text-[var(--text-primary)] mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={fieldClassName}
        >
          <option value="not-sure">Not Sure Yet / General Enquiry</option>
          <option value="web-dev">Full Stack Web Development</option>
          <option value="cloud">Cloud Solutions</option>
          <option value="ai">AI Agents & Automation</option>
          <option value="website">Custom Website</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-body font-medium text-[var(--text-primary)] mb-2">
          Project Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={fieldClassName}
        >
          <option value="not-sure">Not Sure</option>
          <option value="under-50k">Under ₹50,000</option>
          <option value="50k-150k">₹50,000 – ₹1,50,000</option>
          <option value="150k-500k">₹1,50,000 – ₹5,00,000</option>
          <option value="above-500k">₹5,00,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-body font-medium text-[var(--text-primary)] mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${fieldClassName} resize-none`}
          placeholder="Tell us about your project, goals, and what you're looking for..."
          aria-invalid={Boolean(fieldErrors.message)}
        />
        {fieldErrors.message?.[0] && (
          <p className="mt-1 text-sm text-red-400">{fieldErrors.message[0]}</p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <p className="text-sm text-[var(--text-muted)]">
        By submitting this form you agree to our{' '}
        <Link href="/privacy" className="font-medium text-[var(--accent-primary)] hover:opacity-80">
          Privacy Policy
        </Link>
        . We use your details only to respond to this enquiry.
      </p>

      {status === 'success' && (
        <p
          className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-emerald-200"
          role="status"
        >
          Thanks — your message was sent. We typically respond within 24 business hours.
        </p>
      )}
      {status === 'error' && (
        <p
          className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-200"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>

      <p className="text-sm text-[var(--text-muted)] text-center">
        We typically respond within 24 business hours.
      </p>
    </form>
  )
}
