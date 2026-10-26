import { Award, BadgeCheck, ExternalLink, FileText, GraduationCap } from 'lucide-react'
import type { Certification } from '@/lib/data/certifications'
import { linkButtonClass } from '@/components/link-button'

const typeIcon = {
  Certification: BadgeCheck,
  'Course Certificate': GraduationCap,
  Badge: Award,
}

export function CertificationCard({ cert }: { cert: Certification }) {
  const Icon = typeIcon[cert.type]
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card/70 p-5 transition-colors hover:border-primary/40 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {cert.type} · {cert.date}
        </span>
      </div>
      <h3 className="mt-4 text-pretty text-base font-semibold leading-snug">{cert.title}</h3>
      {cert.issuer && <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>}

      {(cert.details?.length || cert.credentialId || cert.validUntil) && (
        <dl className="mt-4 space-y-1.5 font-mono text-xs text-muted-foreground">
          {cert.details?.map((d) => (
            <div key={d}>
              <dt className="sr-only">Detail</dt>
              <dd className="break-words">{d}</dd>
            </div>
          ))}
          {cert.credentialId && (
            <div className="flex flex-wrap gap-x-1.5">
              <dt>Credential ID:</dt>
              <dd className="break-all text-foreground/80">{cert.credentialId}</dd>
            </div>
          )}
          {cert.validUntil && (
            <div className="flex flex-wrap gap-x-1.5">
              <dt>Valid until:</dt>
              <dd className="text-foreground/80">{cert.validUntil}</dd>
            </div>
          )}
        </dl>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <a
          href={cert.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkButtonClass('outline', 'min-h-10 px-3')}
        >
          <FileText aria-hidden="true" />
          View certificate
          <span className="sr-only">{` for ${cert.title}`}</span>
        </a>
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass('ghost', 'min-h-10 px-3')}
          >
            <ExternalLink aria-hidden="true" />
            Verify
            <span className="sr-only">{` ${cert.title}`}</span>
          </a>
        )}
      </div>
    </article>
  )
}
