import './header.scss'

import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '@services/import'
import { useEffect, useState } from 'react'

import { Menu, BurgerMenu } from '@components/import'

function Header({ activeIndex, setActiveIndex }) {

  const { t } = useTranslation('translation')
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleClick = (index) => {
    setActiveIndex(index)

    const sectionIds = ['home', 'about', 'skills', 'contact']
    const sectionId = sectionIds[index]

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <header className='headerContainer'>

      <div className='w-darkModeAndLanguage'>
        <button
          className={`darkModeButton ${isDarkMode ? 'active' : ''}`}
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}
        >
          <span className={`darkModeIcon ${isDarkMode ? 'active' : ''}`}></span>
        </button>
        <LanguageSelector />
      </div>
                    <div className='menu-mobile'>
          <BurgerMenu t={t} activeIndex={activeIndex} handleClick={handleClick} />
        </div>

      <div className='w-navContainer'>
        <div className='w-title'>
          <h1 className='title'>NeOz</h1>
        </div>

        <div className='menu-desktop'>
          <Menu t={t} activeIndex={activeIndex} handleClick={handleClick} />
        </div>


      </div>
    </header>
  )
}

export default Header
