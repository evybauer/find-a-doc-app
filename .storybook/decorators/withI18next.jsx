import { useEffect, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../src/i18n'

export const withI18next = (Story, context) => {
  useEffect(() => {
    i18n.changeLanguage(context.globals.locale)
  }, [context.globals.locale])

  return (
    <I18nextProvider i18n={i18n}>
      <Story {...context} />
    </I18nextProvider>
  )
}
