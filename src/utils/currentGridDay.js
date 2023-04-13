import { switchMonth } from '../components/DisplayMonth/displayMonth'
import { getCurrentDayNumber, getMonth } from './getDate'

export const currentGridDay = (month, dayNumberData, year) => {
  const current = switchMonth(month, dayNumberData, year)

  current.filter((gridDays) => {
    const getElementDayNumber = new Promise((resolve, reject) => {
      resolve(document.getElementsByClassName('day-number'))
      reject('CANNOT FIND DAY-NUMBER')
    })

    if (gridDays == getCurrentDayNumber() && getMonth() == month) {
      getElementDayNumber
        .then((element) => element.namedItem(gridDays).classList.add('current'))
        .catch((error) => console.log(error))
    }
  })
}
