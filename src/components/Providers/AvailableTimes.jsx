import { Pagination, Typography } from 'antd'
import { useState } from 'react'
import BookAppointmentForm from './BookAppointmentForm'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'

const { Text, Title } = Typography

const AvailableTimesContent = ({
  availability,
  allDates,
  setIsModalVisible,
}) => {
  const [selectedTime, setSelectedTime] = useState(null)

  const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const handleTimeClick = (time, index) => {
    setSelectedTime(time)
    setSelectedAppointmentIndex(index)
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDates = allDates.slice(startIndex, endIndex)

  return (
    <div>
      {currentDates.map((epochDate, index) => {
        const appointmentDate = new Date(epochDate * 1000)
        appointmentDate.setHours(0, 0, 0, 0)

        let displayDate = appointmentDate

        const dateAvailability = availability.find(
          (item) => item.date === Number(epochDate),
        )

        return (
          <div key={index} className='mt-6'>
            <Title level={5} style={{ fontWeight: 400 }}>
              {displayDate.toDateString()}
            </Title>
            <div className='flex gap-2'>
              {dateAvailability &&
              dateAvailability.availableSpots.length > 0 ? (
                dateAvailability.availableSpots.map((spot, spotIndex) => (
                  <div
                    key={spotIndex}
                    className='bg-[#27a5b0] p-2 min-w-[80px] items-center justify-center border-gray-200 rounded-sm shadow-md hover:bg-[#128e99] cursor-pointer'
                    onClick={() => handleTimeClick(spot, index)}
                  >
                    <Text key={spotIndex} className='text-sm text-white'>
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
            {selectedAppointmentIndex === index && (
              <BookAppointmentForm
                displayDate={displayDate}
                selectedTime={selectedTime}
                setIsModalVisible={setIsModalVisible}
                setSelectedAppointmentIndex={setSelectedAppointmentIndex}
              />
            )}
          </div>
        )
      })}
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={allDates.length}
        pageSize={itemsPerPage}
        showSizeChanger={false}
        className='my-8'
      />
    </div>
  )
}

const AvailableTimes = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <AvailableTimesContent {...props} />
  </ErrorBoundary>
)

export default AvailableTimes
