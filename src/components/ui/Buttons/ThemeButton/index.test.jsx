import { render, fireEvent } from '@testing-library/react'
import { ThemeButton } from './index.jsx'
import { ThemeContext } from '../../../../lib/themes'
import { vi } from 'vitest'

describe('ThemeButton', () => {
    it('renders without crashing', () => {
        const mockToggleTheme = vi.fn()
        const { getByRole } = render(
            <ThemeContext.Provider value={{ theme: { type: 'light' }, toggleTheme: mockToggleTheme }}>
                <ThemeButton />
            </ThemeContext.Provider>
        )

        const button = getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('calls toggleTheme when clicked', () => {
        const mockToggleTheme = vi.fn()
        const { getByRole } = render(
            <ThemeContext.Provider value={{ theme: { type: 'light' }, toggleTheme: mockToggleTheme }}>
                <ThemeButton />
            </ThemeContext.Provider>
        )

        const button = getByRole('button')
        fireEvent.click(button)
        expect(mockToggleTheme).toHaveBeenCalled()
    })
})