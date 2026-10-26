import type { Metadata } from 'next'
import { skillGroups } from '@/lib/data/site'
import { Container, PageHeader } from '@/components/section'
import { SkillGroups } from '@/components/skill-groups'
import { RelatedPages } from '@/components/related-pages'

export const metadata: Metadata = {
  title: 'Technical Skills',
  description: 'Programming languages, data science libraries, machine learning, databases, and tools used by Jaswanth Raj.',
  alternates: { canonical: '/skills' },
}

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Technical skills"
        description="The languages, libraries, and tools I use across my projects — plus the areas I'm currently learning."
      />
      <Container className="pb-16">
        <SkillGroups groups={skillGroups} />
      </Container>
      <RelatedPages hrefs={['/projects', '/certifications', '/learning-journey']} />
    </>
  )
}
