import type { Metadata } from 'next'
import { FileText, GraduationCap, Sparkles } from 'lucide-react'
import { about, siteConfig } from '@/lib/data/site'
import { Container, PageHeader } from '@/components/section'
import { LinkButton } from '@/components/link-button'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { RelatedPages } from '@/components/related-pages'

export const metadata: Metadata = {
  title: 'About Me',
  description: `About ${siteConfig.name} — a Computer Science student building toward data science, machine learning, and AI engineering.`,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Me" title={about.heading} />
      <Container className="grid gap-10 pb-16 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <Reveal className="min-w-0 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex flex-col gap-3 pt-3 sm:flex-row">
            <LinkButton href="/projects">See My Projects</LinkButton>
            <LinkButton href={siteConfig.resume} variant="outline">
              <FileText aria-hidden="true" />
              View Resume
            </LinkButton>
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.1} className="rounded-xl border border-border bg-card/70 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-semibold">Education</h2>
            </div>
            <p className="mt-4 font-medium">{about.education.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">{about.education.graduation}</p>
          </Reveal>

          <Reveal delay={0.2} className="rounded-xl border border-border bg-card/70 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-violet/10 text-violet">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-semibold">Interests</h2>
            </div>
            <RevealGroup as="ul" className="mt-4 space-y-2.5 text-sm">
              {about.interests.map((interest) => (
                <RevealItem as="li" key={interest} className="flex gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {interest}
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </Container>
      <RelatedPages hrefs={['/projects', '/skills', '/learning-journey']} />
    </>
  )
}
