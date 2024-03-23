import { useContext, useState } from 'react'
import { Divider, Pagination } from 'antd'
import ProviderCard from './ProviderCard'
import ScheduleFilters from './ScheduleFilters'
import ProvidersHeader from './ProvidersHeader'
import FewProvidersMessage from './FewProvidersMessage'
import AvailableSpots from './AvailableSpots'
import { providersList } from '../../data'
import { SearchContext } from '../../providers/SearchProvider'

const Providers = () => {
  const { searchValues, setSearchValues } = useContext(SearchContext)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProviders = providersList.filter((provider) => {
    const matchesCondition = searchValues.condition
      ? provider.examsAvailable.includes(searchValues.condition)
      : true
    return matchesCondition
  })

  const providersToShow = filteredProviders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const showModal = (provider) => {
    setIsModalVisible(true)
    setSelectedProvider(provider)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <div className='flex'>
        <div className='block lg:min-w-[1024px] mr-2'>
          <Divider diretion='horizontal' className='m-0' />

          <ScheduleFilters />

          <ProvidersHeader providers={providersList} />

          {providersToShow.map((provider, index) => (
            <div
              key={index}
              className='flex flex-col lg:flex-row justify-between my-4'
            >
              <div className='flex-1'>
                <ProviderCard provider={provider} isModalVisible={false} />
              </div>
              <div>
                <AvailableSpots
                  provider={provider}
                  showModal={showModal}
                  selectedProvider={selectedProvider}
                  setSelectedProvider={setSelectedProvider}
                  isModalVisible={isModalVisible}
                  setIsModalVisible={setIsModalVisible}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                />
              </div>
            </div>
          ))}

          {filteredProviders.length > 11 && (
            <Pagination
              current={currentPage}
              onChange={setCurrentPage}
              total={providersList.length}
              pageSize={itemsPerPage}
            />
          )}

          {filteredProviders.length <= itemsPerPage && (
            <FewProvidersMessage setSearchValues={setSearchValues} />
          )}
        </div>
        <div className='hidden lg:flex lg:w-full lg:h-screen bg-blue-400'></div>
      </div>
    </>
  )
}

export default Providers
