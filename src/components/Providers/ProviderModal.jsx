import { useContext } from 'react'
import { SearchContext } from '../../providers/SearchProvider'
import { Form, Modal, Typography, Select } from 'antd'
import ProviderCard from './ProviderCard'
import AvailableTimes from './AvailableTimes'
import SearchInput from '../SearchBar/SearchInput'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorCard } from '../../ui/Error/ErrorCard'
import { resetApplication } from '../../common/utils'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const { Title, Text } = Typography

const ProviderModalContent = ({
  isModalVisible,
  setIsModalVisible,
  handleOk,
  handleCancel,
  provider,
  allDates,
}) => {
  const { t } = useTranslation('global')
  const [form] = Form.useForm()
  const { searchValues } = useContext(SearchContext)

  let providerInsuranceList = provider.insurance
  if (typeof providerInsuranceList === 'string') {
    providerInsuranceList = [providerInsuranceList]
  }

  providerInsuranceList = providerInsuranceList.map((insurance) => ({
    value: insurance,
    label: insurance,
  }))

  return (
    <Modal
      width={600}
      styles={{ overflowY: 'auto', maxHeight: 'calc(100vh - 350px)' }}
      centered
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Title level={2} style={{ marginBottom: 16, fontWeight: 500 }}>
        {cap(t('providers.book_with'))} {provider.name}
      </Title>

      <ProviderCard
        key={provider.id}
        provider={provider}
        isModalVisible={isModalVisible}
      />

      <Title
        level={4}
        style={{ fontWeight: 400, marginBottom: 0 }}
        className='mt-12'
      >
        {cap(t('providers.scheduling_detailes'))}
      </Title>
      <Text className='text-base font-extralight text-gray-500'>
        {cap(t('providers.your_selections'))}
      </Text>

      <Select
        placeholder={cap(t('providers.select_reason'))}
        style={{ width: '100%' }}
        className='my-4 min-h-[50px] border'
      >
        {provider.examsAvailable.map((exam, index) => (
          <Select.Option key={index} value={exam}>
            {exam}
          </Select.Option>
        ))}
      </Select>

      <Form.Item
        name='insurance'
        style={{ margin: 0, padding: 0, flexGrow: 1 }}
        className='border'
      >
        <SearchInput
          placeholder={
            searchValues.insurance || `${cap(t('search.add_insurance'))}`
          }
          options={providerInsuranceList}
          searchValue={searchValues.insurance}
          onChange={(value) => {
            form.setFieldsValue({ insurance: value })
            setSearchValues((prevValues) => ({
              ...prevValues,
              insurance: value || undefined,
            }))
          }}
          isProviderModal={true}
        />
      </Form.Item>

      <Title
        level={4}
        style={{ fontWeight: 400, marginBottom: 0 }}
        className='mt-8'
      >
        {cap(t('providers.available_appointments'))}
      </Title>
      <Text className='text-base font-extralight text-gray-500'>
        {cap(t('providers.select_time'))}
      </Text>
      <AvailableTimes
        availability={provider.availability}
        allDates={allDates}
        setIsModalVisible={setIsModalVisible}
      />
    </Modal>
  )
}

const ProviderModal = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <ProviderModalContent {...props} />
  </ErrorBoundary>
)

export default ProviderModal
