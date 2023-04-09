import { getDayName } from '../../utils/getDate'
import { eventsData } from './data'
import { handleEditEvent } from './modal'

export const disabledAdd = (yearEvent, selectedDay, monthEvent) => {
  const selectedDateOrganized = `${yearEvent}-${get0Number(
    'month',
    selectedDay,
    monthEvent,
  )}-${get0Number('day', selectedDay, monthEvent)}`

  let disabled = false

  eventsData.forEach((data) => {
    if (
      data.date == data.newDate &&
      data.date == data.new3Date &&
      data.date == data.new4Date &&
      data.date == data.new4Date &&
      data.date == data.new5Date
    ) {
      if (data.date == selectedDateOrganized) {
        console.log('block: tem 5 eventos')
        disabled = true
      }
    }
  })
  return disabled
}

/* função - controle de estados */

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

/* função para '9' => '09' para strings */

export const get0Number = (c, selectedDay, monthEvent) => {
  const date = new Date(`${selectedDay} ${monthEvent}`)
  const month = new Array()
  month[0] = '01'
  month[1] = '02'
  month[2] = '03'
  month[3] = '04'
  month[4] = '05'
  month[5] = '06'
  month[6] = '07'
  month[7] = '08'
  month[8] = '09'
  month[9] = '10'
  month[10] = '11'
  month[11] = '12'
  const day = new Array()
  day[1] = '01'
  day[2] = '02'
  day[3] = '03'
  day[4] = '04'
  day[5] = '05'
  day[6] = '06'
  day[7] = '07'
  day[8] = '08'
  day[9] = '09'

  if (c == 'month') {
    return month[date.getMonth()]
  } else if (c == 'day') {
    if (selectedDay <= 9) {
      return day[date.getDate()]
    } else {
      return date.getDate()
    }
  }
}

/* função displayEvents correctly */

export const displayEvents = (
  selectedDay,
  monthEvent,
  yearEvent,
  eventDate,
  setIsOpen,
  setEditState,
) => {
  /* organizar eventDates */

  const selectedDateOrganized = `${yearEvent}-${get0Number(
    'month',
    selectedDay,
    monthEvent,
  )}-${get0Number('day', selectedDay, monthEvent)}`

  console.log('date organized:', selectedDateOrganized, eventDate)

  /* conferir se o dia tem eventos */

  console.log(eventsData)

  let currentEvent = null

  const currentEventFunc = () => {
    eventsData.forEach((data) => {
      console.log(data.date)
      if (
        data.date == selectedDateOrganized ||
        data.newDate == selectedDateOrganized ||
        data.new3Date == selectedDateOrganized ||
        data.new4Date == selectedDateOrganized ||
        data.new5Date == selectedDateOrganized
      ) {
        console.log('é igual kk', data)
        currentEvent = data
      }
    })
  }

  currentEventFunc()

  /* retornar os eventos */

  return (
    <>
      {currentEvent == undefined ? (
        <div className="no-event">
          <p>sem eventos</p>
        </div>
      ) : (
        <>
          {currentEvent.title && (
            <div
              className="event-item"
              onClick={() =>
                handleEditEvent('first', setIsOpen, currentEvent, setEditState)
              }
            >
              <p>
                {currentEvent.hourStart ? (
                  <strong>{currentEvent.hourStart} -</strong>
                ) : (
                  <strong>All day - </strong>
                )}
                {currentEvent.title}
              </p>
            </div>
          )}
          {currentEvent.newTitle && (
            <div
              className="event-item"
              onClick={() =>
                handleEditEvent('second', setIsOpen, currentEvent, setEditState)
              }
            >
              <p>
                {currentEvent.newHourStart ? (
                  <strong>{currentEvent.newHourStart} -</strong>
                ) : (
                  <strong>All day - </strong>
                )}
                {currentEvent.newTitle}
              </p>
            </div>
          )}
          {currentEvent.new3Title && (
            <div
              className="event-item"
              onClick={() =>
                handleEditEvent('third', setIsOpen, currentEvent, setEditState)
              }
            >
              <p>
                {currentEvent.new3HourStart ? (
                  <strong>{currentEvent.new3HourStart} -</strong>
                ) : (
                  <strong>All day - </strong>
                )}
                {currentEvent.new3Title}
              </p>
            </div>
          )}
          {currentEvent.new4Title && (
            <div
              className="event-item"
              onClick={() =>
                handleEditEvent('four', setIsOpen, currentEvent, setEditState)
              }
            >
              <p>
                {currentEvent.new4HourStart ? (
                  <strong>{currentEvent.new4HourStart} -</strong>
                ) : (
                  <strong>All day - </strong>
                )}
                {currentEvent.new4Title}
              </p>
            </div>
          )}
          {currentEvent.new5Title && (
            <div
              className="event-item"
              onClick={() =>
                handleEditEvent('five', setIsOpen, currentEvent, setEditState)
              }
            >
              <p>
                {currentEvent.new5HourStart ? (
                  <strong>{currentEvent.new5HourStart} -</strong>
                ) : (
                  <strong>All day - </strong>
                )}
                {currentEvent.new5Title}
              </p>
            </div>
          )}
        </>
      )}
    </>
  )
}
