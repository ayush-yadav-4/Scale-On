'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-2 text-slate-950 dark:text-white">
              Scale<span className="gradient-text">On</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Scale smarter. Build faster. Grow bigger.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-slate-950 dark:text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-slate-950 dark:text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#web-dev" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Full Stack Development</Link></li>
              <li><Link href="/services#cloud" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services#ai" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">AI Agents & Automation</Link></li>
              <li><Link href="/services#web-design" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Custom Website Design</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-slate-950 dark:text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail size={16} />
                <a href="mailto:hello@scaleon.io">hello@scaleon.io</a>
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Phone size={16} />
                <a href="tel:+91xxxxx">+91 XXXXX XXXXX</a>
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin size={16} />
                <span>India (Global)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <p>© {currentYear} ScaleOn. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
