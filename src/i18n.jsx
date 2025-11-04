import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      appName: 'Agrikart',
      tagline: 'From harvest to handshake',
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      name: 'Name',
      continue: 'Continue',
      logout: 'Logout',
      farmer: 'Farmer',
      buyer: 'Buyer',
      employee: 'Employee',
      admin: 'Admin',
    },
  },
  hi: {
    translation: {
      appName: 'एग्रीकार्ट',
      tagline: 'खेती से समझौते तक',
      login: 'लॉगिन',
      register: 'रजिस्टर',
      email: 'ईमेल',
      password: 'पासवर्ड',
      name: 'नाम',
      continue: 'जारी रखें',
      logout: 'लॉगआउट',
      farmer: 'किसान',
      buyer: 'खरीदार',
      employee: 'कर्मचारी',
      admin: 'एडमिन',
    },
  },
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    })
}

export default i18n
