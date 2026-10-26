import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('font-mono text-xs uppercase tracking-[0.2em] text-primary', className)}>{children}</p>
  )
}

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: ReactNode
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <Container className="pt-12 pb-10 sm:pt-20 sm:pb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {description && (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </Container>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  action?: ReactNode
  id?: string
}

export function SectionHeading({ eyebrow, title, description, action, id }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 id={id} className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export function TagList({ tags, className }: { tags: string[]; className?: string }) {
  if (tags.length === 0) return null
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

type StatusTone = 'success' | 'warning' | 'violet' | 'primary'

const toneClass: Record<StatusTone, string> = {
  success: 'border-success/30 bg-success/10 text-success',
  warning: 'border-warning/30 bg-warning/10 text-warning',
  violet: 'border-violet/30 bg-violet/10 text-violet',
  primary: 'border-primary/30 bg-primary/10 text-primary',
}

export function StatusBadge({ label, tone }: { label: string; tone: StatusTone }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider',
        toneClass[tone],
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {label}
    </span>
  )
}

export function statusTone(status: string): StatusTone {
  if (status === 'Completed') return 'success'
  if (status === 'In Progress') return 'warning'
  return 'violet'
}
