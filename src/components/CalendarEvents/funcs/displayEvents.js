/* função displayEvents correctly */

import { eventsData } from '../data'
import { get0Number } from './get0Number'
import { handleEditEvent } from './handleEditEvent'

export const displayEvents = (
  selectedDay,
  monthEvent,
  yearEvent,
  eventDate,
  setIsOpen,
  setEditState,
  setFeedBackM,
) => {
  /* organizar eventDates */

  const selectedDateOrganized = `${yearEvent}-${get0Number(
    'month',
    selectedDay,
    monthEvent,
  )}-${get0Number('day', selectedDay, monthEvent)}`

  console.log('date organized:', selectedDateOrganized, eventDate)

  /* conferir se o dia tem eventos */

  let currentEvent = null

  const currentEventFunc = () => {
    eventsData.forEach((data) => {
      if (
        data.date == selectedDateOrganized ||
        data.newDate == selectedDateOrganized ||
        data.new3Date == selectedDateOrganized ||
        data.new4Date == selectedDateOrganized ||
        data.new5Date == selectedDateOrganized
      ) {
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
                handleEditEvent(
                  'first',
                  setIsOpen,
                  setFeedBackM,
                  currentEvent,
                  setEditState,
                )
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
                handleEditEvent(
                  'second',
                  setIsOpen,
                  setFeedBackM,
                  currentEvent,
                  setEditState,
                )
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
                handleEditEvent(
                  'third',
                  setIsOpen,
                  setFeedBackM,
                  currentEvent,
                  setEditState,
                )
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
                handleEditEvent(
                  'four',
                  setIsOpen,
                  setFeedBackM,
                  currentEvent,
                  setEditState,
                )
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
                handleEditEvent(
                  'five',
                  setIsOpen,
                  setFeedBackM,
                  currentEvent,
                  setEditState,
                )
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
