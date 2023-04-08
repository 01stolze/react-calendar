import { useState } from 'react'
import {
  getDayName,
  getDayNumber,
  getMonth,
  getYear,
} from '../../utils/getDate'
import { Calendar } from '../Calendar'
import { CalendarEvents } from '../CalendarEvents'

export const MainRow = () => {
  const [selectedDay, setSelectedDay] = useState(getDayNumber())
  const [dayName, setDayName] = useState(getDayName())
  const [monthEvent, setMonthEvent] = useState(getMonth())
  const [yearEvent, setYearEvent] = useState(getYear())
  return (
    <>
      <div className="main-row">
        <Calendar
          setSelectedDay={setSelectedDay}
          setDayName={setDayName}
          setMonthEvent={setMonthEvent}
          setYearEvent={setYearEvent}
        />
      </div>
      <CalendarEvents
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dayName={dayName}
        monthEvent={monthEvent}
        yearEvent={yearEvent}
      />
    </>
  )
}
