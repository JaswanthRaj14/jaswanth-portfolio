import { Hero } from '@/components/home/hero'
import {
  AboutPreview,
  BuildingPreview,
  ContactCta,
  CredentialsPreview,
  FeaturedProjects,
  SkillsPreview,
} from '@/components/home/home-sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <BuildingPreview />
      <SkillsPreview />
      <CredentialsPreview />
      <ContactCta />
    </>
  )
}
