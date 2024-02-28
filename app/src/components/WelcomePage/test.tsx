import { render, screen, fireEvent } from '@testing-library/react'
import WelcomePage from './index'

describe('<WelcomePage />', () => {
  it('renders the heading', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Welcome to Pants or Shorts!')).toBeInTheDocument()
  })

  it('renders the logo image', () => {
    render(<WelcomePage />)

    expect(screen.getByAltText('orange cartoon pants with rays of sunlight shining behind and two white clouds on either side')).toBeInTheDocument()
  })
})

