/* função get data inputs */

import { eventsData } from '../data'

export const getFormData = (
  setIsOpen,
  setEventTitle,
  setEventDate,
  d,
  setD,
  setEditState,
) => {
  const title = document.querySelector('#title')
  const date = document.querySelector('#date')
  const description = document.querySelector('#description')
  const hourStart = document.querySelector('#begin-time')
  const hourEnd = document.querySelector('#end-time')

  /* valores opcionais  */
  description.value == null
  hourStart.value == null
  hourEnd.value == null

  /* title e date required */
  if (title.length <= 0 || date.value.length <= 0) {
    setIsOpen(true)
  } else {
    /* conferir se o evento está sendo adicionado no mesmo
      dia de outro */

    const sameDayEvent = () => {
      let sameDay = null
      eventsData.forEach((data) => {
        if (date.value == data.date) {
          console.log('entrou aqui')
          sameDay = data
        } else if (date.value == data.newDate) {
          console.log('entrou aqui2')
          sameDay = data
        } else if (date.value == data.new3Date) {
          console.log('entrou aqui3')
          sameDay = data
        } else if (date.value == data.new4Date) {
          console.log('entrou aqui4')
          sameDay = data
        } else if (date.value == data.new5Date) {
          console.log('entrou aqui5')
          sameDay = data
        }
      })
      return sameDay
    }

    console.log('samedayEvent:', sameDayEvent())

    /* tratar múltiplios eventos no
      mesmo dia (max = 5) */

    if (sameDayEvent()) {
      console.log('VOCE ESTA TENTANDO COLOCAR EVNEOTS NO MESMO DIA ')
      // --------------------ARRUMAR ISSOa---------------------------------

      // adicionar corretamente dados apagados

      let data = sameDayEvent()

      if (data.title == '') {
        console.log('title foi apagado, adicione ele')
        data.title = title.value
        data.date = date.value
        data.description = description.value
        data.hourStart = hourStart.value
        data.hourEnd = hourEnd.value
      } else if (data.newTitle == '') {
        console.log('newTitle foi apagado, adicione ele')
        data.newTitle = title.value
        data.newDate = date.value
        data.newDescription = description.value
        data.newHourStart = hourStart.value
        data.newHourEnd = hourEnd.value
      } else if (data.new3Title == '') {
        console.log('new3Title foi apagado, adicione ele')
        data.new3Title = title.value
        data.new3Date = date.value
        data.new3Description = description.value
        data.new3HourStart = hourStart.value
        data.new3HourEnd = hourEnd.value
      } else if (data.new4Title == '') {
        console.log('new4Title foi apagado, adicione ele')
        data.new4Title = title.value
        data.new4Date = date.value
        data.new4Description = description.value
        data.new4HourStart = hourStart.value
        data.new4HourEnd = hourEnd.value
      } else if (data.new5Title == '') {
        console.log('new5Title foi apagado, adicione ele')
        data.new5Title = title.value
        data.new5Date = date.value
        data.new5Description = description.value
        data.new5HourStart = hourStart.value
        data.new5HourEnd = hourEnd.value
      }

      // se nenhum valor foi apagado, adicione-os pela primeira vez
      else if (
        !data.title &&
        !data.newTitle &&
        !data.new3Title &&
        !data.new4Title &&
        !data.new5Title
      ) {
        console.warn('adicionando o title')
        data.title = title.value
        data.date = date.value
        data.description = description.value
        data.hourStart = hourStart.value
        data.hourEnd = hourEnd.value
      } else if (
        !!data.title &&
        !data.newTitle &&
        !data.new3Title &&
        !data.new4Title &&
        !data.new5Title
      ) {
        console.warn('adicionando o newTitle...')
        data.newTitle = title.value
        data.newDate = date.value
        data.newDescription = description.value
        data.newHourStart = hourStart.value
        data.newHourEnd = hourEnd.value
      } else if (
        // adicionar new3Title
        !!data.title &&
        !!data.newTitle &&
        !data.new3Title &&
        !data.new4Title &&
        !data.new5Title
      ) {
        console.warn('adicionando o new3Title...')
        data.new3Title = title.value
        data.new3Date = date.value
        data.new3Description = description.value
        data.new3HourStart = hourStart.value
        data.new3HourEnd = hourEnd.value
      } else if (
        // adicionar o new4Title
        !!data.title &&
        !!data.newTitle &&
        !!data.new3Title &&
        !data.new4Title &&
        !data.new5Title
      ) {
        console.warn('adicionando o new4Title...')
        data.new4Title = title.value
        data.new4Date = date.value
        data.new4Description = description.value
        data.new4HourStart = hourStart.value
        data.new4HourEnd = hourEnd.value
      } else if (
        // adicionar o new5Title
        !!data.title &&
        !!data.newTitle &&
        !!data.new3Title &&
        !!data.new4Title &&
        !data.new5Title
      ) {
        console.warn('adicionando o new5Title...')
        data.new5Title = title.value
        data.new5Date = date.value
        data.new5Description = description.value
        data.new5HourStart = hourStart.value
        data.new5HourEnd = hourEnd.value
      }
    } else {
      console.warn('ta safe KAKKK')
      eventsData[d] = {
        title: `${title.value}`,
        date: `${date.value}`,
        description: `${description.value}`,
        hourStart: `${hourStart.value}`,
        hourEnd: `${hourEnd.value}`,
      }
    }
    setD((c) => c + 1)
    setEventTitle(title.value)
    setEventDate(date.value)
    setIsOpen(false)
    setEditState(false)
  }
}
