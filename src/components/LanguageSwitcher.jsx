import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')
  return (
    <button className="btn-outline" onClick={toggle} title="Switch language"><Languages size={16}/></button>
  )
}
