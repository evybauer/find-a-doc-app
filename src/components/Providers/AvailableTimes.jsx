import { Pagination, Typography, Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons'

const { Text, Title } = Typography

const AvailableTimes = ({ availability, allDates, setIsModalVisible }) => {
  const [selectedTime, setSelectedTime] = useState(null)
  const [form] = Form.useForm()
  const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const handleTimeClick = (time, index) => {
    setSelectedTime(time)
    setSelectedAppointmentIndex(index)
  }

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

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDates = allDates.slice(startIndex, endIndex)

  return (
    <div>
      {currentDates.map((epochDate, index) => {
        const appointmentDate = new Date(epochDate * 1000)
        appointmentDate.setHours(0, 0, 0, 0)

        let displayDate = appointmentDate

        const dateAvailability = availability.find(
          (item) => item.date === Number(epochDate),
        )

        return (
          <div key={index} className='mt-6'>
            <Title level={5} style={{ fontWeight: 400 }}>
              {displayDate.toDateString()}
            </Title>
            <div className='flex gap-2'>
              {dateAvailability &&
              dateAvailability.availableSpots.length > 0 ? (
                dateAvailability.availableSpots.map((spot, spotIndex) => (
                  <div
                    key={spotIndex}
                    className='bg-[#27a5b0] p-2 min-w-[80px] items-center justify-center border-gray-200 rounded-sm shadow-md hover:bg-[#128e99] cursor-pointer'
                    onClick={() => handleTimeClick(spot, index)}
                  >
                    <Text key={spotIndex} className='text-sm text-white'>
                      {new Date(spot.startTime * 1000).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Text>
                  </div>
                ))
              ) : (
                <Text className='text-base font-extralight text-gray-500'>
                  No available appointments
                </Text>
              )}
            </div>
            {selectedAppointmentIndex === index && (
              <Form
                className='bg-gray-100 rounded shadow-md my-8 py-8 px-8'
                onFinish={handleAppointmentConfirmation}
                form={form}
              >
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
                      ? new Date(
                          selectedTime.startTime * 1000,
                        ).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : ''}
                  </Title>
                </div>

                <Title level={5} style={{ fontWeight: 400 }}>
                  Enter your details
                </Title>
                <Form.Item
                  name='name'
                  label='Name'
                  rules={[
                    { required: true, message: 'Please input your name!' },
                  ]}
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
            )}
          </div>
        )
      })}
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={allDates.length}
        pageSize={itemsPerPage}
        showSizeChanger={false}
        className='my-8'
      />
    </div>
  )
}

export default AvailableTimes
