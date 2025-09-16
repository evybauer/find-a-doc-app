import { firestoreToValidData } from '../../common/utils/firestoreHelpers/firestoreToValidData'

export const fetchProviders = async () => {
    const providersURL = `${import.meta.env.VITE_APP_FIRESTORE_KEY}/providers`

    try {
        const response = await fetch(providersURL)
        const rawData = await response.json()
        const convertedData = firestoreToValidData(rawData)
        return convertedData
    } catch (error) {
        console.error('Error:', error)
        return null
    }
}