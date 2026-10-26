import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/section'

const pageInfo: Record<string, { label: string; description: string }> = {
  '/about': { label: 'About Me', description: 'Background, education, and interests' },
  '/projects': { label: 'Projects', description: 'All completed and ongoing work' },
  '/currently-building': { label: 'Currently Building', description: 'Ongoing projects and progress' },
  '/skills': { label: 'Skills', description: 'Languages, libraries, and tools' },
  '/certifications': { label: 'Certifications', description: 'Credentials with verification links' },
  '/achievements': { label: 'Achievements', description: 'Milestones and competitions' },
  '/learning-journey': { label: 'Learning Journey', description: 'Current learning and roadmap' },
  '/contact': { label: 'Contact', description: 'Email, GitHub, and LinkedIn' },
}

export function RelatedPages({ hrefs }: { hrefs: (keyof typeof pageInfo)[] }) {
  return (
    <nav aria-labelledby="related-pages" className="border-t border-border">
      <Container className="py-14">
        <h2 id="related-pages" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Explore next
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hrefs.map((href) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex min-h-16 items-center justify-between gap-4 rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40"
              >
                <span className="min-w-0">
                  <span className="block font-medium">{pageInfo[href].label}</span>
                  <span className="block text-sm text-muted-foreground">{pageInfo[href].description}</span>
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
