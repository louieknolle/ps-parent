import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeButton from './HomeButton'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="app h-screen w-screen bg-gradient-to-r from-sky-500 to-indigo-500 pt-8 lg:pt-16 flex justify-center">
      <nav className="">
        <HomeButton />
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
