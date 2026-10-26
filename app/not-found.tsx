import { Container, Eyebrow } from '@/components/section'
import { LinkButton } from '@/components/link-button'

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">
        {"The page you're looking for doesn't exist or may have moved."}
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <LinkButton href="/">Go home</LinkButton>
        <LinkButton href="/projects" variant="outline">
          Browse projects
        </LinkButton>
      </div>
    </Container>
  )
}
