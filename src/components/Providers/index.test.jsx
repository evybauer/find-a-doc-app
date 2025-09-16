import { render, screen } from '@testing-library/react';
import Providers from './index'
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe('Providers', () => {
    it('should render Providers', () => {
        const { container } = render(
            <Router>
                <I18nextProvider i18n={i18n}>
                    <Providers />
                </I18nextProvider>
            </Router>
        );

        console.log(screen.debug(null, 2000))
        // expect(container).toMatchSnapshot()
    })
})
