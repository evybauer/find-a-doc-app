import { useLocation } from 'react-router-dom'
import { Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faChevronDown,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const SearchInput = ({
  name,
  placeholder,
  options,
  onChange,
  searchValue,
  isNavbar,
  isProviderModal,
}) => {
  const { t } = useTranslation('global')
  const { pathname } = useLocation()
  const handleChange = (value) => {
    onChange(value)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  const filterOption = (input, option) =>
    option.searchValue.toLowerCase().includes(input.toLowerCase())

  let icon
  if (name === 'condition') {
    icon = faMagnifyingGlass
  } else if (name === 'location') {
    icon = faLocationDot
  } else if (name === 'insurance') {
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
        placeholder={searchValue || `${cap(t(placeholder))}`}
        optionFilterProp='items'
        onChange={handleChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={options}
        suffixIcon={
          isProviderModal ? <FontAwesomeIcon icon={faChevronDown} /> : null
        }
        className={`w-full min-h-[50px] ${isNavbar ? 'custom-select-placeholder' : 'text-black'}`}
      />
    </div>
  )
}

export default SearchInput
