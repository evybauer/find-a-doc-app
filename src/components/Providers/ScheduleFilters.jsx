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

const { Option } = Select

const SelectComponent = ({
  options,
  filterName,
  setFilteredOptions,
  value,
  searchValues,
  setSearchValues,
}) => {
  let placeholder = filterName
    .replace(/([A-Z])/g, ' $1')
    .replace(/\b\w/g, (char) => char.toUpperCase())

  if (['medicalConditions', 'location', 'insurance'].includes(filterName)) {
    placeholder = searchValues[filterName] || placeholder
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

  return (
    <Select
      allowClear={true}
      placeholder={placeholder}
      className='text-black w-full min-h-[50px] custom-select-placeholder-text my-4 lg:m-0lg:flex lg:w-1/4 lg:items-start'
      getPopupContainer={(node) => node.parentNode}
      dropdownStyle={{ minWidth: 200 }}
      value={value}
      onChange={handleChange}
    >
      {options.map((item, index) => (
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
    <div>
      <div className='block justify-between items-center lg:hidden'>
        <SearchBar />
        <div className='flex justify-end mt-4 mt-4 ml-8 space-x-4'>
          <Button type='primary' onClick={showModal} className='min-h-[50px]'>
            More Filters
          </Button>
          <Button
            key='clear'
            className='bg-red-500 text-white h-[50px]'
            onClick={handleClearFilters}
          >
            Clear Filters
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
                className='bg-red-500 text-white'
                onClick={handleClearFilters}
              >
                Clear Filters
              </Button>
              <div className='flex gap-4'>
                <Button key='cancel' onClick={handleCancel}>
                  Cancel
                </Button>
                <Button key='submit' type='primary' onClick={handleOk}>
                  OK
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
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ScheduleFilters
