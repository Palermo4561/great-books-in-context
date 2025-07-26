import type { HTMLAttributes, JSX, ReactNode } from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '@/lib/utils'

// headliner = the first text
// header = header at the top of each section
// subheader = headers within the section
// p_md = medium paragraph
// p_sm = small paragraph
type TextKey = 'headliner' | 'header' | 'subheader' | 'p_md' | 'p_sm'

const TEXT_TYPE_MAP: Record<TextKey, keyof JSX.IntrinsicElements> = {
  headliner: 'h1',
  header: 'h2',
  subheader: 'h3',
  p_md: 'p',
  p_sm: 'p',
}

const text = tv({
  base: 'text-black text-center p-4',
  variants: {
    variant: {
      headliner: 'text-8xl',
      header: 'text-7xl',
      subheader: 'text-4xl',
      p_md: 'text-3xl',
      p_sm: 'text-2xl',
    } as Record<TextKey, string>,
  },
})

interface TextProps extends HTMLAttributes<HTMLElement> {
  type: TextKey
  children: ReactNode
}

export default function Text({ type, children, className, ...props }: TextProps) {
  const Tag = TEXT_TYPE_MAP[type]

  return (
    // this was yelling at me because of the Tag, but it works so I'm ignoring it
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Tag className={cn(text({ variant: type }), className)} {...props}>
      {children}
    </Tag>
  )
}
