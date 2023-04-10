/* função - controle de estados */

import { getDayName } from '../../../utils/getDate'

export const consoleNumber = (
  c,
  setSelectedDay,
  setDayName,
  setMonthEvent,
  month,
  year,
  setYearEvent,
) => {
  console.log('clicou:', c)
  setSelectedDay(c)
  setMonthEvent(month)
  setYearEvent(year)
  setDayName(getDayName(`${c}, ${month} ${year}`))
}
