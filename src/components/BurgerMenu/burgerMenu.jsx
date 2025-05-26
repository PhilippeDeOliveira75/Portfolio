import './burgerMenu.scss';

import { RiHome5Line } from 'react-icons/ri';
import { PiSmileyWink } from 'react-icons/pi';
import { LiaStar } from 'react-icons/lia';
import { GrContact } from 'react-icons/gr';

function MenuBurger ({ t, activeIndex, handleClick, isMenuOpen, setIsMenuOpen }) {
  
  function toggleMenu() {
    console.log('ToggleMenu clicked');
    setIsMenuOpen(prev => !prev);
  }

  function splitText(text) {
    return text.split('').map((letter, i) => (
      <span key={i} className="letter">{letter}</span>
    ));
  }

  const items = [
    t('NavBar.home'),
    t('NavBar.aboutme'),
    t('NavBar.skills'),
    t('NavBar.contact'),
  ];

  return (
    <div className="burger-menu-container">
      <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
      </div>

      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="w-list">
          {items.map((item, index) => (
            <li
              key={item}
              className={`list ${activeIndex === index ? 'active' : ''}`}
              onClick={() => {
                handleClick(index);
                setIsMenuOpen(false);
              }}
            >
              <div className="iconContainer">
                {index === 0 && <RiHome5Line className="icon" size={24} />}
                {index === 1 && <PiSmileyWink className="icon" size={24} />}
                {index === 2 && <LiaStar className="icon" size={24} />}
                {index === 3 && <GrContact className="icon" size={20} />}
              </div>
              <div className="textContainer">
                <div className="text">{splitText(item)}</div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;
