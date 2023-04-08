import { getDayName } from '../../utils/getDate'

/* conferir ano bissexto */

export const bissexto = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true
  } else {
    return false
  }
}

/* conferir que dia da semana é o 1° dia */

export const getFirstMonthDayName = (month, year) => {
  const firstDay = getDayName(`${month} 1, ${year}`)

  return firstDay
}

/* função para organizar pelos dias da semana */

export const firstDayWeekNumber = (month, year) => {
  const date = new Date(`${month} 1, ${year}`)
  const arrayDay = date.getDay()

  return arrayDay
}

/* função para fixar o dia 1° do mês escolhido, no dia
    da semana correto, deixando os últimos dias do mês anterior */

export const fixPreviouslyDay = (month, dayNumberData, year) => {
  if (firstDayWeekNumber(month, year) == 0) {
    return dayNumberData.emptyArray
  } else if (firstDayWeekNumber(month, year) == 1) {
    return dayNumberData.previouslyOne
  } else if (firstDayWeekNumber(month, year) == 2) {
    return dayNumberData.previouslyTwo
  } else if (firstDayWeekNumber(month, year) == 3) {
    return dayNumberData.previouslyThree
  } else if (firstDayWeekNumber(month, year) == 4) {
    return dayNumberData.previouslyFour
  } else if (firstDayWeekNumber(month, year) == 5) {
    return dayNumberData.previouslyFive
  } else if (firstDayWeekNumber(month, year) == 6) {
    return dayNumberData.previouslySix
  }
}

/* função para completar os últimos dias restantes do
calendário com os do próximo mês */

export const fixNextDay = (month, year, totalArray, dayNumberData) => {
  if (totalArray.length == 35) {
    return dayNumberData.nextSeven // work
  } else if (totalArray.length == 34) {
    return dayNumberData.nextEight // work
  } else if (totalArray.length == 33) {
    return dayNumberData.nextNine // work
  } else if (totalArray.length == 32) {
    return dayNumberData.nextTen // work
  } else if (totalArray.length == 31) {
    return dayNumberData.nextEleven // work
  } else if (totalArray.length == 30) {
    return dayNumberData.nextTwelve // work
  } else if (totalArray.length == 29) {
    return dayNumberData.nextThirteen // work
  } else if (totalArray.length == 28) {
    return dayNumberData.nextForteen // work
  } else if (totalArray.length == 36) {
    return dayNumberData.nextSix // work
  } else if (totalArray.length == 37) {
    return dayNumberData.nextFive // work
  }
}

/* switchMonth - mudar o mês corretamente */

export const switchMonth = (month, dayNumberData, year) => {
  switch (month.toLowerCase()) {
    case 'january': {
      return dayNumberData.january
    }
    case 'february': {
      if (bissexto(year)) {
        return dayNumberData.februaryBi
      } else {
        return dayNumberData.february
      }
    }
    case 'march': {
      return dayNumberData.march
    }
    case 'april': {
      return dayNumberData.april
    }
    case 'may': {
      return dayNumberData.may
    }
    case 'june': {
      return dayNumberData.june
    }
    case 'july': {
      return dayNumberData.july
    }
    case 'august': {
      return dayNumberData.august
    }
    case 'september': {
      return dayNumberData.september
    }
    case 'october': {
      return dayNumberData.october
    }
    case 'november': {
      return dayNumberData.november
    }
    case 'december': {
      return dayNumberData.december
    }
  }
}
