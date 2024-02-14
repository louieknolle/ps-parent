import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { TemperatureContext } from 'components/TemperatureContext'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const HomeButton = () => {
  const { setPreferredTemperature, setZipCode } = useContext(TemperatureContext)

  const handleHomeClick = () => {
    setPreferredTemperature(0)
    setZipCode('')
  }
  return (
    <NavLink to="/" onClick={handleHomeClick}>
      <IconButton
        aria-label="home"
        sx={{ position: 'absolute', top: 16, right: 16 }}
        size="large"
        href="/"
      >
        <HomeIcon />
      </IconButton>
    </NavLink>
  )
}

export default HomeButton
