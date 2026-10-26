'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { projectCategories, type Project, type ProjectCategory } from '@/lib/data/projects'
import { ProjectCard } from '@/components/projects/project-card'
import { cn } from '@/lib/utils'

type Filter = 'All' | ProjectCategory

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('All')
  const filters: Filter[] = ['All', ...projectCategories]
  const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

  const countFor = (f: Filter) =>
    f === 'All' ? projects.length : projects.filter((p) => p.categories.includes(f)).length

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => {
          const active = f === filter
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={cn(
                'inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm transition-colors',
                active
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {f}
              <span
                className={cn(
                  'rounded-full px-1.5 font-mono text-[11px]',
                  active ? 'bg-primary-foreground/15' : 'bg-secondary',
                )}
              >
                {countFor(f)}
              </span>
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {`Showing ${visible.length} ${visible.length === 1 ? 'project' : 'projects'}`}
      </p>

      {visible.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border bg-card/40 px-6 py-12 text-center">
          <p className="font-medium">No {filter} projects yet</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Projects in this area are on the roadmap. Check back soon or explore another category.
          </p>
        </div>
      ) : (
        <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, index) => (
              <motion.li
                key={project.slug}
                layout
                data-reveal=""
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: Math.min(index, 6) * 0.05 }}
              >
                <ProjectCard project={project} headingLevel="h2" />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  )
}
