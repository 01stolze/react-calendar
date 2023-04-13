import { eventsData } from '../components/CalendarEvents/data'
import { getMonth } from './getDate'

export const getGridEvent = (month, current) => {
  current.forEach((gridDays) => {
    const getGridEvent = new Promise((resolve, reject) => {
      resolve(document.getElementsByClassName('day-number'))
      reject('NÃO FOI POSSÍVEL ENCONTRAR DAY-NUMBER ESPECIFICADO!')
    })
    eventsData.forEach((data) => {
      const p = document.createElement('p')
      p.classList.add('event-title')
      const text = document.createTextNode(`${data.title}`)
      p.appendChild(text)
      if (data.date.slice(8) == gridDays && getMonth() == month) {
        getGridEvent
          .then((element) => element.namedItem(gridDays).appendChild(p))
          .catch((error) => console.error(error))
      }
    })
  })
}
