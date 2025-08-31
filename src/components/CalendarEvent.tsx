import type { HTMLAttributes, ReactNode } from 'react'

import Text from '@/components/Text'
import { cn } from '@/lib/utils'
import type { GoogleCalendarEventType } from '@/types/calendar.type'

interface MiniBubbleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const MiniBubble = ({ children, className, ...props }: MiniBubbleProps) => {
  return (
    <div className={cn('bg-dark-tan m-2 rounded', className)} {...props}>
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
    <div className={cn('bg-dark-blue mx-20 my-4 flex h-35 flex-row rounded p-2 text-center', className)} {...props}>
      <MiniBubble className='aspect-square flex flex-col justify-center items-center'>
        <Text type='p_sm' className='font-bold m-0! p-0!'>
          {dayOfTheWeek + '.'}
        </Text>
        <Text type='subheader' className='m-0! p-0!'>
          {dateString}
        </Text>
      </MiniBubble>
      <div className='grid flex-1 h-full text-nowrap overflow-ellipsis grid-cols-[5fr_2fr] p-0'>
        <MiniBubble className='pl-4 grid grid-rows-2 justify-start items-center'>
          <Text className='underline p-0! text-nowrap w-fit ' type='p_md'>
            {/* TODO: get text wrapping to work, so there's no overflow */}
            {title}
          </Text>
          {speaker !== '' && (
            <Text className='p-0! mr-auto mb-auto' type='p_sm'>
              {speaker}
            </Text>
          )}
        </MiniBubble>
        <MiniBubble className='grid grid-rows-3 justify-start'>
          <Text type='p_sm' className='p-0!'>
            {timeString}
          </Text>
          <Text type='p_sm' className='p-0!'>
            {building}
          </Text>
          <Text type='p_sm' className='p-0!'>
            {roomNumber}
          </Text>
        </MiniBubble>
      </div>
      <MiniBubble className='bg-dark-red aspect-square'>Add</MiniBubble>
    </div>
  )
}
