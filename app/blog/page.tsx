'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GradientText } from '@/components/ui/GradientText'
import { ArrowRight, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How AI Agents Are Changing Business Operations in 2025',
    category: 'AI & Automation',
    date: 'March 15, 2025',
    readTime: '8 min read',
    excerpt:
      'Explore how AI agents are transforming business processes and what this means for your organization. From customer service to operations, AI is redefining work.',
    featured: true,
  },
  {
    id: 2,
    title: 'What Is Full Stack Development and Why Your Startup Needs It',
    category: 'Development',
    date: 'March 10, 2025',
    readTime: '6 min read',
    excerpt:
      'A comprehensive guide to full stack development. Learn what it means, why it matters for startups, and how to hire the right full stack engineers.',
  },
  {
    id: 3,
    title: 'AWS vs GCP vs Azure: Which Cloud Platform Is Right for Your Business?',
    category: 'Cloud',
    date: 'March 5, 2025',
    readTime: '10 min read',
    excerpt:
      'Breaking down the three major cloud platforms. We compare pricing, features, ease of use, and help you choose the right one for your needs.',
  },
  {
    id: 4,
    title: '5 Ways AI Automation Can Save Your Team 10+ Hours a Week',
    category: 'AI & Automation',
    date: 'Feb 28, 2025',
    readTime: '7 min read',
    excerpt:
      'Practical use cases for AI automation in business. From email to reporting, discover the quick wins you can implement immediately.',
  },
  {
    id: 5,
    title: 'Why Your Business Website Is Losing You Clients (And How to Fix It)',
    category: 'Design',
    date: 'Feb 20, 2025',
    readTime: '5 min read',
    excerpt:
      'Common mistakes that are costing you conversions. Learn the design and UX principles that turn visitors into customers.',
  },
  {
    id: 6,
    title: 'How to Choose the Right IT Agency for Your Project',
    category: 'Business',
    date: 'Feb 15, 2025',
    readTime: '9 min read',
    excerpt:
      'A practical guide to vetting IT agencies. What to look for, questions to ask, and red flags to watch out for.',
  },
]

const categories = [
  'All',
  'Development',
  'Cloud',
  'AI & Automation',
  'Design',
  'Business',
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <main className="overflow-x-hidden bg-transparent">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-6">
            ScaleOn Blog
          </Badge>
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-[#e8f0fe] mb-6">
            Insights, Guides & Tech<br />
            <GradientText animate>Deep Dives</GradientText>
          </h1>
          <p className="text-xl text-[#7a9cc0] max-w-2xl">
            We write about web development, cloud architecture, AI trends, and practical tips to help you build and grow smarter.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-[#050d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card variant="default" hoverable className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="h-96 bg-gradient-card rounded-lg flex items-center justify-center border border-[rgba(249,115,22,0.12)]">
                  <div className="text-center text-[#9aa4b2]">Featured Post</div>
                </div>

                {/* Content */}
                <div>
                  <Badge variant="default" className="mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl font-display font-bold text-[#e8f0fe] mb-4">
                    {featuredPost.title}
                  </h2>
                  <div className="flex gap-4 text-sm text-[#9aa4b2] mb-4">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <p className="text-[#9aa4b2] mb-6">{featuredPost.excerpt}</p>
                  <Button size="md" variant="primary" className="group">
                    Read Article
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-12 bg-[#050d1a] border-b border-[rgba(249,115,22,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa4b2]"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#0a1628] border border-[rgba(249,115,22,0.2)] rounded-lg text-[#e8f0fe] placeholder-[#9aa4b2] focus:outline-none focus:border-[rgba(249,115,22,0.35)] transition-colors"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-body transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-accent text-[#050d1a]'
                    : 'border border-[rgba(249,115,22,0.25)] text-[#9aa4b2] hover:border-[rgba(249,115,22,0.4)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} variant="default" hoverable>
                  {/* Thumbnail */}
                  <div className="h-40 bg-gradient-card rounded-lg mb-6 flex items-center justify-center border border-[rgba(249,115,22,0.12)]">
                    <div className="text-center text-[#9aa4b2]">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <Badge variant="default" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-display font-bold text-[#e8f0fe] mb-3">
                    {post.title}
                  </h3>
                  <div className="flex gap-3 text-xs text-[#9aa4b2] mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-[#9aa4b2] mb-6 text-sm">
                    {post.excerpt}
                  </p>
                  <Button size="sm" variant="ghost" className="group">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#7a9cc0]">
                No posts found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a1628] border-t border-[rgba(249,115,22,0.12)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-[#e8f0fe] mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[#9aa4b2] mb-8">
            Get insights, guides, and updates delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-[#050d1a] border border-[rgba(249,115,22,0.2)] rounded-lg text-[#e8f0fe] placeholder-[#9aa4b2] focus:outline-none focus:border-[rgba(249,115,22,0.35)]"
            />
            <Button size="md" variant="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
