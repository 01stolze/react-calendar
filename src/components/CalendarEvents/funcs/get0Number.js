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
