import type { HTMLAttributes } from 'react'

interface ImageContainerProps extends HTMLAttributes<HTMLDivElement> {
  imagePath: string
}

export default function ImageContainer({ imagePath, className, ...props }: ImageContainerProps) {
  return <></>
}
