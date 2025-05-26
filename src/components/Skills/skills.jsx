import './skills.scss'

import { useTranslation } from "react-i18next"

import { CarouselProject } from '@components/import'
import { React as ReactLogo, Vite, Github, Node, Docker, Redux, Sass, Next, Tailwind} from '@assets/import'

function Skills() {
  
  const { t } = useTranslation('translation')
  const logos = [ReactLogo, Vite, Github, Node, Docker, Redux, Sass, Next, Tailwind]

  return (
    <div className="skillsContainer">
      <h2>{t('skills.title')}</h2>

      <div className="technoContainer">
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
        <CarouselProject />
      </div>
    </div>
  );
}

export default Skills
