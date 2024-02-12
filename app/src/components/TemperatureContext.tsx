import React, { PropsWithChildren, createContext, useState } from 'react'

interface TemperatureContextValue {
  preferredTemperature: number
  setPreferredTemperature: (newTemperature: number) => void
  zipCode: string
  setZipCode: (newZipCode: string) => void
}

export const TemperatureContext = createContext<TemperatureContextValue>(
  {} as TemperatureContextValue
)

export const TemperatureProvider = ({ children }: PropsWithChildren) => {
  const [preferredTemperature, setPreferredTemperature] = useState<number>(0)
  const [zipCode, setZipCode] = useState<string>('')

  return (
    <TemperatureContext.Provider
      value={{
        preferredTemperature,
        setPreferredTemperature,
        zipCode,
        setZipCode
      }}
    >
      {children}
    </TemperatureContext.Provider>
  )
}
