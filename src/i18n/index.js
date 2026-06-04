import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import fr from './fr.json'
import es from './es.json'
import it from './it.json'
import pt from './pt.json'
import ar from './ar.json'
import ru from './ru.json'

const savedLang = localStorage.getItem('cbi-lang') || 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      it: { translation: it },
      pt: { translation: pt },
      ar: { translation: ar },
      ru: { translation: ru },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  })

export default i18n
