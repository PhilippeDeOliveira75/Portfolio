import './layout.scss'
import { Outlet } from 'react-router'
import { Header, Footer } from '@components/import.js'


function PublicLayout  ()  {

    return (

        <div className='layout'>

            <Header />

            <div className='mainContainer'>
                <Outlet />
                <Footer />
            </div>



        </div>

    )

}

export default PublicLayout