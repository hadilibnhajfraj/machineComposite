import React from 'react'
import ReactDOM from 'react-dom/client'
import { i18nReady } from './i18n'
import App from './App.jsx'
import './index.css'

// Wait for the current language's translation bundle to load before the first render,
// so nothing ever flashes raw i18n keys.
i18nReady.then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
