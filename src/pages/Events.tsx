import Page from '@/components/Page'
import Text from '@/components/Text'
import { cn } from '@/lib/utils'

import type { ReactNode } from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <a target="_blank" className={cn('text-light-blue underline', className)} {...props}>
      {children}
    </a>
  )
}

export default function Events() {
  return (
    <Page className="bg-dark-blue">
      <Text type="header">Upcoming Events</Text>
      <Text type="p_md">Don't miss out on free essay & discussion post help!</Text>
      <Text type="p_sm">
        Full Google Calendar available <Link href="www.google.com">here</Link>
      </Text>
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="bg-light-blue mx-8 my-4 h-30 w-auto rounded-2xl text-center" />
      ))}
      <Text type="p_sm">
        ...with more always being added. Get the <Link href="www.google.com">full calendar</Link> or{' '}
        <Link href="www.google.com">join the mailing list</Link> to never miss an event.
      </Text>
    </Page>
  )
}
