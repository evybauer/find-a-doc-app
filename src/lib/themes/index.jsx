import { useState, createContext } from 'react'

import { ConfigProvider, theme } from 'antd'
import { lightTheme } from './default'
import { darkTheme } from './dark'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme.type === 'light' ? darkTheme : lightTheme)
  }

  const themeConfig = {
    type: theme.type,
    algorithm: [theme.algorithm],
    token: {
      colorPrimary: theme.colors['primary600'],
      colorWarning: theme.colors['warning600'],
      colorInfo: theme.colors['info600'],
      colorSuccess: theme.colors['success600'],
      colorBorderSecondary: theme.type === 'dark' ? '#232326' : '#f0f0f0',
      colorBgContainer: theme.type === 'dark' ? '#FDFDFD1F' : 'white',
      colorBgLayout: theme.type === 'dark' ? '#000000FF' : 'white',
      colorLink: theme.colors['primary600'],
      colorTextPlaceholder: theme.type === 'dark' ? 'white' : 'black',
    },
  }

  return (
    <ThemeContext.Provider value={{ theme: themeConfig, toggleTheme }}>
      <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
