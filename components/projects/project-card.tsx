import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data/projects'
import { GitHubIcon } from '@/components/brand-icons'
import { StatusBadge, TagList, statusTone } from '@/components/section'

export function ProjectCard({ project, headingLevel = 'h3' }: { project: Project; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-card/70 p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out focus-within:border-primary/50 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-12px] hover:shadow-primary/25 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StatusBadge label={project.status} tone={statusTone(project.status)} />
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {project.categories.join(' · ')}
        </p>
      </div>

      <Heading className="mt-4 text-pretty text-lg font-semibold leading-snug">
        <Link
          href={`/projects/${project.slug}`}
          className="outline-none after:absolute after:inset-0 after:rounded-xl group-hover:text-primary focus-visible:text-primary"
        >
          {project.title}
        </Link>
      </Heading>
      <p className="mt-2 line-clamp-3 text-pretty text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <TagList tags={project.cardTags} className="mt-4" />

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          View case study
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <GitHubIcon className="size-4" />
          Code
          <span className="sr-only">{` for ${project.title} (opens GitHub)`}</span>
        </a>
      </div>
    </article>
  )
}
