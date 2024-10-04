import './intro.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { LanguageSelector } from '@services/import'
import { MatrixCat, RainCode } from '@assets/import'

function Intro() {

    const { t } = useTranslation("translation")
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
                    <h1 className='title'>{t('home.title')}</h1>
                    <div className='w-homeTitle'>
                        <span className='staticTitle'>SUPER</span>
                        <div className='animatedTitles' style={{ transform: `translateY(-${currentTitleIndex * 40}px)` }}>
                            {titles.concat(titles[0]).map((title, index) => (
                                <span key={index} className={`homeTitle ${index === currentTitleIndex ? 'visible' : ''}`}>{title}</span>
                            ))}
                        </div>
                    </div>
                    <p className='introText'>
                        {t('home.intro')}
                    </p>
                </div>
                <div className='w-buttonIntro'>
                    <button className='buttonIntro'>{t('home.button')}</button>
                </div>
            </div>
            <div className='w-portrait'>
                <div className='w-darkModeAndLanguage'>
                    <button className='darkModeButton'>
                        <span className='darkModeIcon'></span>
                    </button>
                    <LanguageSelector />
                </div>
                <div className="w-portraitAndVideo">
                    <img className='portrait' src={MatrixCat} alt='portrait' />
                    <video className='video' autoPlay playsInline muted loop preload="auto">
                        <source src={RainCode} />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Intro
