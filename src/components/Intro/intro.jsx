import './intro.scss'
import { useTranslation } from "react-i18next"
import { MatrixCat, RainCode, CV } from '@assets/import'

function Intro() {
  const titles = ["WEB DEVELOPER", "UX DESIGNER", "SEO CONSULTANT", "HERO"]
  const { t } = useTranslation("translation")

  return (
    <div className='w-introAndPortrait'>
      <div className='w-intro'>
        <div className='intro'>
          <h1 className='title'>{t('home.title')}</h1>
          <div className='w-homeTitle'>
            <span className='staticTitle'>SUPER</span>
            <div className="animatedTitles">
              {[...titles, ...titles].map((title, index) => (
                <span key={index} className="homeTitle">{title}</span>
              ))}
            </div>
          </div>

          <p className='introText'>
            {t('home.intro')}
          </p>
        </div>
      </div>

      <div className='w-portrait'>
        <div className='w-buttonIntro'>
          <a href={CV} download="CV.pdf" className="buttonIntro downloadButton">
            {t('home.button')}
          </a>
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
