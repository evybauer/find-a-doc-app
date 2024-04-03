import { useContext, useState } from 'react'
import { Pagination } from 'antd'
import ProviderCard from './ProviderCard'
import ScheduleFilters from './ScheduleFilters'
import ProvidersHeader from './ProvidersHeader'
import FewProvidersMessage from './FewProvidersMessage'
import AvailableSpots from './AvailableSpots'
import { SearchContext } from '../../providers/SearchProvider'
import dayjs from 'dayjs'
import { useFetch } from '../../queries'
import { getFirestoreURL } from '../../common/utils/getFirestoreURL'
import LoadingStatus from '../../ui/LoadingStatus'

const toCamelCase = (str) => {
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase()
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

const Providers = () => {
  const { searchValues } = useContext(SearchContext)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [filteredOptions, setFilteredOptions] = useState({})
  const [startDate, setStartDate] = useState(dayjs('2024-03-22'))
  const [endDate, setEndDate] = useState(dayjs('2024-03-22').add(13, 'day'))

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const url = getFirestoreURL('providers')
  const { data: providersList, loading, error } = useFetch(url)

  if (loading || !providersList) {
    return <LoadingStatus />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const matchesCondition = (provider, condition) =>
    condition ? provider.examsAvailable.includes(condition) : true
  const matchesLocation = (provider, location) =>
    location ? provider.address.city === location : true
  const matchesInsurance = (provider, insurance) =>
    insurance ? provider.insurance.includes(insurance) : true
  const matchesLanguageSpoken = (provider, languageSpoken) =>
    languageSpoken
      ? provider.languageSpoken
          .map((language) => language.toLowerCase())
          .includes(languageSpoken)
      : true
  const matchesDistance = (provider, distance) =>
    distance ? provider.distance <= distance : true

  const matchesTimeOfDay = (provider, timeOfDay) =>
    timeOfDay
      ? provider.schedulePreference
          .map((pref) => toCamelCase(pref))
          .includes(timeOfDay)
      : true
  const matchesSpecialty = (provider, specialty) =>
    specialty ? provider.specialty === specialty : true
  const matchesGender = (provider, gender) =>
    gender ? provider.gender === gender : true
  const matchesVisitType = (provider, visitType) =>
    visitType ? provider.visitType.value === visitType : true

  const filteredProviders = providersList.filter((provider) => {
    const { condition, location, insurance } = searchValues || {}
    const {
      languageSpoken,
      distance,
      timeOfDay,
      specialty,
      gender,
      visitType,
    } = filteredOptions || {}

    return (
      matchesCondition(provider, condition) &&
      matchesLocation(provider, location) &&
      matchesInsurance(provider, insurance) &&
      matchesLanguageSpoken(provider, languageSpoken) &&
      matchesDistance(provider, distance) &&
      matchesTimeOfDay(provider, timeOfDay) &&
      matchesSpecialty(provider, specialty) &&
      matchesGender(provider, gender) &&
      matchesVisitType(provider, visitType)
    )
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
      <div className='block lg:min-w-[1024px] mr-2'>
        <ScheduleFilters
          filteredOptions={filteredOptions}
          setFilteredOptions={setFilteredOptions}
        />
        <ProvidersHeader
          providers={filteredProviders}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        {providersToShow.map((provider, index) => (
          <div key={index} className='grid grid-cols-1 lg:grid-cols-3 my-16'>
            <ProviderCard
              key={provider.id}
              provider={provider}
              isModalVisible={false}
            />
            <div className='grid col-span-2'>
              <AvailableSpots
                provider={provider}
                showModal={showModal}
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                startDate={startDate}
                endDate={endDate}
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
          <FewProvidersMessage setFilteredOptions={setFilteredOptions} />
        )}
      </div>
    </>
  )
}

export default Providers
