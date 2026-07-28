import type { MetadataRoute } from 'next'

const routes = [
  '',
  '/about',
  '/services',
  '/portfolio',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `https://scaleon.io${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
