import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/cyrillic-400.css'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto-mono/cyrillic-400.css'
import '@fontsource/roboto-mono/latin-400.css'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
