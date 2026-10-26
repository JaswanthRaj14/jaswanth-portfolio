import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { getProject, projects } from '@/lib/data/projects'
import { Container, Eyebrow, StatusBadge, TagList, statusTone } from '@/components/section'
import { LinkButton } from '@/components/link-button'
import { GitHubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/motion/reveal'
import { DetailSection, BulletList } from '@/components/projects/detail-section'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.summary },
  }
}

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const hasResults = Boolean(project.metrics?.length || project.resultTables?.length || project.findings?.length)

  return (
    <article>
      <Container className="pt-8 pb-10 sm:pt-12 sm:pb-14">
        <nav aria-label="Breadcrumb">
          <Link
            href="/projects"
            className="-ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>
        </nav>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <StatusBadge label={project.status} tone={statusTone(project.status)} />
          <Eyebrow className="tracking-widest">{project.categories.join(' · ')}</Eyebrow>
        </div>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.summary}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={project.repoUrl}>
            <GitHubIcon />
            {project.repoIsProfile ? 'View GitHub Profile' : 'View Repository'}
          </LinkButton>
          {project.demoUrl && (
            <LinkButton href={project.demoUrl} variant="outline">
              <ExternalLink aria-hidden="true" />
              Live Demo
            </LinkButton>
          )}
        </div>
        {project.repoIsProfile && (
          <p className="mt-3 text-sm text-muted-foreground">
            A dedicated repository link for this project is not yet available; the link opens the GitHub profile.
          </p>
        )}
      </Container>

      <Container className="grid gap-10 border-t border-border pt-12 pb-16 lg:grid-cols-[1fr_280px] lg:gap-14">
        <div className="min-w-0 space-y-12">
          <DetailSection title="Problem statement">
            <p className="text-pretty leading-relaxed text-muted-foreground">{project.problem}</p>
          </DetailSection>

          <DetailSection title="Objectives">
            <BulletList items={project.objectives} />
          </DetailSection>

          {project.dataset && (
            <DetailSection title="Dataset">
              <p className="font-medium">
                {project.dataset.url ? (
                  <a
                    href={project.dataset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    {project.dataset.name}
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  project.dataset.name
                )}
              </p>
              {project.dataset.description && <BulletList items={project.dataset.description} className="mt-3" />}
            </DetailSection>
          )}

          <DetailSection title="Data cleaning & preprocessing">
            <BulletList items={project.preprocessing} />
          </DetailSection>

          <DetailSection title="Methodology & implementation">
            <BulletList items={project.methodology} ordered />
          </DetailSection>

          <DetailSection title="Evaluation & results">
            {project.metrics && project.metrics.length > 0 && (
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-card/70 p-4">
                    <dt className="text-xs text-muted-foreground">{m.label}</dt>
                    <dd className="mt-1 font-mono text-xl font-semibold text-primary">{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {project.resultTables?.map((table) => (
              <div key={table.caption} className="mt-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <caption className="border-b border-border bg-card/70 px-4 py-3 text-left text-sm font-medium">
                    {table.caption}
                  </caption>
                  <thead className="bg-secondary/50 text-xs text-muted-foreground">
                    <tr>
                      {table.columns.map((c) => (
                        <th key={c} scope="col" className="px-4 py-2.5 font-medium">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {table.rows.map((row) => (
                      <tr key={row.join('|')}>
                        {row.map((cell, i) => (
                          <td key={i} className={i === 0 ? 'px-4 py-2.5 font-medium' : 'px-4 py-2.5 font-mono'}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            {project.findings && project.findings.length > 0 && (
              <div className={project.metrics?.length || project.resultTables?.length ? 'mt-6' : undefined}>
                <h3 className="mb-3 text-sm font-medium">Key findings</h3>
                <BulletList items={project.findings} />
              </div>
            )}
            {(project.resultsNote || !hasResults) && (
              <p className="mt-4 rounded-lg border border-dashed border-border bg-card/40 p-4 text-sm leading-relaxed text-muted-foreground">
                {project.resultsNote ??
                  'Verified evaluation results have not been published for this project yet. See the repository for the latest work.'}
              </p>
            )}
          </DetailSection>

          <DetailSection title="Challenges & lessons learned">
            <BulletList items={project.lessons} />
          </DetailSection>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal className="rounded-xl border border-border bg-card/70 p-5">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tools & technologies</h2>
            <TagList tags={project.tools} className="mt-4" />
            <div className="mt-6 space-y-2 border-t border-border pt-5">
              <LinkButton href={project.repoUrl} variant="outline" className="w-full">
                <GitHubIcon />
                Source on GitHub
              </LinkButton>
              <LinkButton href="/projects" variant="ghost" className="w-full">
                <ArrowLeft aria-hidden="true" />
                Back to all projects
              </LinkButton>
            </div>
          </Reveal>
        </aside>
      </Container>

      <nav aria-label="More projects" className="border-t border-border">
        <Container className="grid gap-3 py-10 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex min-h-16 items-center gap-3 rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40"
          >
            <ArrowLeft className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Previous project</span>
              <span className="block truncate font-medium">{prev.title}</span>
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex min-h-16 items-center justify-end gap-3 rounded-xl border border-border bg-card/60 p-4 text-right transition-colors hover:border-primary/40"
          >
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Next project</span>
              <span className="block truncate font-medium">{next.title}</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
          </Link>
        </Container>
      </nav>
    </article>
  )
}
