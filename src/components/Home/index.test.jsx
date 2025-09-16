import { render, screen } from '@testing-library/react'
import Home from './index'
import { server } from '../../test/mocks/server'
import { HttpResponse, http } from 'msw'

describe('Home', () => {
    it('should render', () => {
        render(<Home />)
        const title = screen.getByText('specialties.services_title')
        expect(title).toBeInTheDocument()
    })
    // it('api succes scenario', async () => {
    //     render(<Home />)
    //     expect(await screen.findByText("Todo List: 1")).toBeInTheDocument()
    // })
    // it('api error scenario on load', () => {
    //     render(<Home />)
    //     server.use(
    //         http.get('https://dummyjson.com/todos', () => {
    //             return new HttpResponse(null, { status: 401 })
    //         })
    //     )
    //     expect(screen.queryByText("Todo List")).not.toBeInTheDocument()
    // })
})

