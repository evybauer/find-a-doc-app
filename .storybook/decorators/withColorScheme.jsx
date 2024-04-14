import { useState } from 'react'
import { ConfigProvider } from 'antd'
import { lightTheme } from '../../src/lib/themes/default'
import { darkTheme } from '../../src/lib/themes/dark'

export const withColorScheme = (Story) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme.type === 'light' ? darkTheme : lightTheme)
  }

  const handleDefaultTheme = () => {
    setTheme(lightTheme)
  }

  const themeConfigLight = {
    type: lightTheme.type,
    algorithm: [lightTheme.algorithm],
    token: {
      colorPrimary: lightTheme.colors['primary600'],
      colorWarning: lightTheme.colors['warning600'],
      colorInfo: lightTheme.colors['info600'],
      colorSuccess: lightTheme.colors['success600'],
      colorBorderSecondary: '#f0f0f0',
      colorLink: lightTheme.colors['primary600'],
      colorTextPlaceholder: 'black',
    },
  }

  const themeConfigDark = {
    type: darkTheme.type,
    algorithm: [darkTheme.algorithm],
    token: {
      colorPrimary: darkTheme.colors['primary600'],
      colorWarning: darkTheme.colors['warning600'],
      colorInfo: darkTheme.colors['info600'],
      colorSuccess: darkTheme.colors['success600'],
      colorBorderSecondary: '#232326',
      colorLink: darkTheme.colors['primary600'],
      colorTextPlaceholder: 'white',
    },
  }

  const Flex = (props) => (
    <div
      {...props}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 24,
        padding: 24,
      }}
    />
  )

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
        <button
          style={{
            width: '150px',
            height: '70px',
            backgroundColor: 'blue',
            color: 'white',
            border: '1px blue solid',
            borderRadius: '12px',
            marginRight: '8px',
          }}
          onClick={toggleTheme}
        >
          Default Theme
        </button>
        <button
          style={{
            width: '150px',
            height: '70px',
            backgroundColor: 'red',
            color: 'white',
            border: '1px red solid',
            borderRadius: '12px',
          }}
          onClick={handleDefaultTheme}
        >
          Compare Themes
        </button>
      </div>
      {theme.type === 'light' ? (
        <div className='flex items-center justify-center my-8'>
          <ConfigProvider theme={themeConfigLight}>
            <Flex>
              <Story />
            </Flex>
          </ConfigProvider>
          <ConfigProvider theme={themeConfigDark}>
            <Flex className='bg-neutral-800'>
              <Story />
            </Flex>
          </ConfigProvider>
        </div>
      ) : (
        <ConfigProvider theme={themeConfigLight}>
          <Story />
        </ConfigProvider>
      )}
    </>
  )
}
