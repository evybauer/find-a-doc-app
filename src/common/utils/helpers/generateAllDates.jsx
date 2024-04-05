export const generateAllDates = (start, end) => {
  let date = start
  const allDates = []

  while (date.isBefore(end) || date.isSame(end)) {
    allDates.push(date.unix())
    date = date.add(1, 'day')
  }

  return allDates
}
