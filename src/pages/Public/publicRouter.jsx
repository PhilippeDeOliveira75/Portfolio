import { Routes, Route } from 'react-router-dom'
import { Home, PublicLayout } from '@pages/Public/import.js'
import { Error } from '@utils/import.js'

function PublicRouter () {

    return (

        <Routes>

            <Route element={<PublicLayout />} >

                <Route path="/" element={<Home />} />

            </Route>

            <Route path="*" element={<Error />} />

        </Routes>
        
    )
}

export default PublicRouter