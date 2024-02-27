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
      <Box className="flex h-full items-center justify-center">
        <CircularProgress />
      </Box>
    )
  } else if (error) {
    return (
      <Box className="flex h-full items-center justify-center">
        <h1 className="pb-2 text-3xl lg:text-4xl font-bold text-gray-50 text-center">Error fetching weather. Please try again.</h1>
      </Box>
    )
  }

  const kelvinTemp = data?.current?.temp
  const fahrenheitTemp = Math.round((kelvinTemp - 273.15) * 1.8 + 32)

  const decision = fahrenheitTemp >= preferredTemperature ? 'shorts' : 'pants'

  return (
    <div className="flex h-full flex-col rounded-lg p-2 space-y-2">
      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="text-center">
        <h1 className="pb-2 text-3xl lg:text-4xl font-bold text-gray-50">
          {`It is currently ${fahrenheitTemp}°F.`}
        </h1>
        <p className="text-xl lg:text-2xl font-light text-gray-200">
          {`Based on your preferences, we recommend you wear ${decision} today.`}
        </p>
      </div>
      <img
        src={decision === 'shorts' ? shortsImage : pantsImage}
        alt={`cartoon ${decision}`}
        className="mx-auto mt-4 w-1/2 rounded-full"
      />
    </div>
  )
}

export default WeatherPage
