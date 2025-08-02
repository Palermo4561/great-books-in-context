import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import CalendarEvent from '@/components/CalendarEvent'
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
    <Page id='events' className='bg-dark-blue'>
      <Text type='header'>Upcoming Events</Text>
      <Text type='p_md'>Don't miss out on free essay & discussion post help!</Text>
      <Text type='p_sm'>
        Full Google Calendar available{' '}
        <Link href={`https://calendar.google.com/calendar/embed?src=${import.meta.env.VITE_CALENDAR_ID}`}>here</Link>
      </Text>
      {err != null ? (
        <Text type='subheader' className='my-5'>
          Error loading events
        </Text>
      ) : events.length > 0 ? (
        events.map((event, idx) => <CalendarEvent key={idx} event={event} />)
      ) : (
        <Text type='header' className='my-5 font-bold italic'>
          No upcoming events, but stay tuned!
        </Text>
      )}
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
    </Page>
  )
}
