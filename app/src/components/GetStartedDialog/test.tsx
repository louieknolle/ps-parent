import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/react'
import GetStartedDialog from './index'
import { vi } from 'vitest'


describe('<GetStartedDialog />', () => {
  it('renders the heading', () => {
    render(<GetStartedDialog />)

    expect(screen.getByText('Personal Preferences')).toBeInTheDocument()
  })

  it('closes the GetStartedDialog when the close button is clicked', () => {
    render(<GetStartedDialog />)

    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    expect(GetStartedDialog).toHaveBeenCalledWith({
      open: false,
      handleClose: expect.any(Function),
    })
  })

  it('closes the GetStartedDialog when the Escape key is pressed', () => {
    render(<GetStartedDialog />)
  
    const button = screen.getByRole('button', { name: /Get Started/i })
    fireEvent.click(button)
  
    fireEvent.keyDown(document.activeElement!, { key: 'Escape', code: 'Escape', keyCode: 27 })
  
    expect(GetStartedDialog).toHaveBeenCalledWith({
      open: false,
      handleClose: expect.any(Function),
    })
  })
})

