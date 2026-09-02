import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    const scriptSrc = [
      "'self'",
      "'unsafe-inline'",
      // React/Next require eval() for development debugging features.
      ...(isDev ? ["'unsafe-eval'"] : []),
      'https://va.vercel-scripts.com',
    ].join(' ')

    const connectSrc = [
      "'self'",
      'https://vitals.vercel-insights.com',
      'https://va.vercel-scripts.com',
      // Turbopack HMR / Fast Refresh in local development.
      ...(isDev ? ['ws:', 'wss:', 'http://localhost:3000', 'http://127.0.0.1:3000'] : []),
    ].join(' ')

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              `script-src ${scriptSrc}`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https:",
              `connect-src ${connectSrc}`,
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
