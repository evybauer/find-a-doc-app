import { Select } from 'antd'
import {
  distance,
  gender,
  languageSpoken,
  specialty,
  timeOfDay,
  visitReason,
  visitType,
} from '../SyntheticData/filters'
const { Option } = Select

const SelectComponent = ({ options }) => (
  <Select
    suffixIcon={null}
    className='mr-3 my-1 text-black border border-black rounded-lg'
    placeholder={options[0].label}
    getPopupContainer={(node) => node.parentNode}
    dropdownStyle={{ minWidth: 200 }}
  >
    {options.map((item, index) => (
      <Option key={index} value={item.value}>
        {item.label}
      </Option>
    ))}
  </Select>
)

const filters = [
  distance,
  timeOfDay,
  visitReason,
  specialty,
  gender,
  visitType,
  languageSpoken,
]

const ScheduleFilters = () => {
  return (
    <div className='flex items-center'>
      <div className='py-8 custom-select-placeholder'>
        {filters.map((filter, index) => (
          <SelectComponent
            key={index}
            options={filter}
            popupMatchSelectWidth={false}
          />
        ))}
      </div>
    </div>
  )
}

export default ScheduleFilters
