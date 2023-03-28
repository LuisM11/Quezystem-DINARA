import React from 'react'
import { Routes , Route, Navigate} from 'react-router-dom'
import { LoginPage, SignUpPage } from '..'

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='*' element={<Navigate to='/auth/login'/>}/>
    </Routes>
  )
}
