import './skills.scss'
import { useEffect } from 'react'
import { useTranslation } from "react-i18next"
import { React as ReactLogo, Vite, Github, Node, Docker, Redux, Sass } from '@assets/import'

function Skills() {
  const { t } = useTranslation("translation")

  useEffect(() => {
    // Clone l'élément pour créer un effet infini
    const slide = document.querySelector(".logos-slide")
    const copy = slide.cloneNode(true)
    document.querySelector(".logos").appendChild(copy)
  }, [])

  const logos = [ReactLogo, Vite, Github, Node, Docker, Redux, Sass]

  return (
    <div className="skillsContainer">
      <h2>{t('skills.title')}</h2>
      <div className="logos">
        <div className="logos-slide">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt={`logo-${i}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
