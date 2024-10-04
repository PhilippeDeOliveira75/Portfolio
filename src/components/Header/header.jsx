import './header.scss'

import { useTranslation } from 'react-i18next'

import { RiHome5Line } from "react-icons/ri"
import { PiSmileyWink } from "react-icons/pi"
import { GrProjects } from "react-icons/gr"
import { GrContact } from "react-icons/gr"
import { LiaStar } from "react-icons/lia"

function Header({ activeIndex, setActiveIndex }) {

  const { t } = useTranslation("translation")
  
  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index} style={{ '--index': index }}>
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']
    const sectionId = sectionIds[index]

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (

    <header className='headerContainer'>
      
      <div className='w-title'>
        <h1 className='title'>NeOz</h1>
      </div>

      <nav className='navContainer'>

        <ul className='w-list'>
          {[t('NavBar.home'), t('NavBar.aboutme'), t('NavBar.skills'), t('NavBar.projects'), t('NavBar.contact')].map((item, index) => (
            <li 
              key={item}
              className={`list ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div className='iconContainer'>
                {index === 0 && <RiHome5Line className='icon' size={24} />}
                {index === 1 && <PiSmileyWink className='icon' size={24} />}
                {index === 2 && <LiaStar className='icon' size={24} />}
                {index === 3 && <GrProjects className='icon' size={20} />}
                {index === 4 && <GrContact className='icon' size={20} />}
              </div>
              <div className='textContainer'>
                <div className='text'>
                  {splitText(item)}
                </div>
              </div>
            </li>
          ))}
        </ul>

      </nav>

    </header>

  )

}

export default Header