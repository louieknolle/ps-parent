import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import GetStartedModal from 'components/GetStartedModal'
import logo from 'assets/logo.png'

const WelcomePage = () => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  return (
    <div
      className="flex h-full flex-col items-center justify-center space-y-6"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <h1 className="pb-2 text-4xl text-center font-bold text-gray-50">
        Welcome to Pants or Shorts!
      </h1>
      <p className="w-3/4 lg:w-1/2 text-center text-2xl font-light text-gray-200">
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
        />
      )}
    </div>
  )
}

export default WelcomePage
