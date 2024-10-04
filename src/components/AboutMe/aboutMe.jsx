import './aboutMe.scss';

import { useTranslation } from "react-i18next"

import { PiPathBold } from "react-icons/pi"
import { PiGearSixThin } from "react-icons/pi"


function AboutMe () {

    const { t } = useTranslation("translation")

    return (

        <div className="aboutMeContainer" id='about-me'>

            <div className="aboutMeTilteAndCitation">
                <h2 className="aboutMeTitle">{t('aboutme.title')}</h2> 
                <p className='aboutMeCitation'>{t('aboutme.text')}</p>
            </div>

            <div className="w-aboutMeContent">

                <div className="w-aboutMeIconAndText">
                    <div className="w-aboutMeIcon">
                        <PiPathBold className='aboutMeIcon'/>
                        <div className="colorCircle"></div>
                    </div>
                    <h3>{t('aboutme.h3first')}</h3> 
                    <p className="aboutMeContentText">{t('aboutme.text2')}</p>
                </div>

                <div className="w-aboutMeIconAndText">
                    <div className="w-aboutMeIcon">
                        <PiGearSixThin className='aboutMeIcon strokePlus'/>
                        <div className="colorCircle"></div>
                    </div>
                    <h3>{t('aboutme.h3second')}</h3>
                    <p className="aboutMeContentText">{t('aboutme.text3')}</p>
                </div>

            </div>

        </div>

    )

}

export default AboutMe