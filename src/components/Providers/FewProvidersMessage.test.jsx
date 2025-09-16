import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FewProvidersMessage from './FewProvidersMessage.jsx'
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n'; // adjust this import based on your file structure
import { BrowserRouter as Router } from 'react-router-dom';

describe('FewProvidersMessage', () => {
    it('should render FewProvidersMessage', () => {
        const setFilteredOptions = vi.fn(); // mock function

        const { container } = render(
            <Router>
                <I18nextProvider i18n={i18n}>
                    <FewProvidersMessage setFilteredOptions={setFilteredOptions} />
                </I18nextProvider>
            </Router>
        );

        console.log(screen.debug(null, 2000))
        // expect(container).toMatchSnapshot()
    })
})