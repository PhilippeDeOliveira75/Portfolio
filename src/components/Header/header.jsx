import './header.scss';
import { RiHome5Line } from "react-icons/ri";
import { PiSmileyWink } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { LiaStar } from "react-icons/lia";

import { useState } from 'react';

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour diviser le texte en lettres avec des espaces insécables
  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index} style={{ '--index': index }}>
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <header className='headerContainer'>
      <div className='w-title'>
        <h1 className='title'>NeOz</h1>
      </div>

      <nav className='navContainer'>
        <ul className='w-list'>
          {['HOME', 'ABOUT ME', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item, index) => (
            <li 
              key={item}
              className={`list ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
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
  );
}

export default Header;
