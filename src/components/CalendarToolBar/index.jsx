import {
  getMonth,
  getYear,
  handleNextOrMonth,
  translateMonth,
} from '../../utils/getDate'
import P from 'prop-types'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons'

export const CalendarToolBar = ({ month, setMonth, year, setYear }) => {
  const getNextMonth = (nextOr) => {
    /* next for true, or for false */
    if (month == 'December') {
      setYear((year) => year + 1)
      setMonth(handleNextOrMonth(month, nextOr))
    } else {
      setMonth(handleNextOrMonth(month, nextOr))
    }
  }

  const getPreMonth = (nextOr) => {
    if (month == 'January') {
      setYear((year) => year - 1)
      setMonth(handleNextOrMonth(month, nextOr))
    } else {
      setMonth(handleNextOrMonth(month, nextOr))
    }
  }

  const defaultDate = () => {
    setMonth(getMonth())
    setYear(getYear())
  }

  return (
    <div className="calendar-tool-bar">
      <button className="tool-bar-button" onClick={() => getPreMonth(false)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <h2>
        {translateMonth(month)} {year}
      </h2>
      <div className="tool-bar-flex-end">
        <button className="tool-bar-button--today" onClick={defaultDate}>
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </button>
        <button className="tool-bar-button" onClick={() => getNextMonth(true)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  )
}

CalendarToolBar.propTypes = {
  month: P.string,
  setMonth: P.func,
  year: P.number,
  setYear: P.func,
}
