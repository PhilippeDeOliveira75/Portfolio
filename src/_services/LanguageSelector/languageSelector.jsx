import './languageSelector.scss'
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { CiGlobe } from "react-icons/ci"

const languages = [
  { code: "en", lang: "EN" },
  { code: "fr", lang: "FR" }
]

function LanguageSelector() {

  const { i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [filteredLanguages, setFilteredLanguages] = useState([])

  // Actualiser la direction de lecture à chaque changement de langue
  useEffect(() => {
    document.body.dir = i18n.dir();

    // Mettre à jour les langues filtrées à chaque changement de langue
    setFilteredLanguages(languages.filter(lng => lng.code !== i18n.language))

  }, [i18n.language])

  // Fermer le menu après la sélection d'une langue
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setMenuOpen(false)
  }

  // Ouverture et fermeture du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    
    <div className="language-selector">

      <div className="globe-container" onClick={toggleMenu}>
        <CiGlobe className='language-icon'/>
        <span className="selected-language">{i18n.language.slice(0, 2).toUpperCase()}</span>
      </div>

      {menuOpen && (
        <div className="menu">

          {filteredLanguages.map((lng) => (
            <button
              className="additional-class"
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
