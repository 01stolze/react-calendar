/* função - controle de estados */

import { getDayName } from '../../../utils/getDate'

export const consoleNumber = (
  c,
  setSelectedDay,
  selectedDay,
  current,
  setDayName,
  setMonthEvent,
  month,
  year,
  setYearEvent,
) => {
  console.log('clicou:', c)
  setSelectedDay(c)
  console.log(c.parent)
  setMonthEvent(month)
  setYearEvent(year)
  setDayName(getDayName(`${c}, ${month} ${year}`))

  current.forEach((value) => {
    if (value == selectedDay) {
      setTimeout(() => {
        const currentDay = document
          .getElementsByClassName('day-number')
          .namedItem(c)
          .classList.add('selected')
        console.log(currentDay)
      }, 100)
    }
  })
}
