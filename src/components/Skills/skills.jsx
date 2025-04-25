import './skills.scss'
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from 'react'
import { React, Vite, Github, Node, Docker, Redux, Sass } from '@assets/import'

function Skills() {
  const { t } = useTranslation("translation")
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let scrollAmount = 0
    const speed = 0.2 // vitesse du défilement

    const scroll = () => {
      scrollAmount += speed
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0 // réinitialisation du défilement lorsque l'on atteint la fin
      }
      container.scrollLeft = scrollAmount
    }

    const intervalId = setInterval(scroll, 10) // intervalle de mise à jour à chaque 10ms

    return () => clearInterval(intervalId) // Nettoyage à l'arrêt du composant
  }, [])

  const logos = [React, Vite, Github, Node, Docker, Redux, Sass]

  return (
    <div className='skillsContainer'>
      <h2>{t('skills.title')}</h2>
      <div className='carousel' ref={containerRef}>
        {[...logos, ...logos].map((logo, i) => (
          <img key={i} src={logo} alt={`logo-${i}`} />
        ))}
      </div>
    </div>
  )
}

export default Skills
