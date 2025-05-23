import { useState } from 'react'
import './carouselProject.scss'
import { projects } from '@services/ProjectsData/projectsData'

function CarouselProject() {
  const [startIndex, setStartIndex] = useState(0)

  const prev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const currentProject = projects[startIndex]

  return (
    <div className="carousel">
      <button className="nav left" onClick={prev}>‹</button>

      <div className="cards-wrapper">
  <a
    href={currentProject.link}
    target="_blank"
    rel="noopener noreferrer"
    className="card-link"
  >
    <div className="card">
      <img src={currentProject.image} alt="project" className="project-image" />
      <div className="tech-logos">
        {currentProject.techs.map((logo, j) => (
          <img key={j} src={logo} alt={`tech-${j}`} />
        ))}
      </div>
      <p className="description">{currentProject.description}</p>
      <span className="description objectif-title">Objectif</span>
      <p className="description">{currentProject.objectif}</p>
    </div>
  </a>
</div>


      <button className="nav right" onClick={next}>›</button>
    </div>
  )
}

export default CarouselProject
