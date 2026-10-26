import type { Metadata } from 'next'
import { FileText, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import { Container, PageHeader } from '@/components/section'
import { LinkButton } from '@/components/link-button'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/motion/reveal'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jaswanth Raj about internships and entry-level roles in data science, ML, and AI engineering.',
  alternates: { canonical: '/contact' },
}

const channels = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, Icon: Mail },
  { label: 'GitHub', value: siteConfig.github.handle, href: siteConfig.github.url, Icon: GitHubIcon },
  { label: 'LinkedIn', value: siteConfig.linkedin.handle, href: siteConfig.linkedin.url, Icon: LinkedInIcon },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="I'm open to internships and entry-level roles in data science, machine learning, and AI engineering. The fastest way to reach me is email."
      />
      <Container className="grid gap-8 pb-20 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <Reveal className="min-w-0 space-y-3">
          <ul className="space-y-3">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="flex min-h-16 items-center gap-4 rounded-xl border border-border bg-card/70 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted-foreground">{label}</span>
                    <span className="block break-all font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <LinkButton href={siteConfig.resume} variant="outline" className="w-full sm:w-auto">
            <FileText aria-hidden="true" />
            View Resume
          </LinkButton>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <h2 className="sr-only">Send a message</h2>
          <ContactForm />
        </Reveal>
      </Container>
    </>
  )
}
