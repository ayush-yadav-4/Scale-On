import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Enter a valid email').max(254),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  service: z.enum([
    'not-sure',
    'web-dev',
    'cloud',
    'ai',
    'website',
  ]),
  budget: z.enum([
    'not-sure',
    'under-50k',
    '50k-150k',
    '150k-500k',
    'above-500k',
  ]),
  message: z.string().trim().min(20, 'Please share at least 20 characters').max(5000),
  website: z.string().max(0).optional().or(z.literal('')),
})

export type ContactInput = z.infer<typeof contactSchema>
