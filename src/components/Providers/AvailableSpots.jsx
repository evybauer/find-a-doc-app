import { useState, useCallback } from 'react'
import ProviderModal from './ProviderModal'
import { Card, Button } from 'antd'
import ProviderNotAvailableMessage from './ProviderNotAvailableMessage'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { checkAvailability, generateAllDates } from '../../common/utils'
import AvailabilityCards from './AvailabilityCard'
import { getAvailableSpots } from '../../common/utils'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const AvailableSpotsContent = ({
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
  const { t } = useTranslation('global')
  const [showSecondRow, setShowSecondRow] = useState(false)
  const start = dayjs.unix(startDate.valueOf() / 1000)
  const end = dayjs.unix(endDate.valueOf() / 1000)

  const allDates = generateAllDates(start, end)

  const handleOpenModal = useCallback(() => {
    setSelectedProvider(provider)
    setIsModalVisible(true)
  }, [provider, setSelectedProvider, setIsModalVisible])

  const isProviderAvailable = checkAvailability(provider, allDates)

  const availableSpots = getAvailableSpots(provider, allDates)

  return (
    <Card
      className='border-none'
      style={{ backgroundColor: 'transparent' }}
      bodyStyle={{ padding: '0' }}
    >
      <AvailabilityCards
        provider={provider}
        allDates={allDates}
        showModal={showModal}
        showSecondRow={showSecondRow}
        availableSpots={availableSpots}
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
            {cap(t('providers.view_availability'))}
          </a>
        </div>
      )}
    </Card>
  )
}

const AvailableSpots = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <AvailableSpotsContent {...props} />
  </ErrorBoundary>
)

export default AvailableSpots
