import type { HTMLAttributes, ReactNode } from 'react'

import Text from '@/components/Text'
import { cn } from '@/lib/utils'
import type { GoogleCalendarEventType } from '@/types/calendar.type'

interface MiniBubbleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const MiniBubble = ({ children, className, ...props }: MiniBubbleProps) => {
  return (
    <div className={cn('bg-light-tan m-2 flex flex-col rounded', className)} {...props}>
      {children}
    </div>
  )
}

interface CalendarEventProps extends HTMLAttributes<HTMLDivElement> {
  event: GoogleCalendarEventType
}

export default function CalendarEvent({ event, className, ...props }: CalendarEventProps) {
  // loading
  const startDate = new Date(event.start.dateTime)
  const endDate = new Date(event.end.dateTime)
  const locale = 'en-US'

  // date
  const dayOfTheWeek = startDate.toLocaleDateString(locale, {
    weekday: 'short',
  })
  const dateString = `${startDate.getMonth()}/${startDate.getDate()}`

  // details
  const title = event.summary
  const regexFindSpeaker = /.*[Ss]peaker:\s*(.*)/.exec(event.description) ?? []
  const speaker = regexFindSpeaker.length > 1 ? regexFindSpeaker[1] : ''

  // location
  const startTime = startDate
    .toLocaleTimeString(locale, {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
    })
    .replace(/ ?[AP]M/i, '')
  const endTime = endDate.toLocaleTimeString(locale, {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
  })
  const timeString = `${startTime} - ${endTime}`
  const building = event.location?.split(',').pop()
  const regexFindRoomNumber = /.*[Rr]oom:\s*(.*)/.exec(event.description) ?? []
  const roomNumber = regexFindRoomNumber.length > 1 ? regexFindRoomNumber[1] : ''

  // add button

  return (
    <div
      className={cn(
        'bg-light-blue mx-8 my-4 flex h-35 w-auto flex-row justify-between rounded p-2 text-center',
        className
      )}
      {...props}
    >
      <MiniBubble className='aspect-square justify-center'>
        <Text className='p-0' type='p_sm'>
          {dayOfTheWeek}
        </Text>
        <Text className='p-0' type='p_sm'>
          {dateString}
        </Text>
      </MiniBubble>
      <div className='grid h-full w-full grid-cols-[3fr_1fr] p-0'>
        <MiniBubble className='justify-center'>
          <Text className='self-start py-0' type='p_sm'>
            {title}
          </Text>
          {speaker === '' ? undefined : (
            <Text className='self-start py-0' type='p_sm'>
              {speaker}
            </Text>
          )}
        </MiniBubble>
        <MiniBubble className='grid grid-rows-3 justify-baseline'>
          <Text className='flex flex-row self-start py-0 pl-2' type='p_sm'>
            {timeString}
          </Text>
          <Text className='flex flex-row self-start py-0 pl-2' type='p_sm'>
            {building}
          </Text>
          <Text className='flex flex-row self-start py-0 pl-2' type='p_sm'>
            {roomNumber}
          </Text>
        </MiniBubble>
      </div>
      <MiniBubble className='bg-dark-red aspect-square'>Add</MiniBubble>
    </div>
  )
}
