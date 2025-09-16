import { firestoreToValidData } from '../../common/utils/firestoreHelpers/firestoreToValidData'

export const fetchReviews = async () => {
    const reviewsURL = `${import.meta.env.VITE_APP_FIRESTORE_KEY}/reviews`

    try {
        const response = await fetch(reviewsURL)
        const rawData = await response.json()
        const convertedData = firestoreToValidData(rawData)
        return convertedData
    } catch (error) {
        console.error('Error:', error)
        return null
    }
}