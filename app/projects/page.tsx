import type { Metadata } from 'next'
import { projects } from '@/lib/data/projects'
import { Container, PageHeader } from '@/components/section'
import { ProjectGallery } from '@/components/projects/project-gallery'
import { RelatedPages } from '@/components/related-pages'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Data science, machine learning, analytics, and SQL projects by Jaswanth Raj — each with a detailed case study and source code.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects gallery"
        description="Hands-on work across predictive modeling, analytics dashboards, and SQL. Open any project for the full case study."
      />
      <Container className="pb-16">
        <ProjectGallery projects={projects} />
      </Container>
      <RelatedPages hrefs={['/currently-building', '/skills', '/contact']} />
    </>
  )
}
