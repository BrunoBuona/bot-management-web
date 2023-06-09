import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './Navigation'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>
      <Navigation/>
   </React.StrictMode>,
  </BrowserRouter>
)
