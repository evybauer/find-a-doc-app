import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../providers/SearchProvider'
import SearchInput from './SearchInput'
import { Button, Form } from 'antd'
import { insurance } from '../../data/insuranceSearchList'
import { location } from '../../data/locationSearchList'
import { medicalConditions } from '../../data/medicalConditionsList'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorCard } from '../ui/Error/ErrorCard'
import { resetApplication } from '../../common/utils'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const searchConfigs = [
  {
    id: 1,
    name: 'condition',
    placeholder: 'action.find_doctors',
    options: medicalConditions,
  },
  {
    id: 2,
    name: 'location',
    placeholder: 'search.location',
    options: location,
  },
  {
    id: 3,
    name: 'insurance',
    placeholder: 'search.add_insurance',
    options: insurance,
  },
]

const SearchBarContent = ({ isNavbar }) => {
  let navigate = useNavigate()
  const [form] = Form.useForm()
  const { searchValues, setSearchValues } = useContext(SearchContext)
  const location = useLocation()
  const { t } = useTranslation('global')

  const onFinish = (values) => {
    setSearchValues(values)
    navigate('/providers')
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className='flex items-center border border-teal-500 rounded lg:pl-2 lg:flex-row flex-col align-stretch'
    >
      {searchConfigs.map((config, index) => (
        <div
          key={index}
          className='min-h-[50px] flex w-full p-[16px] border-b border-teal-500 lg:p-[0_8px] lg:border-none'
        >
          <Form.Item
            name={config.name}
            style={{
              margin: 0,
              padding: 0,
              flexGrow: 1,
              backgroundColor: 'transparent',
            }}
          >
            <SearchInput
              key={searchValues[config.name] || ''}
              placeholder={cap(t(config.placeholder))}
              name={config.name}
              options={config.options}
              searchValue={searchValues[config.name]}
              onChange={(value) => {
                form.setFieldsValue({ [config.name]: value })
                setSearchValues((prevValues) => ({
                  ...prevValues,
                  [config.name]: value || undefined,
                }))
              }}
              isNavbar={isNavbar}
            />
          </Form.Item>
          {index < searchConfigs.length - 1 && (
            <div className='hidden lg:flex lg:h-8 lg:m-2 lg:items-align lg:border-l lg:border-gray-200' />
          )}
        </div>
      ))}
      {location.pathname === '/' && (
        <Button type='primary' htmlType='submit' className='search-bar-button'>
          {cap(t('action.find_doctors'))}
        </Button>
      )}
    </Form>
  )
}

const SearchBar = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <SearchBarContent {...props} />
  </ErrorBoundary>
)

export default SearchBar
