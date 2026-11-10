import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource/ibm-plex-mono/latin-400.css'
import App from './App.jsx'
import './styles.css'

const legacySections = {
  '/projects': 'work',
  '/about': 'about',
  '/newproject': 'contact',
  '/pycontrol': 'work',
}
const legacySection = legacySections[window.location.pathname.replace(/\/$/, '')]

if (legacySection) {
  window.location.replace('/#' + legacySection)
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
