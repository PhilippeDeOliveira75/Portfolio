import { Routes, Route } from 'react-router-dom'
import { Home, Test, PublicLayout } from '@pages/Public/import.js'
import { Error } from '@utils/import.js'

function PublicRouter () {

    return (

        <Routes>

            <Route element={<PublicLayout />} >

                <Route path="/" element={<Home />} />
                <Route path="test" element={<Test />} />

            </Route>

            <Route path="*" element={<Error />} />

        </Routes>
        
    )
}

export default PublicRouter