import { ErrorPage } from './index'

export default {
  title: 'ui/Error/ErrorPage/ErrorPage',
  component: ErrorPage,
}

const Template = (args) => <ErrorPage {...args} />

export const error_page = Template.bind({})
error_page.args = {
  error: {
    status: '404',
    message: 'Page Not Found',
  },
  resetErrorBoundary: () => console.log('Resetting error boundary'),
}

export const Error403 = Template.bind({})
Error403.args = {
  error: {
    status: '403',
    message: 'Not Authorized.',
  },
  resetErrorBoundary: () => console.log('Resetting error boundary'),
}

export const Error405 = Template.bind({})
Error405.args = {
  error: {
    status: '405',
    message: 'Method Not Allowed',
  },
  resetErrorBoundary: () => console.log('Resetting error boundary'),
}

export const NoStatusErros = Template.bind({})
NoStatusErros.args = {
  error: {
    status: null,
    message: 'Method Not Allowed',
  },
  resetErrorBoundary: () => console.log('Resetting error boundary'),
}
