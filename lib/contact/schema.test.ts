import { describe, expect, it } from 'vitest'
import { contactSchema } from './schema'

describe('contactSchema', () => {
  it('accepts a valid enquiry', () => {
    const result = contactSchema.safeParse({
      name: 'Asad Khan',
      email: 'asad@example.com',
      phone: '',
      company: 'ScaleOn',
      service: 'web-dev',
      budget: '50k-150k',
      message: 'We need a marketing site and lead capture flow.',
      website: '',
    })

    expect(result.success).toBe(true)
  })

  it('rejects short messages and invalid emails', () => {
    const result = contactSchema.safeParse({
      name: 'A',
      email: 'not-an-email',
      service: 'web-dev',
      budget: 'not-sure',
      message: 'Too short',
    })

    expect(result.success).toBe(false)
  })
})
