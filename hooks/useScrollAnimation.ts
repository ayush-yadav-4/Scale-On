'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  trigger?: string | HTMLElement
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  once?: boolean
}

export function useScrollAnimation(
  callback: (trigger: ScrollTrigger) => void,
  options: ScrollAnimationOptions = {}
) {
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const trigger = options.trigger || triggerRef.current

    if (!trigger) return

    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub ?? false,
      markers: options.markers ?? false,
      onEnter: () => {
        callback(scrollTrigger)
        if (options.once) {
          scrollTrigger.kill()
        }
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [callback, options])

  return triggerRef
}

export function useElementAnimation(animationFactory: (el: HTMLElement) => gsap.core.Tween) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const tween = animationFactory(ref.current)

    return () => {
      tween?.kill()
    }
  }, [animationFactory])

  return ref
}
