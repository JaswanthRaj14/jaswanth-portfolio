import Link from 'next/link'
import { ArrowRight, Circle, CircleCheck } from 'lucide-react'
import type { BuildingProject } from '@/lib/data/site'
import { StatusBadge, TagList, statusTone } from '@/components/section'

export function BuildingCard({ project, compact = false }: { project: BuildingProject; compact?: boolean }) {
  const done = project.milestones.filter((m) => m.done).length
  const total = project.milestones.length
  const percent = Math.round((done / total) * 100)

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card/70 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StatusBadge label={project.status} tone={statusTone(project.status)} />
        <span className="font-mono text-[11px] text-muted-foreground">
          {done}/{total} milestones
        </span>
      </div>
      <h3 className="mt-4 text-pretty text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-5">
        <div
          role="progressbar"
          aria-label={`${project.title} progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          className="h-1.5 overflow-hidden rounded-full bg-secondary"
        >
          <div className="h-full rounded-full bg-primary" style={{ width: `${Math.max(percent, 3)}%` }} />
        </div>
      </div>

      {!compact && (
        <>
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Current objectives</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {project.objectives.map((o) => (
                <li key={o} className="flex gap-2.5 text-pretty">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Milestones</h4>
            <ol className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {project.milestones.map((m) => (
                <li key={m.label} className="flex items-center gap-2 text-muted-foreground">
                  {m.done ? (
                    <CircleCheck className="size-4 shrink-0 text-success" aria-hidden="true" />
                  ) : (
                    <Circle className="size-4 shrink-0" aria-hidden="true" />
                  )}
                  <span>{m.label}</span>
                  <span className="sr-only">{m.done ? '(complete)' : '(not started)'}</span>
                </li>
              ))}
            </ol>
          </div>
          {project.stack.length > 0 ? (
            <TagList tags={project.stack} className="mt-6" />
          ) : (
            <p className="mt-6 font-mono text-xs text-muted-foreground">Stack to be announced</p>
          )}
        </>
      )}

      {project.slug && (
        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-5 text-sm font-medium text-primary hover:underline"
        >
          View project page
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </article>
  )
}
