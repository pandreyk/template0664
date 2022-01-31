import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'
import i18next, { LanguageDetectorAsyncModule } from 'i18next'
import TRANSLATIONS_CS_CZ from './messages/cs-CZ.json'
import TRANSLATIONS_EN_US from './messages/en-US.json'

const language = getLocales()[0].languageCode

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb(language),
  init: () => {},
  cacheUserLanguage: () => {},
}

// @ts-ignore
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      cs: {
        translation: TRANSLATIONS_CS_CZ,
      },
      en: {
        translation: TRANSLATIONS_EN_US,
      },
      // ru: {
      //   translation: TRANSLATIONS_RU_RU
      // }
    },
  })
