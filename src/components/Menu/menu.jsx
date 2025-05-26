import './menu.scss'

import { RiHome5Line } from "react-icons/ri"
import { PiSmileyWink } from "react-icons/pi"
import { GrContact } from "react-icons/gr"
import { LiaStar } from "react-icons/lia"

function Menu({ t, activeIndex, handleClick }) {

  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index} style={{ '--index': index }}>
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ))
  }

  return (

    <nav className='navContainer'>

      <ul className='w-list'>
        {[t('NavBar.home'), t('NavBar.aboutme'), t('NavBar.skills'), t('NavBar.contact')].map((item, index) => (
          <li
            key={item}
            className={`list ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className='iconContainer'>
              {index === 0 && <RiHome5Line className='icon' size={24} />}
              {index === 1 && <PiSmileyWink className='icon' size={24} />}
              {index === 2 && <LiaStar className='icon' size={24} />}
              {index === 3 && <GrContact className='icon' size={20} />}
            </div>
            <div className='textContainer'>
              <div className='text'>{splitText(item)}</div>
            </div>
          </li>
        ))}
      </ul>

    </nav>

  )
}

export default Menu