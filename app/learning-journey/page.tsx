import type { Metadata } from 'next'
import { Container, PageHeader } from '@/components/section'
import { LearningTimeline } from '@/components/learning-timeline'
import { RelatedPages } from '@/components/related-pages'

export const metadata: Metadata = {
  title: 'Learning Journey',
  description: "What Jaswanth Raj is building with today, actively learning, and planning to learn next.",
  alternates: { canonical: '/learning-journey' },
}

export default function LearningJourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning Journey"
        title="Current learning & roadmap"
        description="A path from data fundamentals toward deep learning, LLM applications, and AI agents."
      />
      <Container className="max-w-3xl pb-16">
        <LearningTimeline />
      </Container>
      <RelatedPages hrefs={['/currently-building', '/skills', '/certifications']} />
    </>
  )
}
