import { server } from '../../test/mocks/server'
import { http, HttpResponse } from 'msw'
import { fetchProviders } from './fetchProviders'
import { mockProviders } from '../../test/mocks/mockProviders'


describe('fetchProviders lib functions', () => {

    const providersURL = `${import.meta.env.VITE_APP_FIRESTORE_KEY}/providers`

    it('should return the correct data', async () => {
        server.use(
            http.get(providersURL, () => { 
                const validData = firestoreToValidDataById(mockProviders)
                return new HttpResponse(200, validData)
            }),
        )
        const data = await fetchProviders()
        expect(data).toEqual(mockProviders)
    })
    
})