import { useLocation } from 'react-router-dom'
import { Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

const SearchInput = ({ placeholder, options, onChange, searchValue }) => {
  const location = useLocation()
  const handleChange = (value) => {
    onChange(value)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  const filterOption = (input, option) =>
    option.searchValue
      ? option.searchValue.toLowerCase().includes(input.toLowerCase())
      : false

  let icon
  if (placeholder === 'Medical condition') {
    icon = faMagnifyingGlass
  } else if (placeholder === 'Location') {
    icon = faLocationDot
  } else if (placeholder === 'Add insurance') {
    icon = faAddressCard
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {location.pathname !== '/providers' && (
        <FontAwesomeIcon icon={icon} className='select-icon' />
      )}
      <Select
        value={searchValue}
        showSearch
        allowClear
        placeholder={searchValue || placeholder}
        optionFilterProp='items'
        onChange={handleChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={options}
        suffixIcon={null}
        className='custom-select-placeholder w-full min-h-[50px]'
      />
    </div>
  )
}

export default SearchInput
