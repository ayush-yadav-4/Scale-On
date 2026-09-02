'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { reportWebVital } from '@/lib/observability/report'

export function WebVitals() {
  useReportWebVitals((metric) => {
    reportWebVital({
      name: metric.name,
      value: metric.value,
      id: metric.id,
    })
  })

  return null
}
