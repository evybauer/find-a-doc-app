import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchInput from './SearchInput'
import { Button, Form } from 'antd'
import { SearchContext } from '../../providers/SearchProvider'

import { insurance } from '../../data/insuranceSearchList'
import { location } from '../../data/locationSearchList'
import { medicalConditions } from '../../data/medicalConditionsList'
import {
  faAddressCard,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

const searchConfigs = [
  {
    name: 'condition',
    placeholder: 'Condition, procedure, doctor...',
    icon: faMagnifyingGlass,
    options: medicalConditions,
  },
  {
    name: 'location',
    placeholder: 'City, state, or zip code',
    icon: faLocationDot,
    options: location,
  },
  {
    name: 'insurance',
    placeholder: 'Add insurance',
    icon: faAddressCard,
    options: insurance,
  },
]

const SearchBar = () => {
  let navigate = useNavigate()
  const [form] = Form.useForm()
  const { searchValues, setSearchValues } = useContext(SearchContext)

  const onFinish = (values) => {
    setSearchValues(values)
    navigate('/providers')
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className='flex items-center border border-teal-500 rounded bg-white lg:pl-2 lg:flex-row flex-col align-stretch custom-select-search-bar'
    >
      {searchConfigs.map((config, index) => (
        <div
          key={index}
          className='min-h-[50px] flex w-full p-[16px] border-b border-teal-500 lg:p-[0_8px] lg:border-none'
        >
          <Form.Item
            name={config.name}
            style={{ margin: 0, padding: 0, flexGrow: 1 }}
          >
            <SearchInput
              placeholder={config.placeholder}
              icon={config.icon}
              options={config.options}
              searchValue={searchValues[config.name]}
              onChange={(value) => {
                form.setFieldsValue({ [config.name]: value })
                setSearchValues((prevValues) => ({
                  ...prevValues,
                  [config.name]: value || undefined,
                }))
              }}
            />
          </Form.Item>
          {index < searchConfigs.length - 1 && (
            <div className='hidden lg:flex lg:h-8 lg:m-2 lg:items-align lg:border-l lg:border-gray-200' />
          )}
        </div>
      ))}
      <Button type='primary' htmlType='submit' className='search-bar-button'>
        Find Doctors
      </Button>
    </Form>
  )
}

export default SearchBar
