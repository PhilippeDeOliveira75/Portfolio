import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import './carouselProject.scss'
import { projects } from '@services/ProjectsData/projectsData'

function CarouselProject() {
  const [startIndex, setStartIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const prev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true, 
  })

  const currentProject = projects[startIndex]

  return (
    <div className="carousel">
      {!isMobile && <button className="nav left" onClick={prev}>‹</button>}

      <div className="cards-wrapper" {...(isMobile ? swipeHandlers : {})}>
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

      {!isMobile && <button className="nav right" onClick={next}>›</button>}

      {isMobile && (
        <div className="pagination-dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === startIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CarouselProject
