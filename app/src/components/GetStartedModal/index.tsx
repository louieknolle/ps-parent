import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'
import { TemperatureContext } from 'components/TemperatureContext'
import { useContext, useState } from 'react'
import usZips from 'us-zips/array'
import { NavLink } from 'react-router-dom'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

interface GetStartedModalProps {
  handleClose: () => void
  open: boolean
}

const GetStartedModal = ({
  handleClose,
  open,
}: GetStartedModalProps) => {
  const { setPreferredTemperature, setZipCode, zipCode } = useContext(TemperatureContext)
  const [isTempNumber, setIsTempNumber] = useState(false)
  const [isZipCodeValid, setIsZipCodeValid] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isTempNumber = !isNaN(parseFloat(e.target.value))
    setIsTempNumber(isTempNumber)

    if (isTempNumber) {
      e.target.style.backgroundColor = 'white'
    } else {
      e.target.style.backgroundColor = '#ffcccc'
    }
  }

  const forreal = usZips.find(obj => obj.zipCode === zipCode)

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value)
    setIsZipCodeValid(!isNaN(parseInt(e.target.value)))

    // TODO: Check for valid zip code within usZips
  
    // // Check for valid zip code within usZips
    // const validZip = usZips.find(obj => obj.zip === e.target.value)
    // console.log(zipCode)
  
    if (isZipCodeValid) {
      e.target.style.backgroundColor = 'white'
    } else {
      e.target.style.backgroundColor = '#ffcccc'
    }
  }

  const handleTemperatureSubmit = () => {
    const textInput = document.getElementById(
      'temperature-input'
    ) as HTMLInputElement
    const enteredTemperature = parseFloat(textInput?.value)
    setPreferredTemperature(enteredTemperature)
    setIsTempNumber(false)
    handleClose()
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <Stack sx={style} spacing={4}>
          <Stack spacing={2}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Temperature Preferences
            </Typography>
            <Typography id="transition-modal-description" sx={{ mb: 2 }}>
              At what minimum temperature do you prefer to wear shorts?
            </Typography>
            <TextField
              id="temperature-input"
              label="Temperature"
              type="number"
              onChange={handleInputChange}
              required
            />
            <Typography id="transition-modal-description" sx={{ mb: 2 }}>
              What is your location's zip code? (Sorry, we only support US
              locations at the moment.)
            </Typography>
            <TextField
              id="zip-code-input"
              label="Zip Code"
              type="number"
              onChange={handleZipCodeChange}
              required
              inputProps={{
                maxLength: 5
              }}
            />
          </Stack>
          <Button
            onClick={handleTemperatureSubmit}
            disabled={!isTempNumber || !isZipCodeValid}
          >
            <NavLink to="/weather" style={{ textDecoration: 'none' }}>
              Save Preference
            </NavLink>
          </Button>
        </Stack>
      </Fade>
    </Modal>
  )
}

export default GetStartedModal
