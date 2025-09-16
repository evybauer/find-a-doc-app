import { Card, Form, Input, Button, Typography, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../ui/Error/ErrorCard'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const { Title } = Typography

const BookAppointmentFormContent = ({
  displayDate,
  selectedTime,
  setIsModalVisible,
  setSelectedAppointmentIndex,
}) => {
  const { t } = useTranslation('global')
  const [form] = Form.useForm()

  const handleAppointmentConfirmation = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
        setSelectedAppointmentIndex(null)
      })
      .catch((errorInfo) => {
        console.log('Failed:', errorInfo)
      })
    setIsModalVisible(false)
    message.success(cap(t('message.success.appointment_confirmation')))
  }

  return (
    <Card
      className='rounded shadow-md my-8 py-8 px-8'
      bodyStyle={{ padding: '0' }}
    >
      <Form onFinish={handleAppointmentConfirmation} form={form}>
        <div className='flex items-center gap-4'>
          <FontAwesomeIcon
            icon={faCalendarDay}
            className='text-[#27a5b0] text-lg mb-1'
          />
          <Title level={5}>{displayDate.toDateString()}</Title>
        </div>

        <div className='flex items-center gap-4 mb-4'>
          <FontAwesomeIcon
            icon={faClock}
            className='text-[#27a5b0] text-lg mb-1'
          />
          <Title level={5}>
            {selectedTime
              ? new Date(selectedTime.startTime * 1000).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : ''}
          </Title>
        </div>

        <Title level={5} style={{ marginBottom: 16, fontWeight: 400 }}>
          {cap(t('providers.form.enter_details'))}:
        </Title>
        <Form.Item
          style={{ textTransform: 'capitalize' }}
          name='name'
          label={t('label.name')}
          rules={[
            {
              required: true,
              message: cap(t('message.error.name_validation')),
            },
          ]}
        >
          <Input placeholder={cap(t('providers.form.enter_phone'))} />
        </Form.Item>
        <Form.Item
          style={{ textTransform: 'capitalize' }}
          name='email'
          label={t('label.email')}
          rules={[
            {
              required: true,
              message: cap(t('message.error.email_validation')),
            },
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]}
        >
          <Input placeholder={cap(t('providers.form.enter_email'))} />
        </Form.Item>
        <Form.Item
          style={{ textTransform: 'capitalize' }}
          name='phone'
          label={t('label.phone')}
          rules={[
            {
              required: true,
              message: cap(t('message.error.phone_validation')),
            },
          ]}
        >
          <Input placeholder={cap(t('providers.form.enter_phone'))} />
        </Form.Item>
        <Form.Item className='flex justify-end'>
          <Button
            type='primary'
            htmlType='submit'
            style={{ textTransform: 'capitalize' }}
          >
            {t('action.confirm_appointment')}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

const BookAppointmentForm = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <BookAppointmentFormContent {...props} />
  </ErrorBoundary>
)

export default BookAppointmentForm
