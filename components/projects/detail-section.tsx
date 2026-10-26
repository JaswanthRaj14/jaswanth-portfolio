import type { ReactNode } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

export function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal as="section">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </Reveal>
  )
}

export function BulletList({ items, ordered, className }: { items: string[]; ordered?: boolean; className?: string }) {
  const List = ordered ? 'ol' : 'ul'
  return (
    <List className={cn('space-y-2.5 text-pretty leading-relaxed text-muted-foreground', className)}>
      {items.map((item, i) => (
        <li key={item} className="flex gap-3">
          {ordered ? (
            <span className="mt-0.5 font-mono text-xs leading-6 text-primary" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
          ) : (
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          )}
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </List>
  )
}
