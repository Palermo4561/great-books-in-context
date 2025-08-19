import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface ImageContainerProps extends HTMLAttributes<HTMLDivElement> {
  imagePath: string
}

export default function ImageContainer({ imagePath, className, ...props }: ImageContainerProps) {
  return (
    <div className={cn('', className)} {...props}>
      <div className='bg-light-red w-auto rounded-2xl shadow-2xl p-5  shadow-dark-red object-contain'>
        <img aria-label={imagePath} src={imagePath} className='rounded-3xl border-2' />
      </div>
    </div>
  )
}
