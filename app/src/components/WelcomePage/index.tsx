import React from 'react'
import GetStartedDialog from 'components/GetStartedDialog'
import logo from 'assets/logo.png'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  const navigate = useNavigate()
  return (
    <div
      className="flex h-full flex-col items-center justify-center rounded-lg p-8 space-y-2"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <h1 className="pb-2 text-3xl lg:text-4xl text-center font-bold text-gray-50">
        Welcome to Pants or Shorts!
      </h1>
      <p className="pb-4 w-3/4 lg:w-1/2 text-center text-xl lg:text-2xl font-light text-gray-200">
        Enter your preferences and location, we'll do the rest.
      </p>
      <GetStartedDialog navigate={navigate} />
      <div className="flex justify-center align-top">
        <img src={logo} alt="orange cartoon pants with rays of sunlight shining behind and two white clouds on either side" className="w-1/2 lg:w-1/2" />
      </div>
    </div>
  )
}

export default WelcomePage
