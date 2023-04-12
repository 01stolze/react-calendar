import { DisplayMonth } from '../DisplayMonth'
import P from 'prop-types'
import './styles.css'

export const CalendarGrid = ({
  month,
  year,
  setSelectedDay,
  selectedDay,
  setDayName,
  setMonthEvent,
  setYearEvent,
}) => {
  return (
    <div className="calendar-grid">
      <div className="row-day-name">
        <div className="grid-day-name">Dom</div>
        <div className="grid-day-name">Seg</div>
        <div className="grid-day-name">Ter</div>
        <div className="grid-day-name">Qua</div>
        <div className="grid-day-name">Qui</div>
        <div className="grid-day-name">Sex</div>
        <div className="grid-day-name">Sab</div>
      </div>
      <DisplayMonth
        month={month}
        year={year}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        setDayName={setDayName}
        setMonthEvent={setMonthEvent}
        setYearEvent={setYearEvent}
      />
    </div>
  )
}

CalendarGrid.propTypes = {
  month: P.string.isRequired,
  year: P.number.isRequired,
  setSelectedDay: P.func,
  setDayName: P.func,
  setMonthEvent: P.func,
  setYearEvent: P.func,
  selectedDay: P.number,
}
