import { CalendarPlus, Clock, DoorClosed, MapPin } from 'lucide-react'
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

const NotProvidedText = () => (
  <Text type='p_sm' className='opacity-50 italic p-0!'>
    Not Provided
  </Text>
)

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
  const dateString = `${startDate.getMonth() + 1}/${startDate.getDate()}`

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
  // note that these have to be in the same order for it to make sense
  const smallGridText = [timeString, building, roomNumber]
  const lucidIconsProps = {
    className: 'size-[2vw]',
  }
  const smallGridIcons = [
    <Clock {...lucidIconsProps} />,
    <MapPin {...lucidIconsProps} />,
    <DoorClosed {...lucidIconsProps} />,
  ]

  return (
    <div
      className={cn(
        'bg-dark-blue mx-[4vw] my-[0.8vw] flex h-[14vw] sm:h-[11vw] flex-row rounded p-[0.5vw] text-center',
        className
      )}
      {...props}
    >
      <MiniBubble className='aspect-square flex flex-col justify-center items-center'>
        <Text type='p_sm' className='font-bold m-0! p-0!'>
          {dayOfTheWeek + '.'}
        </Text>
        <Text type='subheader' className='m-0! p-0!'>
          {dateString}
        </Text>
      </MiniBubble>
      <div className='grid flex-1 h-full text-nowrap grid-cols-[5fr_2fr] p-0'>
        <MiniBubble className='pl-[1vw] grid grid-rows-2 justify-start items-center min-w-0'>
          <div className='flex flex-row items-center min-w-0'>
            <Text
              title={title}
              type='p_md'
              className='underline p-0! overflow-hidden text-ellipsis text-nowrap min-w-0'
            >
              {title}
            </Text>
          </div>
          {speaker !== '' && (
            <div className='flex flex-row items-center min-w-0'>
              <Text
                title={speaker}
                type='p_sm'
                className='p-0! mb-auto overflow-hidden text-ellipsis text-nowrap min-w-0'
              >
                {speaker}
              </Text>
            </div>
          )}
        </MiniBubble>

        <MiniBubble className='grid grid-rows-3 px-[0.5vw] justify-start items-center '>
          {smallGridText.map((text, idx) => (
            <div className='flex flex-row justify-start items-center p-0'>
              <div className='mr-[0.5vw] '>{smallGridIcons[idx]}</div>
              {text !== '' ? (
                <Text type='p_sm' title={text} className='p-0! overflow-hidden text-ellipsis text-nowrap min-w-0'>
                  {text}
                </Text>
              ) : (
                <NotProvidedText />
              )}
            </div>
          ))}
        </MiniBubble>
      </div>
      <MiniBubble className='bg-dark-red aspect-square p-0.5'>
        <a
          title='Export event to Google Calendar'
          rel='noopener'
          className='w-full h-full flex items-center justify-center'
          href={event?.htmlLink}
          target='_blank'
        >
          <CalendarPlus className='grow size-1/2' color='white' />
        </a>
      </MiniBubble>
    </div>
  )
}
