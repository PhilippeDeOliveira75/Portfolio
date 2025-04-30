import './projects.scss'

import { useTranslation } from "react-i18next"

import { Kasa, AG } from '@assets/import'

function Projects() {

    const { t } = useTranslation("translation")

    return ( 

        <div className="projectsContainer">

            <h2>{t('projects.title')}</h2>

            <div className="w-projects">

                <div className="project">
                    <h3>Kasa</h3>
                    <img src={Kasa} alt="project1" />
                </div>

                <div className="project">
                    <h3>AG</h3>
                    <img src={AG} alt="project2" />
                </div>

                <div className="project">
                    <h3>Les petits plats</h3>
                    <img src='' alt="project3" />
                </div>

                <div className="project">
                    <h3>Bank</h3>
                    <img src='' alt="project4" />
                </div>

            </div>

        </div>

    )

}

export default Projects