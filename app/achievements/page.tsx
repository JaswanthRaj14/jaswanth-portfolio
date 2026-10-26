import type { Metadata } from 'next'
import { Trophy } from 'lucide-react'
import { Container, PageHeader } from '@/components/section'
import { Reveal } from '@/components/motion/reveal'
import { MilestonesTimeline } from '@/components/milestones-timeline'
import { RelatedPages } from '@/components/related-pages'

export const metadata: Metadata = {
  title: 'Achievements & Competitions',
  description: 'A timeline of verified milestones, plus competitions and hackathons, for Jaswanth Raj.',
  alternates: { canonical: '/achievements' },
}

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Achievements & competitions"
        description="Verified milestones, newest first."
      />
      <Container className="grid gap-10 pb-16 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <section aria-labelledby="milestones-title" className="min-w-0">
          <h2 id="milestones-title" className="mb-8 text-xl font-semibold">
            Milestones timeline
          </h2>
          <MilestonesTimeline />
        </section>
        <Reveal as="section" className="self-start rounded-xl border border-dashed border-border bg-card/50 p-5 sm:p-6">
          <span className="grid size-10 place-items-center rounded-lg bg-violet/10 text-violet">
            <Trophy className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-xl font-semibold">Competitions & hackathons</h2>
          <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
            Competition entries and hackathon results will appear here as they happen.
          </p>
        </Reveal>
      </Container>
      <RelatedPages hrefs={['/certifications', '/projects', '/contact']} />
    </>
  )
}
