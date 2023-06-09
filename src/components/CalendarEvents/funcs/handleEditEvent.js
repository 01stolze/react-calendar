import { openModal } from '../Modal'
import { editEventsData, eventsData } from '../data'

/* função para editar modal inputs/eventos */

export const handleEditEvent = (
  wichEvent,
  setIsOpen,
  setFeedBackM,
  currentEvent,
  setEditState,
) => {
  console.log('editeventsData:', editEventsData)
  if (wichEvent != null && wichEvent != 'delete') {
    /* aplicar valores anteriores do dia selecionado
      aos input quando requisitar a edição de um evento */
    const e = currentEvent

    switch (wichEvent) {
      case 'first': {
        editEventsData[0] = e
        break
      }
      case 'second': {
        editEventsData[0] = {
          title: e.newTitle,
          date: e.newDate,
          description: e.newDescription,
          hourStart: e.newHourStart,
          hourEnd: e.newHourEnd,
          iconColor: e.newIconColor,
        }
        break
      }
      case 'third': {
        editEventsData[0] = {
          title: e.new3Title,
          date: e.new3Date,
          description: e.new3Description,
          hourStart: e.new3HourStart,
          hourEnd: e.new3HourEnd,
          iconColor: e.new3IconColor,
        }
        break
      }
      case 'four': {
        editEventsData[0] = {
          title: e.new4Title,
          date: e.new4Date,
          description: e.new4Description,
          hourStart: e.new4HourStart,
          hourEnd: e.new4HourEnd,
          iconColor: e.new4IconColor,
        }
        break
      }
      case 'five': {
        editEventsData[0] = {
          title: e.new5Title,
          date: e.new5Date,
          description: e.new5Description,
          hourStart: e.new5HourStart,
          hourEnd: e.new5HourEnd,
          iconColor: e.new5IconColor,
        }
        break
      }
    }
    setEditState(true)
    openModal(setIsOpen)
  } else {
    /* realmente editar os eventos */
    const title = document.querySelector('#title')
    const date = document.querySelector('#date')
    const description = document.querySelector('#description')
    const hourStart = document.querySelector('#begin-time')
    const hourEnd = document.querySelector('#end-time')
    const iconColor = document.querySelector('#colorBox')
    console.log('REALMENTE EDITAR OS EVENTOS, noufa garai')
    console.log('evento a ser editado:', editEventsData)

    eventsData.forEach((data) => {
      if (editEventsData[0].title == data.title) {
        if (wichEvent == 'delete') {
          console.warn('removendo o title')
          data.title = ''
          data.date = ''
          data.description = ''
          data.hourStart = ''
          data.hourEnd = ''
          data.iconColor = ''
        } else {
          console.log('CHEGOU AQUI')
          data.title = title.value
          data.date = date.value
          data.description = description.value
          data.hourStart = hourStart.value
          data.hourEnd = hourEnd.value
          data.iconColor = iconColor.value
        }
      } else if (editEventsData[0].title == data.newTitle) {
        if (wichEvent == 'delete') {
          console.warn('removendo o newTitle')
          data.newTitle = ''
          data.newDate = ''
          data.newDescription = ''
          data.newHourStart = ''
          data.newHourEnd = ''
          data.newIconColor = ''
        } else {
          console.log('CHEGOU AQUI')
          data.newTitle = title.value
          data.newDate = date.value
          data.newDescription = description.value
          data.newHourStart = hourStart.value
          data.newHourEnd = hourEnd.value
          data.newIconColor = iconColor.value
        }
      } else if (editEventsData[0].title == data.new3Title) {
        if (wichEvent == 'delete') {
          console.warn('removendo o new3Title')
          data.new3Title = ''
          data.new3Date = ''
          data.new3Description = ''
          data.new3HourStart = ''
          data.new3HourEnd = ''
          data.new3IconColor = ''
        } else {
          console.log('CHEGOU AQUI')
          data.new3Title = title.value
          data.new3Date = date.value
          data.new3Description = description.value
          data.new3HourStart = hourStart.value
          data.new3HourEnd = hourEnd.value
          data.new3IconColor = iconColor.value
        }
      } else if (editEventsData[0].title == data.new4Title) {
        if (wichEvent == 'delete') {
          console.warn('removendo o new4Title')
          data.new4Title = ''
          data.new4Date = ''
          data.new4Description = ''
          data.new4HourStart = ''
          data.new4IconColor = ''
        } else {
          console.log('CHEGOU AQUI')
          data.new4Title = title.value
          data.new4Date = date.value
          data.new4Description = description.value
          data.new4HourStart = hourStart.value
          data.new4IconColor = iconColor.value
        }
      } else if (editEventsData[0].title == data.new5Title) {
        if (wichEvent == 'delete') {
          console.warn('removendo o new5Title')
          data.new5Title = ''
          data.new5Date = ''
          data.new5Description = ''
          data.new5HourStart = ''
          data.new5HourEnd = ''
          data.new5IconColor = ''
        } else {
          console.log('CHEGOU AQUI')
          data.new5Title = title.value
          data.new5Date = date.value
          data.new5Description = description.value
          data.new5HourStart = hourStart.value
          data.new5HourEnd = hourEnd.value
          data.new5IconColor = iconColor.value
        }
      }
    })
    if (wichEvent == 'delete') {
      console.log('leu aqui')
      setFeedBackM('deleted')
    } else {
      setFeedBackM('edited')
    }
  }
}
