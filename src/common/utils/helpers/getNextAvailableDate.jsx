export const getNextAvailableDate = (provider) => {
    if (provider.availability && provider.availability.length > 0) {
      const nextAvailableDate = new Date(provider.availability[0].date * 1000)
      return nextAvailableDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
    }
    return 'No availability'
  }