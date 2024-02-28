import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'
import WelcomePage from './WelcomePage' // Assuming this is the initial page

describe('<App />', () => {
  it('should render the initial WelcomePage', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /welcome to pants or shorts!/i })).toBeInTheDocument()
  })

  // it('should navigate to WeatherPage on clicking "Get Started"', () => {
  //   render(<App />, { wrapper: MemoryRouter })

  //   const getStartedButton = screen.getByRole('button', { name: /get started/i })
  //   userEvent.click(getStartedButton)

  //   expect(screen.getByRole('heading', { name: /weather page/i })).toBeInTheDocument()
  // })
})
