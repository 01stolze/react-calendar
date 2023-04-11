import P from 'prop-types'
import { dayNumberData } from './data'
import {
  firstDayWeekNumber,
  fixNextDay,
  fixPreviouslyDay,
  switchMonth,
} from './displayMonth'
import { getCurrentDayNumber, keyGen } from '../../utils/getDate'
import { consoleNumber } from '../CalendarEvents/funcs/consoleNumber'
import { currentGridDay } from '../../utils/currentGridDay'
// import { eventsData } from '../CalendarEvents/data'

export const DisplayMonth = ({
  month,
  year,
  setSelectedDay,
  setDayName,
  setMonthEvent,
  setYearEvent,
}) => {
  console.log(month, ',', year)

  const previously = fixPreviouslyDay(month, dayNumberData, year)
  const current = switchMonth(month, dayNumberData, year)
  const totalArray = [...previously, ...current]
  const next = fixNextDay(month, year, totalArray, dayNumberData)

  const checkPreviouslyNeed = firstDayWeekNumber(month, year)

  return (
    <div className="day-grid">
      <div className="day-row">
        {checkPreviouslyNeed != 0 &&
          previously.map((p) => {
            return (
              <div className="grid-item grid-previously-item" key={keyGen()}>
                <div className="day-number">{p}</div>
              </div>
            )
          })}
        {current.map((c) => {
          return (
            <div
              className="grid-item"
              id="click-day"
              key={keyGen()}
              onClick={() =>
                consoleNumber(
                  c,
                  setSelectedDay,
                  setDayName,
                  setMonthEvent,
                  month,
                  year,
                  setYearEvent,
                )
              }
            >
              <div className="day-number" id={c}>
                {c}
              </div>
              {c == getCurrentDayNumber() && currentGridDay(c)}
            </div>
          )
        })}
        {next.map((c) => {
          return (
            <div className="grid-item grid-previously-item" key={keyGen()}>
              <div className="day-number">{c}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

DisplayMonth.propTypes = {
  month: P.string.isRequired,
  year: P.number.isRequired,
  setSelectedDay: P.func,
  setDayName: P.func,
  setMonthEvent: P.func,
  setYearEvent: P.func,
  selectedDateOrganized: P.string,
}
