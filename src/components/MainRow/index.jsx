/* eslint-disable-next-line */
import { useEffect, useState } from 'react'
import {
  getDayName,
  getDayNumber,
  getMonth,
  getYear,
} from '../../utils/getDate'
import { Calendar } from '../Calendar'
import { CalendarEvents } from '../CalendarEvents'
import { FeedBackMessages } from '../FeedBackM'
import { toggleAddId } from '../FeedBackM/feedBack'

export const MainRow = () => {
  const [selectedDay, setSelectedDay] = useState(getDayNumber())
  const [dayName, setDayName] = useState(getDayName())
  const [monthEvent, setMonthEvent] = useState(getMonth())
  const [yearEvent, setYearEvent] = useState(getYear())
  const [feedBackM, setFeedBackM] = useState('')

  useEffect(() => {
    switch (feedBackM) {
      case 'added': {
        toggleAddId()
      }
    }
    setTimeout(() => {
      setFeedBackM('')
    }, 1000)
  }, [feedBackM])
  return (
    <>
      <div className="main-row">
        <Calendar
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          setDayName={setDayName}
          setMonthEvent={setMonthEvent}
          setYearEvent={setYearEvent}
        />
      </div>
      <FeedBackMessages feedBackM={feedBackM} />
      <CalendarEvents
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dayName={dayName}
        monthEvent={monthEvent}
        yearEvent={yearEvent}
        setFeedBackM={setFeedBackM}
      />
    </>
  )
}
