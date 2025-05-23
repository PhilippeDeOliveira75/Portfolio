import './skills.scss'

import { useTranslation } from "react-i18next"

import { React as ReactLogo, Vite, Github, Node, Docker, Redux, Sass, Next, Tailwind} from '@assets/import'
import { Kasa, AG, PetitsPlats, Bank } from '@assets/import'

function Skills() {

  const { t } = useTranslation('translation')
  const logos = [ReactLogo, Vite, Github, Node, Docker, Redux, Sass, Next, Tailwind]

  return (

    <div className="skillsContainer">

      <h2>{t('skills.title')}</h2>

<div className='technoContainer'>
  <div
    className="slider"
    style={{
      '--width': '70px',
      '--height': '70px',
      '--quantity': logos.length,
    }}
  >
    <div className="list">
      {[...logos, ...logos].map((logo, index) => (
        <div
          className="item"
          key={index}
          style={{ '--position': index + 1 }}
        >
          <img src={logo} alt={`logo-${index}`} />
        </div>
      ))}
    </div>
  </div>
</div>


      <div className="projectsContainer">
        <h3>{t('projects.title')}</h3>
        <div className="w-projects">
          <div className="project">
            <img src={Kasa} alt="image site web Kasa" />
          </div>

          <div className="project">
            <img src={AG} alt="image site web AG Consulting" />
          </div>

          <div className="project">
            <img src={PetitsPlats} alt="image site web les petits plats" />
          </div>

          <div className="project">
            <img src={Bank} alt="image site web Bank" />
          </div>
        </div>
      </div>
    </div>

  )

}

export default Skills
