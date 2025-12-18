/*
 * IMPORTANT: "Open Source" is religion.
 * It must ALWAYS be capitalized as "Open Source" (capital O, capital S).
 * This rule applies to all content, documentation, and source code comments.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
