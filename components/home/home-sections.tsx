import Link from 'next/link'
import { ArrowRight, Award, GraduationCap, Mail, Trophy } from 'lucide-react'
import { about, currentlyBuilding, siteConfig, skillGroups } from '@/lib/data/site'
import { featuredProjects } from '@/lib/data/projects'
import { certifications } from '@/lib/data/certifications'
import { Container, SectionHeading } from '@/components/section'
import { LinkButton } from '@/components/link-button'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { ProjectCard } from '@/components/projects/project-card'
import { BuildingCard } from '@/components/building-card'

function HomeSection({ id, children, muted }: { id: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <section aria-labelledby={id} className={muted ? 'border-y border-border bg-card/30' : undefined}>
      <Container className="py-16 sm:py-20">{children}</Container>
    </section>
  )
}

export function AboutPreview() {
  return (
    <HomeSection id="about-preview">
      <Reveal className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div className="min-w-0">
          <SectionHeading id="about-preview" eyebrow="About" title={about.heading} />
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{about.paragraphs[0]}</p>
          <LinkButton href="/about" variant="outline" className="mt-6">
            Read More
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </div>
        <div className="flex items-start gap-4 self-start rounded-xl border border-border bg-card/70 p-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Education</p>
            <p className="mt-2 font-medium">{about.education.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">{about.education.graduation}</p>
          </div>
        </div>
      </Reveal>
    </HomeSection>
  )
}

export function FeaturedProjects() {
  return (
    <HomeSection id="featured-projects" muted>
      <SectionHeading
        id="featured-projects"
        eyebrow="Projects"
        title="Featured projects"
        description="A selection of end-to-end work across machine learning, analytics, and SQL."
        action={
          <LinkButton href="/projects" variant="outline">
            View All Projects
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        }
      />
      <RevealGroup as="ul" className="mt-10 grid gap-5 sm:grid-cols-2">
        {featuredProjects.slice(0, 4).map((project) => (
          <RevealItem as="li" key={project.slug}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </HomeSection>
  )
}

export function BuildingPreview() {
  return (
    <HomeSection id="building-preview">
      <SectionHeading
        id="building-preview"
        eyebrow="Currently Building"
        title="What I'm working on now"
        action={
          <LinkButton href="/currently-building" variant="outline">
            See Progress
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        }
      />
      <RevealGroup as="ul" className="mt-10 grid gap-5 md:grid-cols-2">
        {currentlyBuilding.map((project) => (
          <RevealItem as="li" key={project.title}>
            <BuildingCard project={project} compact />
          </RevealItem>
        ))}
      </RevealGroup>
    </HomeSection>
  )
}

export function SkillsPreview() {
  const highlights = skillGroups.flatMap((g) => g.skills).slice(0, 14)
  return (
    <HomeSection id="skills-preview" muted>
      <SectionHeading
        id="skills-preview"
        eyebrow="Skills"
        title="Tools I work with"
        action={
          <LinkButton href="/skills" variant="outline">
            View All Skills
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        }
      />
      <Reveal>
        <ul className="mt-8 flex flex-wrap gap-2">
          {highlights.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border bg-card/70 px-3 py-2 text-sm text-foreground/90"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </HomeSection>
  )
}

export function CredentialsPreview() {
  const latest = certifications.slice(0, 3)
  return (
    <HomeSection id="credentials-preview">
      <SectionHeading id="credentials-preview" eyebrow="Credentials" title="Certifications & achievements" />
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="rounded-xl border border-border bg-card/70 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Award className="size-4 text-primary" aria-hidden="true" />
            Latest of {certifications.length} credentials
          </div>
          <ul className="mt-4 divide-y divide-border">
            {latest.map((cert) => (
              <li key={cert.title} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-pretty font-medium">{cert.title}</span>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{cert.date}</span>
              </li>
            ))}
          </ul>
          <LinkButton href="/certifications" variant="outline" className="mt-4">
            View Certifications
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col rounded-xl border border-border bg-card/70 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Trophy className="size-4 text-violet" aria-hidden="true" />
            Milestones & competitions
          </div>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A dated timeline of verified milestones. Competition entries and hackathon results will be added as they
            happen.
          </p>
          <Link
            href="/achievements"
            className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-4 text-sm font-medium text-primary hover:underline"
          >
            View Achievements
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </HomeSection>
  )
}

export function ContactCta() {
  return (
    <section aria-labelledby="contact-cta">
      <Container className="pb-20">
        <Reveal className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 text-center sm:p-12">
          <div className="ambient-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative">
            <h2 id="contact-cta" className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
              {"Let's build something with data"}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Open to internships and entry-level roles in data science, machine learning, and AI engineering.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton href="/contact">
                <Mail aria-hidden="true" />
                Get in Touch
              </LinkButton>
              <LinkButton href={siteConfig.resume} variant="outline">
                View Resume
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
