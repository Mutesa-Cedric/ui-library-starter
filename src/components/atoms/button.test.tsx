import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './button'

describe('button', () => {
  it('renders without crashing', () => {
    render(<Button />)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('has the correct text content', () => {
    const { container } = render(<Button />)
    expect(container.textContent).toBe('Button')
  })

  it('renders as a div element by default', () => {
    render(<Button />)
    const buttonElement = screen.getByText('Button')
    expect(buttonElement.tagName).toBe('DIV')
  })
})
