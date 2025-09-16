import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { cap } from '../../../../common/utils'

export const TranslationButton = () => {
  const { t } = useTranslation('global')
  const [language, setLanguage] = useState('en')

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  const menu = (
    <Menu>
      <Menu.Item
        key='en'
        style={{ color: 'white', textTransform: 'capitalize' }}
        onClick={() => handleChangeLanguage('en')}
      >
        {t('language.english')}
      </Menu.Item>
      <Menu.Item
        key='es'
        style={{ color: 'white', textTransform: 'capitalize' }}
        onClick={() => handleChangeLanguage('es')}
      >
        {t('language.spanish')}
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} className='flex items-center ml-4 mr-2'>
      <a
        className='text-white ant-dropdown-link'
        onClick={(e) => e.preventDefault()}
      >
        {language === 'en'
          ? `${cap(t('language.english'))}`
          : `${cap(t('language.spanish'))}`}
        <FontAwesomeIcon
          className='w-4 h-4 ml-2 text-white'
          icon={faCaretDown}
        />
      </a>
    </Dropdown>
  )
}
