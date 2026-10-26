import { BarChart3, BrainCircuit, Code2, Database, Sparkles } from 'lucide-react'
import type { SkillGroup } from '@/lib/data/site'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const icons = [Code2, BarChart3, BrainCircuit, Database, Sparkles]

export function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <RevealGroup as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, index) => {
        const Icon = icons[index % icons.length]
        return (
          <RevealItem
            as="li"
            key={group.title}
            className={cn(
              'rounded-xl border bg-card/70 p-5 sm:p-6',
              group.learning ? 'border-violet/30' : 'border-border',
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  'grid size-10 place-items-center rounded-lg',
                  group.learning ? 'bg-violet/10 text-violet' : 'bg-primary/10 text-primary',
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold">{group.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1.5 text-sm text-foreground/90"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </RevealItem>
        )
      })}
    </RevealGroup>
  )
}
