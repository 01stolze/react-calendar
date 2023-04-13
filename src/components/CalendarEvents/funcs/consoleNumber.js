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
  setMonthEvent(month)
  setYearEvent(year)
  setDayName(getDayName(`${c}, ${month} ${year}`))

  //   current.forEach((value) => {
  //     if (value == selectedDay) {
  //       setTimeout(() => {
  //         const currentDay = document
  //           .getElementsByClassName('day-number')
  //           .namedItem(c)
  //           .classList.add('selected')
  //         console.log(currentDay)
  //       }, 100)
  //     }
  //   })

  current.forEach((gridDays) => {
    const getSelectedDay = new Promise((resolve, reject) => {
      resolve(document.getElementsByClassName('day-number'))
      reject('DAY-NUMBER NÃO ENCONTRADO')
    })

    if (gridDays == selectedDay) {
      getSelectedDay
        .then((element) => element.namedItem(c).classList.add('selected'))
        .catch((error) => console.error(error))
    }
  })
}
