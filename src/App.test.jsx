import { render, screen, waitFor } from './common/utils/test-utils'
import App from './App'

vi.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key })
}))

describe("Test", () => {
    it("Testing vitest", async () => {
          render(<App />)
          const dropdownButton = screen.getAllByText('Language.english')
          const navbarItem = screen.getByText('Navbar.browse')
          const loginButton = screen.getByText('action.login')
          const footerText = screen.getByText('Evelyn Bauer')

          await waitFor(() => {
            expect(dropdownButton).toHaveLength(2)
            expect(navbarItem).toBeInTheDocument()
            expect(loginButton).toBeInTheDocument()
            expect(footerText).toBeInTheDocument()
          }) 
    })
})
