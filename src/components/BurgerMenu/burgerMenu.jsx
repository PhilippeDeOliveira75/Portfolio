import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiHome5Line } from 'react-icons/ri';
import { PiSmileyWink } from 'react-icons/pi';
import { LiaStar } from 'react-icons/lia';
import { GrContact } from 'react-icons/gr';
import './burgerMenu.scss';

const BurgerMenu = () => {
  const { t } = useTranslation('translation');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleClick = (index) => {
    setActiveIndex(index);
    setIsOpen(false); // ferme le menu après clic
  };

  const splitText = (text) => {
    return text.split('').map((letter, i) => (
      <span key={i} className="letter">{letter}</span>
    ));
  };

  const items = [
    t('NavBar.home'),
    t('NavBar.aboutme'),
    t('NavBar.skills'),
    t('NavBar.contact'),
  ];

  return (

    <div className="burger-menu-container">
      
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
        <span></span>
        <span></span>
      </div>

      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className="w-list">
          {items.map((item, index) => (
            <li
              key={item}
              className={`list ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
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
};

export default BurgerMenu;
