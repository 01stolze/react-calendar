import { eventsData } from '../components/CalendarEvents/data'
import { getMonth } from './getDate'

export const getGridEvent = (month, current) => {
  const getGridEvent = new Promise((resolve, reject) => {
    resolve(document.getElementsByClassName('day-number'))
    reject('NÃO FOI POSSÍVEL ENCONTRAR DAY-NUMBER ESPECIFICADO!')
  })
  current.forEach((gridDays) => {
    eventsData.forEach((data) => {
      if (data.date.slice(8) == gridDays && getMonth() == month) {
        const p = document.createElement('p')
        p.classList.add('event-icon')
        p.style.background = `${data.iconColor}`
        getGridEvent
          .then((element) => element.namedItem(gridDays).appendChild(p))
          .catch((error) => console.error(error))
      }
    })
  })
}
