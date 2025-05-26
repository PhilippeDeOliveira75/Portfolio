import './footer.scss'

import { useTranslation } from 'react-i18next'

function Footer() {

    const { t } = useTranslation('translation')

    return (

        <footer className="footer">

            <p>{t('footer.text1')}</p>
            <p>{t('footer.text2')}</p>

        </footer>

    )

}

export default Footer