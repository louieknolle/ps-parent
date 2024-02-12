import { TemperatureContext } from 'components/TemperatureContext'
import React, { useContext } from 'react'
import useWeatherData from 'utils/useWeatherData'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/material'
import pantsImage from '../../assets/pants.png'
import shortsImage from '../../assets/shorts_round.png'

const WeatherPage = () => {
  const { preferredTemperature, zipCode } = useContext(TemperatureContext)
  const { data, loading, error } = useWeatherData(zipCode)

  if (loading) {
    return (
      <Box className="flex h-screen items-center justify-center">
        <CircularProgress />
      </Box>
    )
  } else if (error) {
    return <p>Error fetching weather: {error.message}</p>
  }

  // Extract and convert temperature from Kelvin to Fahrenheit
  const kelvinTemp = data?.current?.temp
  const fahrenheitTemp = Math.round((kelvinTemp - 273.15) * 1.8 + 32)

  const decision = fahrenheitTemp >= preferredTemperature ? 'shorts' : 'pants'

  return (
    <div className="flex h-screen flex-col items-center justify-center rounded-lg p-8">
      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="text-center">
        <h1 className="pb-2 text-4xl font-bold text-gray-50">
          {`It is currently ${fahrenheitTemp}°F.`}
        </h1>
        <p className="text-2xl font-light text-gray-200">
          {`Based on your preferences, we recommend you wear ${decision} today.`}
        </p>
      </div>
      <img
        src={decision === 'shorts' ? shortsImage : pantsImage}
        alt={decision}
        className="mx-auto mt-4 w-1/2 rounded-full"
      />
    </div>
  )
}

export default WeatherPage
