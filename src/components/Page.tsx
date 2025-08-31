import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Page({ children, className, ...props }: PageProps) {
  return (
    <div className={cn('m-[3vw] rounded-4xl h-fit items-center justify-center', className)} {...props}>
      {children}
    </div>
  )
}
