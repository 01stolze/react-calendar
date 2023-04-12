import { eventsData } from '../components/CalendarEvents/data'

export const getGridEvent = (c) => {
  eventsData.forEach((data) => {
    if (data.date.slice(8) == c) {
      console.log(c)
      setTimeout(() => {
        const text = document.createTextNode(`${data.title}`)
        document
          .getElementsByClassName('day-number')
          .namedItem(c)
          .appendChild(text)
      })
    }
  })
}
