import { useEffect, useState } from 'react'
import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

import CalendarEvent from '@/components/CalendarEvent'
import FadeInSection from '@/components/FadeInSection'
import Page from '@/components/Page'
import Text from '@/components/Text'
import { getCalendarEvents } from '@/lib/calendar'
import { cn, googleDateTimeToMs } from '@/lib/utils'
import type { GoogleCalendarEventType } from '@/types/calendar.type'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <a target='_blank' className={cn('text-light-blue underline', className)} {...props}>
      {children}
    </a>
  )
}

interface WrapProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

const Wrap = ({ children, className, ...props }: WrapProps) => (
  <FadeInSection>
    <div
      className={cn(
        'p-2 bg-dark-blue rounded-2xl w-full shadow-lg border-light-blue border-2 shadow-dark-blue',
        className
      )}
      {...props}
    >
      {children}
    </div>
  </FadeInSection>
)

export default function Events() {
  const [events, setEvents] = useState<GoogleCalendarEventType[]>([])
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await getCalendarEvents()
        const upcomingEvents = await data.filter(
          (item: GoogleCalendarEventType) => googleDateTimeToMs(item.end.dateTime) > Date.now()
        )
        const sortedUpcoming = await upcomingEvents.sort(
          (x: GoogleCalendarEventType, y: GoogleCalendarEventType) =>
            googleDateTimeToMs(x.start.dateTime) - googleDateTimeToMs(y.start.dateTime)
        )
        setEvents(sortedUpcoming)
      } catch (err: any) {
        setErr(err.message)
      }
    }
    loadEvents()
  }, [])

  return (
    <Page id='events' className='flex flex-col gap-10'>
      <Wrap>
        <Text type='header'>Upcoming Events</Text>
        <Text type='p_md'>Don't miss out on free essay & discussion post help!</Text>
        <Text type='p_sm'>
          Full Google Calendar available{' '}
          <Link href={`https://calendar.google.com/calendar/embed?src=${import.meta.env.VITE_CALENDAR_ID}`}>here</Link>
        </Text>
      </Wrap>

      {err != null ? (
        <Text type='subheader' className='my-5'>
          Error loading events
        </Text>
      ) : events.length > 0 ? (
        events.map((event, idx) => (
          <FadeInSection className='w-full' key={idx}>
            <CalendarEvent event={event} />
          </FadeInSection>
        ))
      ) : (
        <Text type='header' className='my-5 font-bold italic'>
          No upcoming events, but stay tuned!
        </Text>
      )}

      <Wrap>
        <Text type='p_sm'>
          ...with more always being added. Get the{' '}
          <Link href={`https://calendar.google.com/calendar/u/0/r?cid=${import.meta.env.VITE_CALENDAR_ID}`}>
            full calendar
          </Link>{' '}
          or{' '}
          <Link target='_self' href='#signup'>
            join the mailing list
          </Link>{' '}
          to never miss an event.
        </Text>
      </Wrap>
    </Page>
  )
}
