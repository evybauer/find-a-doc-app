export const getAvailableSpots = (provider, allDates) => {
  const availableSpots = {}

  allDates.forEach((date) => {
    const availability = provider.availability.find(
      (avail) => avail.date === date,
    )
    if (availability) {
      availableSpots[date] = availability.appointmentsAvailable
    } else {
      availableSpots[date] = 0
    }
  })

  return availableSpots
}
