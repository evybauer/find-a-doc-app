import { Typography } from 'antd'

const { Text, Title } = Typography

const AvailableTimes = ({ availability }) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  let moreAvailabilityAdded = false

  return (
    <div className='gap-8'>
      {availability.map((day, index) => {
        const appointmentDate = new Date(day.date * 1000)
        appointmentDate.setHours(0, 0, 0, 0)

        let displayDate
        if (+appointmentDate === +today) {
          displayDate = 'Today'
        } else if (+appointmentDate === +tomorrow) {
          displayDate = 'Tomorrow'
        } else {
          displayDate = appointmentDate.toDateString()
        }

        let moreAvailabilityTitle = null
        if (!moreAvailabilityAdded && day.availableSpots.length > 0) {
          moreAvailabilityAdded = true
          moreAvailabilityTitle = (
            <Title
              level={4}
              style={{ fontWeight: 400, marginBottom: 0 }}
              className='mt-6'
            >
              More Availability
            </Title>
          )
        }

        return (
          <div key={index} className='mt-8'>
            {moreAvailabilityTitle}
            <Title level={5} style={{ fontWeight: 400 }}>
              {displayDate}
            </Title>
            <div className='flex gap-2'>
              {day.availableSpots.length > 0 ? (
                day.availableSpots.map((spot, spotIndex) => (
                  <div
                    key={spotIndex}
                    className='bg-yellow-300 p-2 max-w-[80px] items-center justicy-center'
                  >
                    <Text key={spotIndex} className='text-sm'>
                      {new Date(spot.startTime * 1000).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Text>
                  </div>
                ))
              ) : (
                <Text className='text-base font-extralight text-gray-500'>
                  No available appointments
                </Text>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AvailableTimes
