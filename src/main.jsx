import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Nav from './Nav'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)