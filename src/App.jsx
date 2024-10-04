import './App.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRouter } from '@pages/Public/import'
import "@i18n/i18n.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>

        <Routes>

          <Route path="/*" element= {<PublicRouter />}/>

        </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  
)