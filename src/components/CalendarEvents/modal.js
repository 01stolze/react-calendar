import { openModal } from './Modal'
import { editEventsData, eventsData } from './data'

/* função get data inputs */

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
      for (let i = 0; eventsData.length > i; i++) {
        if (
          eventsData[i].title == '' &&
          eventsData[i].newTitle == '' &&
          eventsData[i].new3Title == '' &&
          eventsData[i].new4Title == '' &&
          eventsData[i].new5Title == ''
        ) {
          console.warn(
            'TODOS EVENTOS DELETADOS DETECTADO AO TENTAR ADICIONAR EVENTO: APAGANDO...',
          )
          delete eventsData[i]
        } else if (date.value == eventsData[i].date) {
          return i
        } else if (date.value == eventsData[i].newDate) {
          return i
        } else if (date.value == eventsData[i].new3Date) {
          return i
        } else if (date.value == eventsData[i].new4Date) {
          return i
        } else if (date.value == eventsData[i].new5Date) {
          return i
        }
      }
    }

    /* tratar múltiplios eventos no
    mesmo dia (max = 5) */

    if (sameDayEvent()) {
      console.log('VOCE ESTA TENTANDO COLOCAR EVNEOTS NO MESMO DIA ')
      // --------------------ARRUMAR ISSOa---------------------------------

      // adicionar corretamente dados apagados

      if (eventsData[sameDayEvent()].title == '') {
        console.log('title foi apagado, adicione ele')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          title: `${title.value}`,
          date: `${date.value}`,
          description: `${description.value}`,
          hourStart: `${hourStart.value}`,
          hourEnd: `${hourEnd.value}`,
        }
      } else if (eventsData[sameDayEvent()].newTitle == '') {
        console.log('newTitle foi apagado, adicione ele')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          newTitle: `${title.value}`,
          newDate: `${date.value}`,
          newDescription: `${description.value}`,
          newHourStart: `${hourStart.value}`,
          newHourEnd: `${hourEnd.value}`,
        }
      } else if (eventsData[sameDayEvent()].new3Title == '') {
        console.log('new3Title foi apagado, adicione ele')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          new3Title: `${title.value}`,
          new3Date: `${date.value}`,
          new3Description: `${description.value}`,
          new3HourStart: `${hourStart.value}`,
          new3HourEnd: `${hourEnd.value}`,
        }
      } else if (eventsData[sameDayEvent()].new4Title == '') {
        console.log('new4Title foi apagado, adicione ele')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          new4Title: `${title.value}`,
          new4Date: `${date.value}`,
          new4Description: `${description.value}`,
          new4HourStart: `${hourStart.value}`,
          new4HourEnd: `${hourEnd.value}`,
        }
      } else if (eventsData[sameDayEvent()].new5Title == '') {
        console.log('new5Title foi apagado, adicione ele')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          new5Title: `${title.value}`,
          new5Date: `${date.value}`,
          new5Description: `${description.value}`,
          new5HourStart: `${hourStart.value}`,
          new5HourEnd: `${hourEnd.value}`,
        }
      }

      // adicionar os dados pela primeira vez
      else if (
        !eventsData[sameDayEvent()].title &&
        !eventsData[sameDayEvent()].newTitle &&
        !eventsData[sameDayEvent()].new3Title &&
        !eventsData[sameDayEvent()].new4Title &&
        !eventsData[sameDayEvent()].new5Title
      ) {
        console.warn('adicionando o title')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          title: `${title.value}`,
          date: `${date.value}`,
          description: `${description.value}`,
          hourStart: `${hourStart.value}`,
          hourEnd: `${hourEnd.value}`,
        }
      } else if (
        !!eventsData[sameDayEvent()].title &&
        !eventsData[sameDayEvent()].newTitle &&
        !eventsData[sameDayEvent()].new3Title &&
        !eventsData[sameDayEvent()].new4Title &&
        !eventsData[sameDayEvent()].new5Title
      ) {
        console.warn('adicionando o newTitle...')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          newTitle: `${title.value}`,
          newDate: `${date.value}`,
          newDescription: `${description.value}`,
          newHourStart: `${hourStart.value}`,
          newHourEnd: `${hourEnd.value}`,
        }
      } else if (
        // adicionar new3Title
        !!eventsData[sameDayEvent()].title &&
        !!eventsData[sameDayEvent()].newTitle &&
        !eventsData[sameDayEvent()].new3Title &&
        !eventsData[sameDayEvent()].new4Title &&
        !eventsData[sameDayEvent()].new5Title
      ) {
        console.warn('adicionando o new3Title...')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          new3Title: `${title.value}`,
          new3Date: `${date.value}`,
          new3Description: `${description.value}`,
          new3HourStart: `${hourStart.value}`,
          new3HourEnd: `${hourEnd.value}`,
        }
      } else if (
        // adicionar o new4Title
        !!eventsData[sameDayEvent()].title &&
        !!eventsData[sameDayEvent()].newTitle &&
        !!eventsData[sameDayEvent()].new3Title &&
        !eventsData[sameDayEvent()].new4Title &&
        !eventsData[sameDayEvent()].new5Title
      ) {
        console.warn('adicionando o new4Title...')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          new4Title: `${title.value}`,
          new4Date: `${date.value}`,
          new4Description: `${description.value}`,
          new4HourStart: `${hourStart.value}`,
          new4HourEnd: `${hourEnd.value}`,
        }
      } else if (
        // adicionar o new5Title
        !!eventsData[sameDayEvent()].title &&
        !!eventsData[sameDayEvent()].newTitle &&
        !!eventsData[sameDayEvent()].new3Title &&
        !!eventsData[sameDayEvent()].new4Title &&
        !eventsData[sameDayEvent()].new5Title
      ) {
        console.warn('adicionando o new5Title...')
        eventsData[sameDayEvent()] = {
          ...eventsData[sameDayEvent()],
          new5Title: `${title.value}`,
          new5Date: `${date.value}`,
          new5Description: `${description.value}`,
          new5HourStart: `${hourStart.value}`,
          new5HourEnd: `${hourEnd.value}`,
        }
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

/* função para editar modal inputs/eventos */

export const handleEditEvent = (
  wichEvent,
  setIsOpen,
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
    console.log('REALMENTE EDITAR OS EVENTOS, noufa garai')
    console.log('evento a ser editado:', editEventsData)
    for (let i = 0; eventsData.length > i; i++) {
      // fix
      if (editEventsData[0].title == eventsData[i].title) {
        if (wichEvent == 'delete') {
          console.warn('removendo title')
          eventsData[i].title = ''
          eventsData[i].date = ''
          eventsData[i].description = ''
          eventsData[i].hourStart = ''
          eventsData[i].hourEnd = ''
          console.log(eventsData, 'eventsdata apos delete')
        } else {
          eventsData[i] = {
            ...eventsData[i],
            title: title.value,
            date: date.value,
            description: description.value,
            hourStart: hourStart.value,
            hourEnd: hourEnd.value,
          }
        }
      } else if (editEventsData[0].title == eventsData[i].newTitle) {
        console.warn('removendo newTitle')
        if (wichEvent == 'delete') {
          eventsData[i].newTitle = ''
          eventsData[i].newDate = ''
          eventsData[i].newDescription = ''
          eventsData[i].newHourStart = ''
          eventsData[i].newHourEnd = ''
          console.log(eventsData, 'eventsdata apos delete')
        } else {
          eventsData[i] = {
            ...eventsData[i],
            newTitle: title.value,
            newDate: date.value,
            newDescription: description.value,
            newHourStart: hourStart.value,
            newHourEnd: hourEnd.value,
          }
        }
      } else if (editEventsData[0].title == eventsData[i].new3Title) {
        console.warn('removendo new3Title')
        if (wichEvent == 'delete') {
          eventsData[i].new3Title = ''
          eventsData[i].new3Date = ''
          eventsData[i].new3Description = ''
          eventsData[i].new3HourStart = ''
          eventsData[i].new3HourEnd = ''
          console.log(eventsData, 'eventsdata apos delete')
        } else {
          eventsData[i] = {
            ...eventsData[i],
            new3Title: title.value,
            new3Date: date.value,
            new3Description: description.value,
            new3HourStart: hourStart.value,
            new3HourEnd: hourEnd.value,
          }
        }
      } else if (editEventsData[0].title == eventsData[i].new4Title) {
        console.warn('removendo o new4Title')
        if (wichEvent == 'delete') {
          eventsData[i].new4Title = ''
          eventsData[i].new4Date = ''
          eventsData[i].new4Description = ''
          eventsData[i].new4HourStart = ''
          eventsData[i].new4HourEnd = ''
          console.log(eventsData, 'eventsdata apos delete')
        } else {
          eventsData[i] = {
            ...eventsData[i],
            new4Title: title.value,
            new4Date: date.value,
            new4Description: description.value,
            new4HourStart: hourStart.value,
            new4HourEnd: hourEnd.value,
          }
        }
      } else if (editEventsData[0].title == eventsData[i].new5Title) {
        console.warn('removendo o new5Title')
        if (wichEvent == 'delete') {
          eventsData[i].new5Title = ''
          eventsData[i].new5Date = ''
          eventsData[i].new5Description = ''
          eventsData[i].new5HourStart = ''
          eventsData[i].new5HourEnd = ''
          console.log(eventsData, 'eventsdata apos delete')
        } else {
          eventsData[i] = {
            ...eventsData[i],
            new5Title: title.value,
            new5Date: date.value,
            new5Description: description.value,
            new5HourStart: hourStart.value,
            new5HourEnd: hourEnd.value,
          }
        }
      }
    }
  }
}
