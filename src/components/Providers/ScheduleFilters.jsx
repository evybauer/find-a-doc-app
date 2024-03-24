import { Button, Select } from 'antd'
import {
  distance,
  gender,
  languageSpoken,
  specialty,
  timeOfDay,
  visitReason,
  visitType,
} from '../../data/filters'
const { Option } = Select

const SelectComponent = ({ options, filterName, setFilteredOptions }) => {
    
    const placeholder = filterName
    .replace(/([A-Z])/g, ' $1')
    .replace(/\b\w/g, (char) => char.toUpperCase())

    return (
        <Select
            allowClear={true}
            placeholder={placeholder}
            suffixIcon={null}
            className='mr-3 my-1 text-black border border-black rounded-lg h-12 w-28 custom-select-search-bar'
            getPopupContainer={(node) => node.parentNode}
            dropdownStyle={{ minWidth: 200 }}
            onChange={(value) => {
                setFilteredOptions(prevState => ({
                  ...prevState,
                  [filterName]: value
                }))
              }}
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
    visitReason,
    specialty,
    gender,
    visitType,
    languageSpoken,
  }
  
  const ScheduleFilters = ({ filteredOptions, setFilteredOptions }) => {
    
    return (
      <div className='flex items-center'>
        <div className='py-8 custom-select-placeholder'>
          {Object.entries(filters).map(([filterName, filterOptions], index) => (
            <SelectComponent
              key={index}
              options={filterOptions}
              filteredOptions={filteredOptions}
              setFilteredOptions={setFilteredOptions}
              popupMatchSelectWidth={false}
              filterName={filterName}
            />
          ))}
        </div>
        <Button type="primary" onClick={() => setFilteredOptions({})}>Clear Filters</Button>
      </div>
    )
  }

export default ScheduleFilters
