import React, { useContext } from 'react'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../../../lib/themes'

export const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Button
      onClick={toggleTheme}
      className='bg-transparent border-none hover:bg-transparent focus:bg-transparent'
    >
      <FontAwesomeIcon
        className='w-4 h-4 text-white hover:text-cyan-500'
        icon={theme.type === 'light' ? faSun : faMoon}
      />
    </Button>
  )
}
