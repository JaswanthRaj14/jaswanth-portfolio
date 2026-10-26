import { ExternalLink } from 'lucide-react'
import { certifications } from '@/lib/data/certifications'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

export function MilestonesTimeline() {
  return (
    <RevealGroup
      as="ol"
      className="relative space-y-6 border-l border-border pl-6 sm:pl-8"
    >
      {certifications.map((cert) => (
        <RevealItem as="li" key={cert.title} className="relative">
          <span
            className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[37px]"
            aria-hidden="true"
          />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{cert.date}</p>
          <h3 className="mt-1.5 text-pretty text-base font-semibold sm:text-lg">{cert.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {[cert.type, cert.issuer].filter(Boolean).join(' · ')}
          </p>
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-sm text-primary hover:underline"
            >
              Verify credential
              <ExternalLink className="size-3.5" aria-hidden="true" />
              <span className="sr-only">{` for ${cert.title}`}</span>
            </a>
          )}
        </RevealItem>
      ))}
    </RevealGroup>
  )
}
