import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import tr from './locales/tr.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import ar from './locales/ar.json'

// Supported languages
const supportedLanguages = ['en', 'tr', 'de', 'fr', 'es', 'ar']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
      ar: { translation: ar }
    },
    supportedLngs: supportedLanguages,
    fallbackLng: 'en',
    
    // Enable debug mode to see language detection
    debug: false,
    
    // Language detection configuration
    detection: {
      // Order of detection methods
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      
      // Keys to lookup language from
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
      
      // Cache user language
      caches: ['localStorage'],
      
      // Only detect languages we support
      checkWhitelist: true
    },
    
    interpolation: {
      escapeValue: false
    }
  })

// Log detected language
console.log('🌍 Detected browser language:', navigator.language)
console.log('🎯 i18next language:', i18n.language)

export default i18n
