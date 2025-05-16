import './header.scss'

import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '@services/import';
import { useEffect, useState } from 'react';

import { RiHome5Line } from "react-icons/ri"
import { PiSmileyWink } from "react-icons/pi"
import { GrContact } from "react-icons/gr"
import { LiaStar } from "react-icons/lia"

function Header({ activeIndex, setActiveIndex }) {

  const { t } = useTranslation("translation")
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index} style={{ '--index': index }}>
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ))
  }

  const handleClick = (index) => {
    setActiveIndex(index);
    
    const sectionIds = ['home', 'about', 'skills', 'contact'];
    const sectionId = sectionIds[index];
  
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  useEffect (() => {
      document.body.className = isDarkMode ? 'dark' : 'light'; 
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
          aria-label={isDarkMode ? "Désactiver le mode sombre" : "Activer le mode sombre"}
        >
          <span className={`darkModeIcon ${isDarkMode ? 'active' : ''}`}></span>
        </button>
        <LanguageSelector />
       </div>

      <div className='w-navContainer'>
      
        <div className='w-title'>
          <h1 className='title'>NeOz</h1>
        </div>

        <nav className='navContainer'>

          <ul className='w-list'>

              {[t('NavBar.home'), t('NavBar.aboutme'), t('NavBar.skills'), t('NavBar.contact')].map((item, index) => (
              
              <li key={item} className={`list ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)} >
              
                <div className='iconContainer'>
                  {index === 0 && <RiHome5Line className='icon' size={24} />}
                  {index === 1 && <PiSmileyWink className='icon' size={24} />}
                  {index === 2 && <LiaStar className='icon' size={24} />}
                  {index === 3 && <GrContact className='icon' size={20} />}
                </div>

                <div className='textContainer'>
                  <div className='text'> {splitText(item)} </div>
                </div>

              </li>

              ))}

          </ul>

        </nav>

      </div>

    </header>

  )

}

export default Header