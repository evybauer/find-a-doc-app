import { useState } from 'react'
import ProviderModal from './ProviderModal'
import { Button, Typography } from 'antd'
import ProviderNotAvailableMessage from './ProviderNotAvailableMessage'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const { Text } = Typography

const AvailableSpots = ({
  provider,
  showModal,
  selectedProvider,
  setSelectedProvider,
  isModalVisible,
  setIsModalVisible,
  handleOk,
  handleCancel,
  startDate,
  endDate,
}) => {
  const [showSecondRow, setShowSecondRow] = useState(false)
  const start = dayjs.unix(startDate.valueOf() / 1000)
  const end = dayjs.unix(endDate.valueOf() / 1000)

  let date = start
  const allDates = []

  while (date.isBefore(end) || date.isSame(end)) {
    allDates.push(date.unix())
    date = date.add(1, 'day')
  }

  const handleShowMore = () => {
    setShowSecondRow(true)
  }

  const handleOpenModal = (provider) => {
    setSelectedProvider(provider)
    setIsModalVisible(true)
  }

  const checkAvailability = (dates) => {
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

  const isProviderAvailable = checkAvailability(allDates)

  const getAvailableSpots = (provider, allDates) => {
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

  const availableSpots = getAvailableSpots(provider, allDates)

  const firstRowAvailability = allDates.slice(0, 7)
  const secondRowAvailability = allDates.slice(7, 14)

  return (
    <div className='ml-4'>
      <div className='grid grid-flow-row-dense grid-cols-3 md:grid-cols-7'>
        {firstRowAvailability.map((date, index) => (
          <div
            key={index}
            className={`flex flex-col p-2 m-1 border rounded ${availableSpots[date] > 0 ? 'bg-[#128e99]' : 'bg-gray-300'} shadow-md ${index === 0 || index === firstRowAvailability.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            onClick={() => showModal(provider)}
          >
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Text>
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <div className='flex mt-2'>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} font-bold`}
              >
                {availableSpots[date]}
              </Text>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} ml-1 font-bold`}
              >
                appts
              </Text>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`grid grid-flow-row-dense grid-cols-3 md:grid-cols-7 gap-1 ${showSecondRow ? '' : 'hidden md:grid'}`}
      >
        {secondRowAvailability.map((date, index) => (
          <div
            key={index}
            className={`flex flex-col p-2 m-1 border rounded ${availableSpots[date] > 0 ? 'bg-[#128e99]' : 'bg-gray-300'} shadow-md ${index === 0 || index === secondRowAvailability.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            onClick={() => showModal(provider)}
          >
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Text>
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <div className='flex mt-2'>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} font-bold`}
              >
                {availableSpots[date]}
              </Text>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} ml-1 font-bold`}
              >
                appts
              </Text>
            </div>
          </div>
        ))}
      </div>
      {isProviderAvailable && (
        <>
          <Button
            className={`${showSecondRow ? 'hidden' : 'block md:hidden'} bg-gray-800 text-white w-full mt-4`}
            onClick={handleShowMore}
          >
            Show More
            <FontAwesomeIcon icon={faChevronDown} className='ml-2' />
          </Button>

          <Button
            className={`${showSecondRow ? 'block md:hidden' : 'hidden'} bg-gray-800 text-white w-full mt-4`}
            onClick={() => setShowSecondRow(false)}
          >
            Show Less
            <FontAwesomeIcon icon={faChevronUp} className='ml-2' />
          </Button>
        </>
      )}
      {selectedProvider === provider && (
        <ProviderModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          provider={provider}
          allDates={allDates}
        />
      )}
      {!isProviderAvailable ? (
        <ProviderNotAvailableMessage />
      ) : (
        <div className='flex justify-end mt-2'>
          <a
            className='underline underline-offset-1 text-sky-600'
            onClick={() => handleOpenModal(provider)}
          >
            View Availability
          </a>
        </div>
      )}
    </div>
  )
}

export default AvailableSpots
