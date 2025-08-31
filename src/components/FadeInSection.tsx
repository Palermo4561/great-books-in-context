import { useEffect, useRef, useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface FadeInSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function FadeInSection({ children, className, ...props }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const obs = new IntersectionObserver((entries) => {
      entries.map((entry) => setVisible(entry.isIntersecting))
    })

    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 invisible transition-[opacity,transform,visibility] duration-1000 ease-in-out will-change-[opacity,transform,visibility]',
        isVisible ? 'opacity-100 visible' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
