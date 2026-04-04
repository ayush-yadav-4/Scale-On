'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  animate?: boolean
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, animate = false, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'gradient-text',
          animate && 'gradient-text-animate',
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

GradientText.displayName = 'GradientText'
