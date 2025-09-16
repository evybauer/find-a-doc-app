import { render, fireEvent } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'
import TopRatedDoctorsCallToAction from './TopRatedDoctorsCallToAction.jsx'
import { message } from 'antd'
import { vi } from 'vitest'

const warningMock = vi.fn()
message.warning = warningMock

describe('TopRatedDoctorsCallToAction', () => {
    it('renders without crashing', () => {
        const { getByRole } = render(
            <I18nextProvider i18n={i18n}>
                <TopRatedDoctorsCallToAction />
            </I18nextProvider>
        )

        const button = getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('shows warning message when button is clicked', () => {
        const { getByRole } = render(
            <I18nextProvider i18n={i18n}>
                <TopRatedDoctorsCallToAction />
            </I18nextProvider>
        )

        const button = getByRole('button')
        fireEvent.click(button)
        expect(warningMock).toHaveBeenCalled()
    })
})