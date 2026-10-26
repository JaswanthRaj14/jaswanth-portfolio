import Link from 'next/link'
import { FileText, Mail } from 'lucide-react'
import { navItems, siteConfig } from '@/lib/data/site'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-card/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div className="min-w-0">
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Aspiring Data Scientist and AI Engineer. Open to internships and entry-level roles.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-5" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitHubIcon className="size-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedInIcon className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText className="size-5" aria-hidden="true" />
                <span className="sr-only">Resume (PDF)</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Pages</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
            {[{ href: '/', label: 'Home' }, ...navItems].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
          {'© 2026 '}
          {siteConfig.fullName}
        </p>
      </div>
    </footer>
  )
}
