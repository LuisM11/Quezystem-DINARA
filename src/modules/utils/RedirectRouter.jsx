import React from 'react'
import { Navigate } from 'react-router-dom';

export const RedirectRouter = () => {
    return (
       localStorage.getItem('user') ? <Navigate to='/dashboard' /> : <Navigate to='/auth/' />
  )
}
