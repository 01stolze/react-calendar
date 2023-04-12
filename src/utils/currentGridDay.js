import { getMonth } from './getDate'

export const currentGridDay = (c, month) => {
  if (getMonth() == month) {
    setTimeout(() => {
      const currentDay = document
        .getElementsByClassName('day-number')
        .namedItem(c)
        .classList.add('current')
      console.log(c, currentDay)
    })
  }
}
