export const translateMonth = (month) => {
  switch (month) {
    case 'January': {
      return 'Janeiro'
    }
    case 'February': {
      return 'Fevereiro'
    }
    case 'March': {
      return 'Março'
    }
    case 'April': {
      return 'Abril'
    }
    case 'May': {
      return 'Maio'
    }
    case 'June': {
      return 'Junho'
    }
    case 'July': {
      return 'Julho'
    }
    case 'August': {
      return 'Agosto'
    }
    case 'September': {
      return 'Setembro'
    }
    case 'October': {
      return 'Outubro'
    }
    case 'November': {
      return 'Novembro'
    }
    case 'December': {
      return 'Dezembro'
    }
  }
}

/* key gen */

export const keyGen = () => {
  return (
    Math.random().toString(12).substring(2, 8) +
    Math.random().toString(12).substring(2, 8)
  )
}

/* funções para pegar dados de data */

/* função para pegar o ano */

export const getYear = () => {
  var date = new Date()
  var yearDate = date.getFullYear()

  return yearDate
}

/* função para pegar o número do dia atual */

export const getCurrentDayNumber = () => {
  const date = new Date()
  const currentDay = date.getDate()

  return currentDay
}

/* função para pegar o mês atual */

export const getMonth = () => {
  var date = new Date()
  var month = new Array()
  month[0] = 'January'
  month[1] = 'February'
  month[2] = 'March'
  month[3] = 'April'
  month[4] = 'May'
  month[5] = 'June'
  month[6] = 'July'
  month[7] = 'August'
  month[8] = 'September'
  month[9] = 'October'
  month[10] = 'November'
  month[11] = 'December'

  var monthDate = month[date.getMonth()]

  return monthDate
}

/* função para pegar o dia da semana */

export const getDayName = (wantedDay) => {
  const date = new Date()
  const dateWanted = new Date(wantedDay)
  const dayName = new Array()
  dayName[0] = 'Domingo'
  dayName[1] = 'Segunda-Feira'
  dayName[2] = 'Terça-Feira'
  dayName[3] = 'Quarta-Feira'
  dayName[4] = 'Quinta-Feira'
  dayName[5] = 'Sexta-Feira'
  dayName[6] = 'Sábado'

  if (wantedDay) {
    const weekday = dayName[dateWanted.getDay()]
    return weekday
  } else {
    const weekday = dayName[date.getDay()]
    return weekday
  }
}

/* função para pegar número do dia da semana */

export const getDayNumber = () => {
  const date = new Date()
  const dayNumber = date.getDate()

  return dayNumber
}

/* função manipulação dos estados pelo usuário */

export const handleNextOrMonth = (month, nextOr) => {
  switch (month) {
    case 'January': {
      return nextOr ? 'February' : 'December'
    }
    case 'February': {
      return nextOr ? 'March' : 'January'
    }
    case 'March': {
      return nextOr ? 'April' : 'February'
    }
    case 'April': {
      return nextOr ? 'May' : 'March'
    }
    case 'May': {
      return nextOr ? 'June' : 'April'
    }
    case 'June': {
      return nextOr ? 'July' : 'May'
    }
    case 'July': {
      return nextOr ? 'August' : 'June'
    }
    case 'August': {
      return nextOr ? 'September' : 'July'
    }
    case 'September': {
      return nextOr ? 'October' : 'August'
    }
    case 'October': {
      return nextOr ? 'November' : 'September'
    }
    case 'November': {
      return nextOr ? 'December' : 'October'
    }
    case 'December': {
      return nextOr ? 'January' : 'November'
    }
  }
}
