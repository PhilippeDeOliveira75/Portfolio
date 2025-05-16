import './projects.scss'

import { useTranslation } from "react-i18next"

import { Kasa, AG, PetitsPlats, Bank } from '@assets/import'

function Projects() {

    const { t } = useTranslation("translation")

    return ( 

        <div className="projectsContainer">

            <h2>{t('projects.title')}</h2>

            <div className="w-projects">

                <div className="project">
                    <h3>Kasa</h3>
                    <img src={Kasa} alt="image site web Kasa" />
                </div>

                <div className="project">
                    <h3>AG</h3>
                    <img src={AG} alt="image site web AG Consulting" />
                </div>

                <div className="project">
                    <h3>Les petits plats</h3>
                    <img src={PetitsPlats} alt="image site web les petits plats" />
                </div>

                <div className="project">
                    <h3>Bank</h3>
                    <img src={Bank} alt="image site web Bank" />
                </div>

            </div>

        </div>



    )

}

export default Projects