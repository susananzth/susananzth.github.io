import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import './scss/styles.scss'
import Nav from './Nav'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)