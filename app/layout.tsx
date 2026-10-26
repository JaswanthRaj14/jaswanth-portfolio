import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from '@/lib/data/site'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Aspiring Data Scientist & AI Engineer`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    'Portfolio of Jaswanth Raj, a B.Tech CSE student and aspiring data scientist and AI engineer building projects in data analysis, machine learning, and AI.',
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} — Aspiring Data Scientist & AI Engineer`,
    description:
      'Hands-on projects across data analysis, predictive modeling, and AI-powered applications.',
  },
  twitter: { card: 'summary' },
}

export const viewport: Viewport = {
  themeColor: '#0b1020',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body className="min-h-dvh antialiased">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-bg" aria-hidden="true" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="min-w-0">
          {children}
        </main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
