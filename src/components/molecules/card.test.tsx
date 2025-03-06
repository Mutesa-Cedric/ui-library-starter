import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from './card'

describe('card', () => {
  it('renders without crashing', () => {
    render(<Card />)
    expect(screen.getByText('card')).toBeInTheDocument()
  })

  it('has the correct text content', () => {
    const { container } = render(<Card />)
    expect(container.textContent).toBe('card')
  })

  it('renders as a div element', () => {
    render(<Card />)
    const cardElement = screen.getByText('card')
    expect(cardElement.tagName).toBe('DIV')
  })
})
