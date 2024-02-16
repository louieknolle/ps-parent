import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/react'
import WelcomePage from './index'
import GetStartedModal from 'components/GetStartedDialog'
import { vi } from 'vitest'


vi.mock('components/GetStartedModal', () => ({
  __esModule: true,
  default: vi.fn(() => null),
}))

describe('<WelcomePage />', () => {
  it('renders the heading and description', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Welcome to Pants or Shorts!')).toBeInTheDocument()
    expect(screen.getByText('Based on your preferences')).toBeInTheDocument()
  })

  it('renders the "Get Started" button', () => {
    render(<WelcomePage />)

    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('renders the logo image', () => {
    render(<WelcomePage />)

    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })

  it('opens the GetStartedModal when the "Get Started" button is clicked', () => {
    render(<WelcomePage />)

    const button = screen.getByRole('button', { name: /Get Started/i })
    fireEvent.click(button)

    expect(GetStartedModal).toHaveBeenCalledWith({
      open: true,
      handleClose: expect.any(Function),
    })
  })

  it('closes the GetStartedModal when the close button is clicked', () => {
    render(<WelcomePage />)

    const button = screen.getByRole('button', { name: /Get Started/i })
    fireEvent.click(button)

    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    expect(GetStartedModal).toHaveBeenCalledWith({
      open: false,
      handleClose: expect.any(Function),
    })
  })

  it('closes the GetStartedModal when the Escape key is pressed', () => {
    render(<WelcomePage />)
  
    const button = screen.getByRole('button', { name: /Get Started/i })
    fireEvent.click(button)
  
    fireEvent.keyDown(document.activeElement!, { key: 'Escape', code: 'Escape', keyCode: 27 })
  
    expect(GetStartedModal).toHaveBeenCalledWith({
      open: false,
      handleClose: expect.any(Function),
    })
  })
})

