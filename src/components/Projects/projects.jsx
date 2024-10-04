import './projects.scss'

import { useTranslation } from "react-i18next"

function Projects() {

    const { t } = useTranslation("translation")

    return ( 

        <div className="projectsContainer">

            <h2>{t('projects.title')}</h2>

            <div className="w-projects">

                <div className="project">
                    <img src='' alt="project1" />
                    <h3>{t('projects.text1')}</h3>
                    <p>Project description</p>
                </div>

                <div className="project">
                    <img src='' alt="project2" />
                    <h3>{t('projects.text2')}</h3>
                    <p>Project description</p>
                </div>

                <div className="project">
                    <img src='' alt="project3" />
                    <h3>{t('projects.text3')}</h3>
                    <p>Project description</p>
                </div>

                <div className="project">
                    <img src='' alt="project4" />
                    <h3>{t('projects.text4')}</h3>
                    <p>Project description</p>
                </div>

            </div>

        </div>

    )

}

export default Projects