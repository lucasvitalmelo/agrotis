import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provivers } from './providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provivers />
  </StrictMode>,
)
