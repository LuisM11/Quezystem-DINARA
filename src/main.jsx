import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import './index.css'
import { ContextProvider } from './modules/context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <AppRouter/>
    </ContextProvider>
  </React.StrictMode>,
)
