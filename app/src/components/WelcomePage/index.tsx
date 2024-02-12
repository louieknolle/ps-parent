import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import logo from '../../../public/logo.png'
import GetStartedModal from 'components/GetStartedModal'

const WelcomePage = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleNavigate = () => {
    navigate('/weather', { replace: true })
  }

  return (
    <div
      className="flex h-full flex-col items-center justify-center space-y-6"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <h1 className="pb-2 text-4xl font-bold text-gray-50">
        Welcome to Pants or Shorts!
      </h1>
      <p className="w-3/4 text-center text-2xl font-light text-gray-200">
        Based on your preferences, we will help you decide if you should wear
        pants or shorts today.
      </p>
      <Button variant="contained" color="secondary" onClick={handleOpenModal}>
        Get Started
      </Button>
      <div className="flex justify-center align-top">
        <img src={logo} alt="Logo" className="w-1/2 lg:w-1/2" />
      </div>
      {open && (
        <GetStartedModal
          open={open}
          handleClose={() => setOpen(false)}
          handleNavigate={handleNavigate}
        />
      )}
    </div>
  )
}

export default WelcomePage
