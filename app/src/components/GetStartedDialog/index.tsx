import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { IconButton, Stack } from '@mui/material'
import { TemperatureContext } from 'components/TemperatureContext'
import CloseIcon from '@mui/icons-material/Close'
import { useContext, useState } from 'react'
import usZips from 'us-zips/array'
import { NavigateFunction, useNavigate } from 'react-router-dom'

interface GetStartedDialogProps {
  navigate: NavigateFunction
}

const GetStartedDialog = ({navigate}: GetStartedDialogProps) => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const { setPreferredTemperature, preferredTemperature, setZipCode, zipCode } =
    useContext(TemperatureContext)

  const tempInput = document.querySelector('#temperature-input')
  const zipInput = document.querySelector('#zip-code-input')

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidNumber = !isNaN(parseFloat(e.target.value))

    if (isValidNumber) {
      e.target.style.backgroundColor = 'white'
    } else {
      e.target.style.backgroundColor = '#ffcccc'
    }

    setPreferredTemperature(parseFloat(e.target.value))
  }

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidNumber = !isNaN(parseInt(e.target.value))

    // TODO: Check for valid zip code within usZips

    // // Check for valid zip code within usZips
    // const validZip = usZips.find(obj => obj.zip === e.target.value)
    // console.log(zipCode)

    if (isValidNumber) {
      e.target.style.backgroundColor = 'white'
    } else {
      e.target.style.backgroundColor = '#ffcccc'
    }
    setZipCode(e.target.value)
  }

  const handleTemperatureSubmit = () => {
    navigate('/weather')
    handleClose()
  }

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpenModal} role='button' name='Get Started'>
        Get Started
      </Button>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="get-started-dialog-title"
          aria-describedby="get-started-dialog-description"
        >
          <DialogTitle id="get-started-dialog-title">
            Personal Preferences
          </DialogTitle>
          <IconButton
            name='close'
            role='button'
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent className="flex justify-center">
            <Stack spacing={2} className="w-4/5" justifyContent="center">
              <DialogContentText id="get-started-dialog-description">
                At what minimum temperature (°F) do you prefer to wear shorts?
                (Sorry, we only support US locations at the moment.)
              </DialogContentText>
              <TextField
                id="temperature-input"
                label="Temperature"
                type="number"
                onChange={handleTemperatureChange}
                required
              />
              <DialogContentText
                id="get-started-dialog-description"
                sx={{ mb: 2 }}
              >
                What is your location's zip code?
              </DialogContentText>
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
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleTemperatureSubmit}
              disabled={!preferredTemperature || !zipCode}
              role='button'
              name='Save Preferences'
            >
              Save Preferences
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}

export default GetStartedDialog
