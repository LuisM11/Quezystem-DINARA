import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { AuthRouter } from './modules/auth/router/AuthRouter'
import { Dashboard } from './modules/dashboard/Dashboard'
import { useGlobalContext } from './modules/context/GlobalContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ProtectedRoute } from './modules/auth/router/ProtectedRoute';
import { RedirectRouter } from './modules/utils/RedirectRouter';

export const AppRouter = () => {
  const queryClient = new QueryClient()
  const {loggedUser} = useGlobalContext();
  return (
      <QueryClientProvider client={queryClient}>
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
              <Route path='/' element={<RedirectRouter/> } />
              <Route path='/auth/*' element={<ProtectedRoute isAllowed={!loggedUser} redirectTo='/dashboard'> <AuthRouter /></ProtectedRoute>} />
              <Route path='/dashboard' element={<ProtectedRoute isAllowed={!!loggedUser} > <Dashboard /> </ProtectedRoute>} />
              <Route path='*' element={<Navigate to={'/'}/> } />
              <Route />
            </Routes>
          </ConfigProvider>
        </BrowserRouter>
        <ReactQueryDevtools/>
      </QueryClientProvider>
  )
}
