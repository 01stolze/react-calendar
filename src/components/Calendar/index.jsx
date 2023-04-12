import { useState } from 'react'
import { getMonth, getYear } from '../../utils/getDate'
import { CalendarGrid } from '../CalendarGrid'
import { CalendarToolBar } from '../CalendarToolBar'
import './styles.css'
import P from 'prop-types'

export const Calendar = ({
  setSelectedDay,
  selectedDay,
  setDayName,
  setMonthEvent,
  setYearEvent,
}) => {
  const [month, setMonth] = useState(getMonth())
  const [year, setYear] = useState(getYear())

  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        <CalendarToolBar
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <CalendarGrid
          month={month}
          year={year}
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          setDayName={setDayName}
          setMonthEvent={setMonthEvent}
          setYearEvent={setYearEvent}
        />
      </div>
    </div>
  )
}

Calendar.propTypes = {
  setSelectedDay: P.func,
  setDayName: P.func,
  setMonthEvent: P.func,
  setYearEvent: P.func,
  selectedDay: P.number,
}
