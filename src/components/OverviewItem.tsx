import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import Text from './Text'

interface OverviewItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  src: string
}

export default function OverviewItem({ title, description, src, className, ...props }: OverviewItemProps) {
  return (
    <div className={cn('p-2 rounded-2xl bg-light-red shadow-2xl grid grid-cols-2', className)} {...props}>
      <div className='shadow-dark-red object-contain '>
        <img aria-label={src} src={src} className='rounded-3xl border-2' />
      </div>
      <div className='flex flex-col justify-center'>
        <Text type='p_md' className='font-bold'>
          {title}
        </Text>
        {description !== '' && <Text type='p_sm'>{description}</Text>}
      </div>
    </div>
  )
}
