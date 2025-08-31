import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface ImageContainerProps extends HTMLAttributes<HTMLDivElement> {
  imagePath: string
}

export default function ImageContainer({ imagePath, className, ...props }: ImageContainerProps) {
  return <></>
}
