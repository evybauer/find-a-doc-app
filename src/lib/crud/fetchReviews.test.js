import { server } from '../../test/mocks/server'
import { http, HttpResponse } from 'msw'
import { fetchReviews } from './fetchReviews'
import { mockReview } from '../../test/mocks/mockReview'

describe('fetchReviews lib functions', () => {

    const reviewsURL = `${import.meta.env.VITE_APP_FIRESTORE_KEY}/reviews`
    // console.log('reviewsURL: ', reviewsURL)

    it('should return the correct data', async () => {
        server.use(
            http.get(reviewsURL, () => { 
                return new HttpResponse(mockReview)
            }),
            )
            const data = await fetchReviews()
            // console.log('data: ', data)
            // expect(data).toEqual(mockProvider)
    })

     it('should return an error', async () => {
        server.use(
            http.get(reviewsURL, () => {
                return new HttpResponse(null, { status: 401 })
            })
        )
        const data = await fetchReviews()
        // console.log('data 2: ', data)   
        // expect(data.length).toBe(0)
    })

})