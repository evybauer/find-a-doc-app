// import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from './index';
import { vi } from 'vitest' 

vi.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key })
}));

describe('ErrorPage', () => {
    it('renders 404 Error', () => {
        const mockReset = vi.fn();

        render(<ErrorPage error={{ status: '404', message: 'Not Found' }} resetErrorBoundary={mockReset} />);

        expect(screen.getByText('404')).to.exist;
        expect(screen.getByText('Not Found')).to.exist;
        expect(screen.getByText('action.retry')).to.exist;
    });
});