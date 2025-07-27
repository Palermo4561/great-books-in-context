import { cn } from '@/lib/utils'
import type { HTMLAttributes, ReactNode } from 'react'

interface MiniBubbleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const MiniBubble = ({ children, className, ...props }: MiniBubbleProps) => {
  return (
    <div className={cn('bg-light-tan m-2 rounded', className)} {...props}>
      {children}
    </div>
  )
}

export default function CalendarEvent() {
  return (
    <div className="bg-light-blue mx-8 my-4 flex h-30 w-auto flex-row justify-between rounded p-2 text-center">
      <MiniBubble className="aspect-square">Date</MiniBubble>
      <div className="grid h-full w-full grid-cols-[3fr_1fr] p-0">
        <MiniBubble>Title</MiniBubble>
        <MiniBubble>Location</MiniBubble>
      </div>
      <MiniBubble className="bg-dark-red aspect-square">Add</MiniBubble>
    </div>
  )
}
