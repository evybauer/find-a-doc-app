import { http, HttpResponse } from 'msw'
import { mockProvider } from './mockProvider'

export const handlers = [
    http.get(`${import.meta.env.VITE_APP_FIRESTORE_KEY}/providers`, () => {
        return HttpResponse.json(mockProvider)
    }, {status: 200}),
  ]