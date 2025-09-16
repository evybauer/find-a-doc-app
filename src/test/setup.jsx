import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { server } from './mocks/server'

beforeAll(() => {
    server.listen({ onUnhandledRequest: "bypass" })
})

afterEach(() => {
    server.resetHandlers()
    cleanup()
})

afterAll(() => (
    server.close()
))

