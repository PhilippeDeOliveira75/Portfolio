import './footer.scss'

import { useTranslation } from 'react-i18next'

function Footer() {

    const { t } = useTranslation('translation')

    return (

        <footer className="footer">

            <p>{t('footer.text')}</p>

        </footer>

    )

}

export default Footer