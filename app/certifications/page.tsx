import type { Metadata } from 'next'
import { certifications } from '@/lib/data/certifications'
import { Container, PageHeader } from '@/components/section'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { CertificationCard } from '@/components/certification-card'
import { RelatedPages } from '@/components/related-pages'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Certifications, course certificates, and badges earned by Jaswanth Raj, with verification links.',
  alternates: { canonical: '/certifications' },
}

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Certifications & credentials"
        description={`${certifications.length} verified credentials across AI, machine learning, and data engineering. Each one links to the original certificate and, where available, an issuer verification page.`}
      />
      <Container className="pb-16">
        <RevealGroup as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <RevealItem as="li" key={cert.title}>
              <CertificationCard cert={cert} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
      <RelatedPages hrefs={['/achievements', '/skills', '/learning-journey']} />
    </>
  )
}
