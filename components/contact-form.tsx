'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import { cn } from '@/lib/utils'

type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.'
  return errors
}

const inputClass =
  'w-full rounded-lg border bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 sm:text-sm'

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState('Opens your email app — nothing is stored on this site.')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    }
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstInvalid = (Object.keys(nextErrors) as Field[])[0]
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus()
      setStatus('Please fix the highlighted fields.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with the message ready to send.')
  }

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-sm text-destructive">
        {errors[field]}
      </p>
    ) : null

  const describedBy = (field: Field) => (errors[field] ? `${field}-error` : undefined)

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card/70 p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={100}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={cn(inputClass, errors.name ? 'border-destructive' : 'border-border')}
          />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={200}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            className={cn(inputClass, errors.email ? 'border-destructive' : 'border-border')}
          />
          {fieldError('email')}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="Tell me about the role or project…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          className={cn(inputClass, 'resize-y', errors.message ? 'border-destructive' : 'border-border')}
        />
        {fieldError('message')}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
        >
          <Send className="size-4" aria-hidden="true" />
          Send message
        </button>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  )
}
