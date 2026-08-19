import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

const navigationEntry = performance.getEntriesByType('navigation')[0] as
  | PerformanceNavigationTiming
  | undefined
const projectHashes = new Set(['#/gramy', '#/my-sound', '#/mysound', '#/japan'])
const projectPaths = new Set(['/gramy', '/my-sound', '/mysound', '/japan'])
const isProjectPage =
  projectHashes.has(window.location.hash) || projectPaths.has(window.location.pathname)

if (navigationEntry?.type === 'reload' && isProjectPage) {
  window.history.replaceState(null, '', import.meta.env.BASE_URL)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
