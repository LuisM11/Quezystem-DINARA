import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Dashboard'
import { Home } from '../pages/Home'
import { NewUser } from '../pages/NewUser'
import { UserOverview } from '../pages/UserOverview'

export const DashboardRouter = () => {
    return (
        <Routes >
            <Route element={<Dashboard />}>
                <Route index  element={<Home />} />
                <Route path='/users'>
                    <Route index element={<UserOverview/>} />
                    <Route path='create' element={<NewUser/>} />
                </Route>
                <Route path='*' element={<Navigate to={"./"} />} />
            </Route>
        </Routes>
    )
}
