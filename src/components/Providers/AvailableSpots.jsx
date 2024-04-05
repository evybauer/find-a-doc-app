import { useState, useCallback } from 'react'
import ProviderModal from './ProviderModal'
import { Button } from 'antd'
import ProviderNotAvailableMessage from './ProviderNotAvailableMessage'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { checkAvailability, generateAllDates } from '../../common/utils'
import AvailabilityCards from './AvailabilityCard'

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

  const allDates = generateAllDates(start, end)

  const handleOpenModal = useCallback(() => {
    setSelectedProvider(provider)
    setIsModalVisible(true)
  }, [provider, setSelectedProvider, setIsModalVisible])

  const isProviderAvailable = checkAvailability(provider, allDates)

  return (
    <div className='ml-4'>
      <AvailabilityCards
        provider={provider}
        allDates={allDates}
        showModal={showModal}
        showSecondRow={showSecondRow}
      />
      {isProviderAvailable && (
        <Button
          className='block md:hidden bg-gray-800 text-white w-full mt-4'
          onClick={() => setShowSecondRow(!showSecondRow)}
        >
          {showSecondRow ? 'Show Less' : 'Show More'}
          <FontAwesomeIcon
            icon={showSecondRow ? faChevronUp : faChevronDown}
            className='ml-2'
          />
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
            onClick={handleOpenModal}
          >
            View Availability
          </a>
        </div>
      )}
    </div>
  )
}

export default AvailableSpots
