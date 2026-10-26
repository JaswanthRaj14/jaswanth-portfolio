import { ArrowDownRight, FileText, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import { LinkButton } from '@/components/link-button'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { Container } from '@/components/section'
import { NeuralNet } from '@/components/home/neural-net'

const delay = (ms: number) => ({ ['--delay' as string]: `${ms}ms` })

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-border">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        <div className="min-w-0">
          <p
            className="rise-in inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground"
            style={delay(0)}
          >
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {siteConfig.badge}
          </p>
          <h1
            id="hero-title"
            className="rise-in mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
            style={delay(80)}
          >
            {siteConfig.name}
          </h1>
          <p
            className="rise-in mt-4 text-pretty font-mono text-sm leading-relaxed text-primary sm:text-base"
            style={delay(160)}
          >
            {siteConfig.headline}
          </p>
          <p
            className="rise-in mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={delay(240)}
          >
            {siteConfig.tagline}
          </p>

          <div className="rise-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={delay(320)}>
            <LinkButton href="/projects">
              View Projects
              <ArrowDownRight aria-hidden="true" />
            </LinkButton>
            <LinkButton href={siteConfig.resume} variant="outline">
              <FileText aria-hidden="true" />
              View Resume
            </LinkButton>
            <LinkButton href="/contact" variant="outline">
              <Mail aria-hidden="true" />
              Contact Me
            </LinkButton>
          </div>

          <ul className="rise-in mt-6 flex flex-wrap gap-2" style={delay(400)}>
            <li>
              <LinkButton href={siteConfig.github.url} variant="ghost">
                <GitHubIcon />
                GitHub
              </LinkButton>
            </li>
            <li>
              <LinkButton href={siteConfig.linkedin.url} variant="ghost">
                <LinkedInIcon />
                LinkedIn
              </LinkButton>
            </li>
          </ul>
        </div>

        <div className="rise-in mx-auto w-full max-w-lg min-w-0" style={delay(200)}>
          <NeuralNet />
        </div>
      </Container>
    </section>
  )
}
