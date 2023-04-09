import './styles.css'
import P from 'prop-types'
import Modal from 'react-modal'
import { useState } from 'react'
import { disabledAdd, displayEvents } from './events'
import { EventsModal, openModal } from './Modal'

Modal.setAppElement('#root')

/* eslint-disable */

export const CalendarEvents = ({
  selectedDay,
  setSelectedDay,
  dayName,
  monthEvent,
  yearEvent,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [d, setD] = useState(1)
  const [eventTitle, setEventTitle] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [editState, setEditState] = useState(false)
  const [currentEvent, setCurrentEvent] = useState()

  return (
    <div className="events-wrapper">
      <div className="events-container">
        <div className="events-header">
          <h3>{dayName}</h3>
          <h2>
            {monthEvent} {selectedDay}
          </h2>
        </div>
        <div className="events-list">
          {displayEvents(
            selectedDay,
            monthEvent,
            yearEvent,
            eventDate,
            setIsOpen,
            setEditState,
            currentEvent,
          )}
        </div>
        <EventsModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          setEventTitle={setEventTitle}
          setEventDate={setEventDate}
          d={d}
          setD={setD}
          editState={editState}
          setEditState={setEditState}
        />
        <div className="add-event-button">
          <button
            onClick={() => openModal(setIsOpen)}
            disabled={
              disabledAdd(yearEvent, selectedDay, monthEvent) ? true : false
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

CalendarEvents.propTypes = {
  selectedDay: P.number,
  setSelectedDay: P.func,
  yearEvent: P.number,
}
