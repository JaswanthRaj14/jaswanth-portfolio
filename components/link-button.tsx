import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors duration-200 [&_svg]:size-4 [&_svg]:shrink-0'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/85',
  outline: 'border border-border bg-card/60 text-foreground hover:border-primary/50 hover:bg-accent',
  ghost: 'text-muted-foreground hover:bg-accent hover:text-foreground',
}

export function linkButtonClass(variant: Variant = 'primary', className?: string) {
  return cn(base, variants[variant], className)
}

type LinkButtonProps = {
  href: string
  variant?: Variant
  className?: string
  children: ReactNode
  external?: boolean
} & Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>

export function LinkButton({ href, variant = 'primary', className, children, external, ...rest }: LinkButtonProps) {
  const classes = linkButtonClass(variant, className)
  const isExternal = external ?? /^(https?:|mailto:)/.test(href)
  const isFile = /\.(pdf|png|jpe?g)$/i.test(href)

  if (isExternal || isFile) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}
