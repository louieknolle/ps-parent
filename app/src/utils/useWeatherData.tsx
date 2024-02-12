import { useState, useEffect } from 'react'
import axios from 'axios'

// Placeholder API key (replace with your actual key)
const OPEN_WEATHER_MAP_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const useWeatherData = (zipCode: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${OPEN_WEATHER_MAP_API_KEY}`
        )
        const locationData = response.data
        const { lat, lon } = locationData
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${OPEN_WEATHER_MAP_API_KEY}`
        )
        setData(weatherResponse.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [zipCode])

  return { data, loading, error }
}

export default useWeatherData
