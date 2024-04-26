import { useState } from 'react'
import { Button, Select, Modal } from 'antd'
import {
  distance,
  gender,
  languageSpoken,
  specialty,
  timeOfDay,
  visitType,
} from '../../data/filters'

import { useContext } from 'react'
import { SearchContext } from '../../providers/SearchProvider'
import SearchBar from '../../components/SearchBar'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const { Option } = Select

const SelectComponent = ({
  options,
  filterName,
  setFilteredOptions,
  value,
  searchValues,
  setSearchValues,
}) => {
  const { t } = useTranslation('global')

  let placeholder = filterName
    .replace(/[\w]([A-Z])/g, function (g) {
      return g[0] + '_' + g[1].toLowerCase()
    })
    .toLowerCase()

  if (['medicalConditions', 'location', 'insurance'].includes(filterName)) {
    placeholder = searchValues[filterName]
  } else {
    placeholder = cap(t(`filters.${placeholder}`))
  }

  const handleChange = (value) => {
    setFilteredOptions((prevState) => ({
      ...prevState,
      [filterName]: value,
    }))

    if (['medicalConditions', 'location', 'insurance'].includes(filterName)) {
      setSearchValues((prevState) => ({
        ...prevState,
        [filterName]: value,
      }))
    }
  }

  const translatedOptions = options.map((option) => ({
    ...option,
    label: cap(t(`${option.label}`)),
  }))

  return (
    <Select
      allowClear={true}
      placeholder={placeholder}
      className='w-full min-h-[50px] my-4 lg:m-0lg:flex lg:w-1/4 lg:items-start border border-1 rounded-md'
      getPopupContainer={(node) => node.parentNode}
      dropdownStyle={{ minWidth: 200 }}
      value={value}
      onChange={handleChange}
      aria-label={placeholder}
    >
      {translatedOptions.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Select>
  )
}

const filters = {
  distance,
  timeOfDay,
  specialty,
  gender,
  visitType,
  languageSpoken,
}

const ScheduleFilters = ({ filteredOptions, setFilteredOptions }) => {
  const { t } = useTranslation('global')
  const { setSearchValues } = useContext(SearchContext)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleClearFilters = () => {
    setSearchValues({})
    setFilteredOptions({})
  }

  return (
    <>
      <div className='block justify-between items-center lg:hidden'>
        <SearchBar />
        <div className='flex justify-end mt-4 mt-4 ml-8 space-x-4'>
          <Button type='primary' onClick={showModal} className='min-h-[50px]'>
            {cap(t('action.more_filters'))}
          </Button>
          <Button
            key='clear'
            type='primary'
            danger
            className='h-[50px]'
            onClick={handleClearFilters}
          >
            {cap(t('action.clear_filters'))}
          </Button>
        </div>

        <Modal
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <div className='flex justify-between w-full' key='footer'>
              <Button
                key='clear'
                type='primary'
                danger
                onClick={handleClearFilters}
              >
                {cap(t('action.clear_filters'))}
              </Button>
              <div className='flex gap-2'>
                <Button
                  key='cancel'
                  className='mr-1'
                  onClick={handleCancel}
                  style={{ textTransform: 'capitalize' }}
                >
                  {t('action.cancel')}
                </Button>
                <Button
                  key='submit'
                  type='primary'
                  onClick={handleOk}
                  style={{ textTransform: 'capitalize' }}
                >
                  {t('action.ok')}
                </Button>
              </div>
            </div>,
          ]}
        >
          {Object.entries(filters).map(([filterName, filterOptions], index) => (
            <SelectComponent
              key={index}
              options={filterOptions}
              filteredOptions={filteredOptions}
              setFilteredOptions={setFilteredOptions}
              filterName={filterName}
            />
          ))}
        </Modal>
      </div>
      <div className='hidden lg:flex flex-wrap justify-start justify-between items-center w-full'>
        <div className='flex space-x-4'>
          {Object.entries(filters).map(([filterName, filterOptions], index) => (
            <SelectComponent
              key={index}
              options={filterOptions}
              filteredOptions={filteredOptions}
              setFilteredOptions={setFilteredOptions}
              popupMatchSelectWidth={false}
              filterName={filterName}
              value={filteredOptions[filterName] || undefined}
            />
          ))}
        </div>
        <div className='flex'>
          <Button
            type='primary'
            onClick={handleClearFilters}
            className='min-h-[50px]'
          >
            {cap(t('action.clear_filters'))}
          </Button>
        </div>
      </div>
    </>
  )
}

export default ScheduleFilters
