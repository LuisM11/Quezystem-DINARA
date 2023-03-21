import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Button, ConfigProvider } from 'antd';
import { AuthRouter } from './modules/auth/router/AuthRouter'
import { Home } from './modules/Home'
import { Prueba } from './Prueba'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#243763',
            fontFamily: 'Rubik'
          },
        }}
      >
        <Routes>
          <Route path='/' element={<Prueba />} />
          <Route path='/auth/*' element={<AuthRouter />} />
          <Route path='/home' element={<Home />} />
          <Route />

        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  )
}
