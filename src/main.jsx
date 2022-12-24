import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { NextMovieApp } from './NextMovieApp'


// styles
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <NextMovieApp />
    </React.StrictMode>
  </BrowserRouter>
)
