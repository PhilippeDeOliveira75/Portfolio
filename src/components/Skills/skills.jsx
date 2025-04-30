import './skills.scss'
import { useTranslation } from "react-i18next"
import { React as ReactLogo, Vite, Github, Node, Docker, Redux, Sass, Next, Tailwind} from '@assets/import'

function Skills() {
  const { t } = useTranslation("translation")

  const logos = [ReactLogo, Vite, Github, Node, Docker, Redux, Sass, Next, Tailwind]

  return (
    <div className="skillsContainer">
      <h2>{t('skills.title')}</h2>
      <div className="logos">
        <div className="logos-slide">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} alt={`logo-${i}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
