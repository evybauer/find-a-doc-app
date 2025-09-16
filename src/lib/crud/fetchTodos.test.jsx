import { server } from '../../test/mocks/server'
import { http } from 'msw'
import  { fetchTodos }  from './fetchTodos'

describe('fetchTodos lib functions', () => {
    it('should return the correct number of itmes', async () => {
        const data = await fetchTodos()
        const todos = data.todos
        // expect(todos.length).toBe(1)
    })

    it('should return and empty array with an error', async () => {
        server.use(
            http.get('https://dummyjson.com/todos', () => {
                return new HttpResponse(null, { status: 401 })
            })
        )
        const data = await fetchTodos()
        // expect(data.length).toBe(0)
    })
})
