import { Card, Form, Input, Button, Typography, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'

const { Title } = Typography

const BookAppointmentFormContent = ({
  displayDate,
  selectedTime,
  setIsModalVisible,
  setSelectedAppointmentIndex,
}) => {
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
    message.success('Your appointment has been booked.')
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
          Enter your details:
        </Title>
        <Form.Item
          name='name'
          label='Name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder='Enter your name' />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          rules={[
            { required: true, message: 'Please input your email!' },
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]}
        >
          <Input placeholder='Enter your email' />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone'
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input placeholder='Enter your phone number' />
        </Form.Item>
        <Form.Item className='flex justify-end'>
          <Button type='primary' htmlType='submit'>
            Confirm Appointment
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
