import React, { useState } from 'react'
import { Aside } from './asideNav/Aside';
import { Header } from './header/Header';
import { Outlet } from 'react-router-dom';
export const Dashboard = () => {
 
  return (
    <div className='flex w-full min-h-screen h-auto'>
      <Aside />
      <main className='w-[80%] '>
        <Header/>
        <Outlet/>
      </main>
    </div>
  )
}
