import { useContext, useState } from 'react'
import { Divider, Pagination } from 'antd'
import ProviderCard from './ProviderCard'
import ScheduleFilters from './ScheduleFilters'
import ProvidersHeader from './ProvidersHeader'
import FewProvidersMessage from './FewProvidersMessage'
import AvailableSpots from './AvailableSpots'
import { providersList } from '../../data'
import { SearchContext } from '../../providers/SearchProvider'

function toCamelCase(str) {
  if (!str) {
    return ''
  }

  return str
    .replace(/['\/\s]/g, '')
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ''
      return index === 0 ? match.toLowerCase() : match.toUpperCase()
    })
}

const Providers = () => {
  const { searchValues } = useContext(SearchContext)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [filteredOptions, setFilteredOptions] = useState({})

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const matchesCondition = (provider, condition) =>
    condition ? provider.examsAvailable.includes(condition) : true
  const matchesLocation = (provider, location) =>
    location ? provider.address.city === location : true
  const matchesInsurance = (provider, insurance) =>
    insurance ? provider.insurance === insurance : true
  const matchesVisitReason = (provider, visitReason) =>
    visitReason
      ? provider.examsAvailable.map(toCamelCase).includes(visitReason)
      : true
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
          .map((pref) => pref.toLowerCase())
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
      visitReason,
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
      matchesVisitReason(provider, visitReason) &&
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
      <div className='flex'>
        <div className='block lg:min-w-[1024px] mr-2'>
          <Divider diretion='horizontal' className='m-0' />

          <ScheduleFilters
            filteredOptions={filteredOptions}
            setFilteredOptions={setFilteredOptions}
          />

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

          {filteredProviders.length <= itemsPerPage && <FewProvidersMessage />}
        </div>
        <div className='hidden lg:flex lg:w-full lg:h-screen bg-blue-400'></div>
      </div>
    </>
  )
}

export default Providers
