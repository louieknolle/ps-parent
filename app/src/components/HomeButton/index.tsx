import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { TemperatureContext } from 'components/TemperatureContext'
import React, { useContext } from 'react'

const HomeButton = () => {
  const { setPreferredTemperature, setZipCode } = useContext(TemperatureContext)

  const handleHomeClick = () => {
    setPreferredTemperature(0)
    setZipCode('')
  }
  return (
    <IconButton
      aria-label="home"
      sx={{ position: 'absolute', top: 16, right: 16 }}
      size="large"
      href="/"
      onClick={handleHomeClick}
    >
      <HomeIcon />
    </IconButton>
  )
}

export default HomeButton
