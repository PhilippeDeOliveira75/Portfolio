import './intro.scss';

import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import { LanguageSelector } from '@services/import';

import { MatrixCat, RainCode, CV } from '@assets/import';

function Intro () {
    const { t } = useTranslation("translation");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const titles = ["WEB DEVELOPER", "UX DESIGNER", "SEO CONSULTANT", "HERO"];

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light'; 
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className='w-introAndPortrait'>
            <div className='w-intro'>
                <div className='intro'>
                    <h1 className='title'>{t('home.title')}</h1>
                    <div className='w-homeTitle'>
                        <span className='staticTitle'>SUPER</span>
                        <div className="animatedTitles">
                            {titles.concat(titles[0]).map((title, index) => (
                                <span key={index} className="homeTitle">{title}</span>
                            ))}
                        </div>
                    </div>
                    <p className='introText'>
                        {t('home.intro')}
                    </p>
                </div>
                <div className='w-buttonIntro'>
                    <a href={CV} download="CV.pdf" className="buttonIntro downloadButton">
                        {t('home.button')}
                    </a>
                </div>
            </div>
            <div className='w-portrait'>
                <div className='w-darkModeAndLanguage'>
                    <button
                        className={`darkModeButton ${isDarkMode ? 'active' : ''}`}
                        onClick={toggleDarkMode}
                        aria-label={isDarkMode ? "Désactiver le mode sombre" : "Activer le mode sombre"}
                    >
                        <span className={`darkModeIcon ${isDarkMode ? 'active' : ''}`}></span>
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
    );
}

export default Intro;
