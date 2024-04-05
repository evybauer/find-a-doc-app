import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../providers/SearchProvider'
import SearchInput from './SearchInput'
import { Button, Form } from 'antd'
import { insurance } from '../../data/insuranceSearchList'
import { location } from '../../data/locationSearchList'
import { medicalConditions } from '../../data/medicalConditionsList'

const searchConfigs = [
  {
    name: 'condition',
    placeholder: 'Medical condition',
    options: medicalConditions,
  },
  {
    name: 'location',
    placeholder: 'Location',
    options: location,
  },
  {
    name: 'insurance',
    placeholder: 'Add insurance',
    options: insurance,
  },
]

const SearchBar = () => {
  let navigate = useNavigate()
  const [form] = Form.useForm()
  const { searchValues, setSearchValues } = useContext(SearchContext)
  const location = useLocation()

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
      {location.pathname === '/' && (
        <Button type='primary' htmlType='submit' className='search-bar-button'>
          Find Doctors
        </Button>
      )}
    </Form>
  )
}

export default SearchBar
