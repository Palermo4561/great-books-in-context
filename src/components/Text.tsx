import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

// headliner = the first text
// header = header at the top of each section
// subheader = headers within the section
// p_md = medium paragraph
// p_sm = small paragraph
type TextKey = 'headliner' | 'header' | 'subheader' | 'p_md' | 'p_sm'

const TEXT_TYPE_MAP: Record<TextKey, ElementType> = {
  headliner: 'h1',
  header: 'h2',
  subheader: 'h3',
  p_md: 'p',
  p_sm: 'p',
}

const text = tv({
  base: 'text-black text-center xl:p-4 lg:p-3 md:p-2 p-1',
  variants: {
    variant: {
      headliner: 'md:text-7xl xl:text-8xl sm:text-6xl lg:text-[5rem] text-4xl',
      header: 'xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl',
      subheader: 'xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg',
      p_md: 'xl:text-3xl lg:text-2xl md:text-xl text-sm',
      p_sm: 'xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs',
    },
  },
})

interface TextProps extends HTMLAttributes<HTMLElement> {
  type: TextKey
  children: ReactNode
}

export default function Text({ type, children, className, ...props }: TextProps) {
  const Tag = TEXT_TYPE_MAP[type]

  return (
    <Tag className={cn(text({ variant: type }), className)} {...props}>
      {children}
    </Tag>
  )
}
