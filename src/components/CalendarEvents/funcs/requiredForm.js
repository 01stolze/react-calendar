import { eventsData } from '../data'

export const handleRequiredForm = () => {
  const title = document.getElementById('title')
  const date = document.getElementById('date')
  const iconColor = document.querySelector('#colorBox')

  if (title.value.length > 0) {
    title.required = false
  } else {
    title.required = true
  }

  if (date.value.length > 0) {
    date.required = false
  } else {
    date.required = true
  }

  eventsData.forEach((data) => {
    if (
      data.date == date.value ||
      data.newDate == date.value ||
      data.new3Date == date.value ||
      data.new4Date == date.value ||
      data.new5Date == date.value
    ) {
      iconColor.disabled = true
    } else {
      iconColor.disabled = false
    }
  })
}
