import { useState } from 'react'
import { ConfigProvider } from 'antd'
import { lightTheme } from '../../src/lib/themes/default'
import { darkTheme } from '../../src/lib/themes/dark'

export const withColorScheme = (Story) => {
  const [theme, setTheme] = useState(lightTheme)

  const handleCompareThemes = () => {
    setTheme(darkTheme)
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

  const ThemeSwitcher = () => {
    return (
      <div>
        <button
          style={{
            width: '150px',
            height: '50px',
            backgroundColor: 'blue',
            color: 'white',
            border: '1px blue solid',
            borderRadius: '12px',
            marginRight: '8px',
          }}
          onClick={handleDefaultTheme}
        >
          Default Theme
        </button>
        <button
          style={{
            width: '150px',
            height: '50px',
            backgroundColor: 'red',
            color: 'white',
            border: '1px red solid',
            borderRadius: '12px',
          }}
          onClick={handleCompareThemes}
        >
          Compare Themes
        </button>
      </div>
    )
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 10,
          marginBottom: '16px',
        }}
      >
        <ThemeSwitcher />
      </div>
      {theme.type !== 'light' ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
