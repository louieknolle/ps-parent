import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeButton from './HomeButton'

const Layout = () => {
  return (
    <div className="app h-screen bg-gradient-to-r from-sky-500 to-indigo-500 pt-8 flex justify-center">
      <nav>
        <HomeButton />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
