import React from 'react'
import ReactDOM from 'react-dom/client'
import './GlobalStyles.css'
import { App } from './template/App/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
