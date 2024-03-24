import { useState } from 'react'
import ProviderModal from './ProviderModal'
import { Button, Typography } from 'antd'
import ProviderNotAvailableMessage from './ProviderNotAvailableMessage'
import dayjs from 'dayjs'

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

  const isProviderAvailable = provider.availability.some(
    (availability) => availability.appointmentsAvailable > 0,
  )

  function getAvailableSpots(provider, allDates) {
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
  const secondRowAvailability = allDates.slice(7)

  return (
    <div className='ml-4'>
      <div className='grid grid-cols-7'>
        {firstRowAvailability.map((date, index) => (
          <div
            key={index}
            className={`flex flex-col p-2 m-1 border rounded ${availableSpots[date] > 0 ? 'bg-[#128e99]' : 'bg-gray-300'} shadow-md`}
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
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} mt-2`}
            >
              {availableSpots[date]}
            </Text>
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              appts
            </Text>
          </div>
        ))}
      </div>
      <div
        className={`grid grid-cols-7 gap-1 ${showSecondRow ? '' : 'hidden md:grid'}`}
      >
        {secondRowAvailability.map((date, index) => (
          <div
            key={index}
            className={`flex flex-col p-2 m-1 border rounded ${availableSpots[date] > 0 ? 'bg-[#128e99]' : 'bg-gray-300'} shadow-md`}
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
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} mt-2`}
            >
              {availableSpots[date]}
            </Text>
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              appts
            </Text>
          </div>
        ))}
      </div>
      {isProviderAvailable && (
        <Button
          className={`${showSecondRow ? 'hidden' : 'block md:hidden'} hide-on-md bg-blue-500 w-full mt-4`}
          onClick={handleShowMore}
        >
          Show More
        </Button>
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
