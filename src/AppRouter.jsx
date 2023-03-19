import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthRouter } from './modules/auth/router/AuthRouter'
import { Prueba } from './Prueba'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Prueba/>} />
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route />
        <Route />

      </Routes>
    </BrowserRouter>
  )
}
