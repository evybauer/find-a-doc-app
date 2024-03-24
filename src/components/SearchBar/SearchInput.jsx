import { Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchInput = ({ placeholder, icon, options, onChange }) => {
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

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={icon} className='text-base text-slate-700' />
      <Select
        showSearch
        allowClear
        placeholder={placeholder}
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
