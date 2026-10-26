'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const
const VIEWPORT = { once: true, margin: '0px 0px -8% 0px', amount: 0.1 } as const

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </Component>
  )
}

type RevealGroupProps = {
  children: ReactNode
  className?: string
  stagger?: number
  as?: 'div' | 'ul' | 'ol'
}

export function RevealGroup({ children, className, stagger = 0.08, as = 'div' }: RevealGroupProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Component>
  )
}

type RevealItemProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}

export function RevealItem({ children, className, as = 'div' }: RevealItemProps) {
  const Component = motion[as]
  return (
    <Component data-reveal="" className={className} variants={itemVariants}>
      {children}
    </Component>
  )
}
