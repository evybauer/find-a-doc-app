import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n' // Assuming you have an i18n config file
import ProviderCard from './ProviderCard.jsx'
import { mockProvider } from '../../test/mocks/mockProvider.jsx'

describe('renders provider name', () => {
    it('renders provider on isModalVisible false', () => {
        render(
            <Router>
                <I18nextProvider i18n={i18n}>
                    <ProviderCard provider={mockProvider} isModalVisible={false} />
                </I18nextProvider>
            </Router>
        )
        expect(screen.getByText('Dr. Sarah Thompson')).toBeInTheDocument()
        expect(screen.getByText('Endocrinologist')).toBeInTheDocument()
        expect(screen.getByText('5 (368 reviews)')).toBeInTheDocument()
    })
    it('renders provider on isModalVisible true', () => {
        render(
            <Router>
                <I18nextProvider i18n={i18n}>
                    <ProviderCard provider={mockProvider} isModalVisible={true} />
                </I18nextProvider>
            </Router>
        )
        const submitButton = screen.queryByText('Dr. Sarah Thompson')
        expect(submitButton).toBeNull()
        expect(screen.getByText('Endocrinologist')).toBeInTheDocument()
        expect(screen.getByText('5 (368 reviews)')).toBeInTheDocument()
    })
})