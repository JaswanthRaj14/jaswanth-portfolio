import type { Metadata } from 'next'
import { currentlyBuilding } from '@/lib/data/site'
import { Container, PageHeader } from '@/components/section'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { BuildingCard } from '@/components/building-card'
import { RelatedPages } from '@/components/related-pages'

export const metadata: Metadata = {
  title: 'Currently Building',
  description: 'Ongoing projects Jaswanth Raj is actively building, with objectives and milestone progress.',
  alternates: { canonical: '/currently-building' },
}

export default function CurrentlyBuildingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Currently Building"
        title="Ongoing projects"
        description="Work in progress, shared openly. Objectives and milestones update as each project moves forward."
      />
      <Container className="pb-16">
        <RevealGroup as="ul" className="grid gap-5 lg:grid-cols-2">
          {currentlyBuilding.map((project) => (
            <RevealItem as="li" key={project.title}>
              <BuildingCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
      <RelatedPages hrefs={['/projects', '/learning-journey', '/skills']} />
    </>
  )
}
