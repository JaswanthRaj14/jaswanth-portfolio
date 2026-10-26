import { learningJourney, type LearningStage } from '@/lib/data/site'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { StatusBadge } from '@/components/section'

const stageTone: Record<LearningStage, 'success' | 'primary' | 'violet'> = {
  'Building with': 'success',
  'Actively learning': 'primary',
  'Up next': 'violet',
}

export function LearningTimeline() {
  return (
    <RevealGroup as="ol" className="relative space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-px before:bg-border">
      {learningJourney.map((step, index) => (
        <RevealItem as="li" key={step.title} className="relative grid grid-cols-[32px_1fr] gap-4">
          <span
            className="relative z-10 grid size-8 place-items-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0 rounded-xl border border-border bg-card/70 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-pretty text-base font-semibold">{step.title}</h3>
              <StatusBadge label={step.stage} tone={stageTone[step.stage]} />
            </div>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}
