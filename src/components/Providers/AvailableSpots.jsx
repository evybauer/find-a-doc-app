import { useState } from 'react'
import ProviderModal from './ProviderModal'
import { Button, Typography } from 'antd'
import ProviderNotAvailableMessage from './ProviderNotAvailableMessage'

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
}) => {
  const [showSecondRow, setShowSecondRow] = useState(false)

  const handleShowMore = () => {
    setShowSecondRow(true)
  }

  const handleOpenModal = (provider) => {
    setSelectedProvider(provider)
    setIsModalVisible(true)
  }

  const firstRowAvailability = provider.availability.slice(0, 7)
  const secondRowAvailability = provider.availability.slice(7)
  const isProviderAvailable = provider.availability.some(
    (availability) => availability.appointmentsAvailable > 0,
  )

  return (
    <div className='ml-4'>
      <div className='grid grid-cols-7'>
        {firstRowAvailability.map((availability, index) => (
          <div
            key={index}
            className={`flex flex-col p-2 m-1 border rounded ${availability.appointmentsAvailable > 0 ? 'bg-yellow-400' : 'bg-slate-200'}`}
            onClick={() => showModal(provider)}
          >
            <Text>
              {new Date(availability.date * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Text>
            <Text>
              {new Date(availability.date * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <Text className='mt-2'>{availability.appointmentsAvailable}</Text>
            <Text>appts</Text>
          </div>
        ))}
      </div>
      <div
        className={`grid grid-cols-7 gap-1 ${showSecondRow ? '' : 'hidden md:grid'}`}
      >
        {secondRowAvailability.map((availability, index) => (
          <div
            key={index}
            className={`flex flex-col p-2 m-1 border rounded ${availability.appointmentsAvailable > 0 ? 'bg-yellow-400' : 'bg-slate-200'}`}
            onClick={() => showModal(provider)}
          >
            <Text>
              {new Date(availability.date * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Text>
            <Text>
              {new Date(availability.date * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <Text className='mt-2'>{availability.appointmentsAvailable}</Text>
            <Text>appts</Text>
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
          handleOk={handleOk}
          handleCancel={handleCancel}
          provider={provider}
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
