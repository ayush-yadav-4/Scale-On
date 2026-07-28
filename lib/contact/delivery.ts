import type { ContactInput } from './schema'

export type DeliveryResult =
  | { ok: true; requestId: string; mode: 'webhook' | 'dev-accept' }
  | { ok: false; requestId: string; error: string }

function createRequestId() {
  return `contact_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

export async function deliverContact(
  payload: ContactInput,
): Promise<DeliveryResult> {
  const requestId = createRequestId()
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Request-Id': requestId,
        },
        body: JSON.stringify({
          requestId,
          source: 'scaleon-website',
          ...payload,
        }),
      })

      if (!response.ok) {
        console.error('contact_delivery_failed', {
          requestId,
          status: response.status,
        })
        return {
          ok: false,
          requestId,
          error: 'Delivery provider rejected the request',
        }
      }

      console.info('contact_delivery_ok', { requestId, mode: 'webhook' })
      return { ok: true, requestId, mode: 'webhook' }
    } catch {
      console.error('contact_delivery_error', { requestId })
      return {
        ok: false,
        requestId,
        error: 'Unable to reach delivery provider',
      }
    }
  }

  if (process.env.NODE_ENV === 'production') {
    console.error('contact_delivery_unconfigured', { requestId })
    return {
      ok: false,
      requestId,
      error: 'Contact delivery is not configured',
    }
  }

  // Local/dev fallback: accept without logging PII.
  console.info('contact_delivery_ok', { requestId, mode: 'dev-accept' })
  return { ok: true, requestId, mode: 'dev-accept' }
}
