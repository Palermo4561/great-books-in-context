export async function getCalendarEvents(calendarID?: string | undefined, apiKey?: string | undefined) {
  const CALENDAR_ID = calendarID ?? import.meta.env.VITE_CALENDAR_ID
  const API_KEY = apiKey ?? import.meta.env.VITE_GOOGLE_API_KEY

  const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`)
  if (!res.ok) throw new Error('Failed to fetch calendar events')
  const data = await res.json()
  return data.items
}
