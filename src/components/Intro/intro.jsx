import './intro.scss'
import React, { useEffect, useState } from 'react'
import { MatrixCat, Oblique } from '@assets/import'

function Intro() {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const titles = ["WEB DEVELOPER", "UX DESIGNER", "SEO CONSULTANT", "HERO"]
    const totalTitles = titles.length

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % totalTitles)
        }, 2000)

        return () => clearInterval(interval)
    }, [totalTitles])

    return (
        <div className='w-introAndPortrait'>
            <div className='w-intro'>
                <div className='intro'>
                    <h1 className='title'>HI, I'M NEOZ !</h1>
                    <div className='w-homeTitle'>
                        <span className='staticTitle'>SUPER</span>
                        <div className='animatedTitles' style={{ transform: `translateY(-${currentTitleIndex * 40}px)` }}>
                            {titles.concat(titles[0]).map((title, index) => (
                                <span key={index} className={`homeTitle ${index === currentTitleIndex ? 'visible' : ''}`}>{title}</span>
                            ))}
                        </div>
                    </div>
                    <p className='introText'>
                        I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences.
                        With a strong foundation in design principles and a keen eye for detail,
                        I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.
                    </p>
                </div>
                <div className='w-buttonIntro'>
                    <button className='buttonIntro'>Download CV</button>
                </div>
            </div>
            <div className='w-portrait'>
                <img className='portrait' src={MatrixCat} alt='portrait' />
            </div>
        </div>
    )
}

export default Intro
