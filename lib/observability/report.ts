type ErrorLike = Error & { digest?: string }

export function reportClientError(error: ErrorLike) {
  // Keep payloads non-PII. Digest is safe for correlation in Next.js.
  const payload = {
    name: error.name,
    message: error.message,
    digest: error.digest,
  }

  if (process.env.NODE_ENV !== 'production') {
    console.error('[client-error]', payload)
    return
  }

  // Hook for a future telemetry endpoint without shipping PII today.
  console.error('[client-error]', payload.digest ?? payload.name)
}

export function reportWebVital(metric: {
  name: string
  value: number
  id: string
}) {
  if (process.env.NODE_ENV !== 'production') {
    console.info('[web-vital]', metric.name, Math.round(metric.value), metric.id)
  }
}
