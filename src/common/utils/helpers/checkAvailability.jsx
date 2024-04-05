export const checkAvailability = (provider, dates) => {
  for (let date of dates) {
    const availabilityForDate = provider.availability.find(
      (availability) => availability.date === date,
    )

    if (
      availabilityForDate &&
      availabilityForDate.appointmentsAvailable !== undefined &&
      availabilityForDate.appointmentsAvailable > 0
    ) {
      return true
    }
  }
  return false
}
