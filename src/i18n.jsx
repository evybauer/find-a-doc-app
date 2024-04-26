import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import global_en from './locales/en/global.json'
import global_es from './locales/es/global.json'

const ns = ['common']
const supportedLngs = ['en', 'es']
const resources = ns.reduce(async (accPromise, n) => {
  const acc = await accPromise
  await Promise.all(
    supportedLngs.map(async (lng) => {
      if (!acc[lng]) acc[lng] = {}
      const module = await import(
        /* @vite-ignore */
        `./locales/${lng}/global.json`
      )
      acc[lng] = {
        ...acc[lng],
        [n]: module.default,
      }
    }),
  )
  return acc
}, Promise.resolve({}))

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  })

export default i18n
