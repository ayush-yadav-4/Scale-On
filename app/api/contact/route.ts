import { NextResponse } from 'next/server'

import { deliverContact } from '@/lib/contact/delivery'
import { checkRateLimit } from '@/lib/contact/rate-limit'
import { contactSchema } from '@/lib/contact/schema'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 16_384

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') || '0')
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: { code: 'PAYLOAD_TOO_LARGE', message: 'Request too large' } },
      { status: 413 },
    )
  }

  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown'
  const rate = checkRateLimit(ip)
  if (!rate.allowed) {
    return NextResponse.json(
      {
        error: {
          code: 'RATE_LIMITED',
          message: 'Too many requests. Please try again later.',
        },
      },
      {
        status: 429,
        headers: { 'Retry-After': String(rate.retryAfterSeconds) },
      },
    )
  }

  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json(
      { error: { code: 'INVALID_JSON', message: 'Invalid request body' } },
      { status: 400 },
    )
  }

  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Please correct the highlighted fields',
          details: parsed.error.flatten().fieldErrors,
        },
      },
      { status: 422 },
    )
  }

  // Honeypot filled => pretend success without delivery.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true }, { status: 201 })
  }

  const result = await deliverContact(parsed.data)
  if (!result.ok) {
    return NextResponse.json(
      {
        error: {
          code: 'DELIVERY_FAILED',
          message: 'We could not send your message. Please email hello@scaleon.io.',
          requestId: result.requestId,
        },
      },
      { status: 502 },
    )
  }

  return NextResponse.json(
    { ok: true, requestId: result.requestId },
    { status: 201 },
  )
}
