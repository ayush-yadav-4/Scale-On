import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const cardVariants = cva(
  'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-card border-border',
        glass:
          'bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-slate-200/80 dark:border-slate-700/80',
        gradient:
          'bg-gradient-to-br from-orange-500/8 via-transparent to-slate-900/5 border-slate-200/80 dark:border-slate-700/80',
      },
      hoverable: {
        true: 'transition-colors hover:border-slate-300 hover:bg-slate-50/80 dark:hover:border-slate-600 dark:hover:bg-slate-900/50 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      hoverable: false,
    },
  },
)

const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & VariantProps<typeof cardVariants>
>(({ className, variant, hoverable, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card"
      className={cn(cardVariants({ variant, hoverable }), className)}
      {...props}
    />
  )
})
Card.displayName = 'Card'

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
}
