import { eventsData } from '../data'
import { get0Number } from './get0Number'

export const disabledAdd = (yearEvent, selectedDay, monthEvent) => {
  const selectedDateOrganized = `${yearEvent}-${get0Number(
    'month',
    selectedDay,
    monthEvent,
  )}-${get0Number('day', selectedDay, monthEvent)}`

  let disabled = false

  eventsData.forEach((data) => {
    if (
      data.date == data.newDate &&
      data.date == data.new3Date &&
      data.date == data.new4Date &&
      data.date == data.new4Date &&
      data.date == data.new5Date
    ) {
      if (data.date == selectedDateOrganized) {
        console.log('block: tem 5 eventos')
        disabled = true
      }
    }
  })
  return disabled
}
