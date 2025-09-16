export const fetchProviderById = async (id) => {
    const providerURL = `${import.meta.env.VITE_APP_FIRESTORE_KEY}/providers/${id}`

    try {
        const response = await fetch(providerURL)

        if (!response.ok) {
            throw new Error('Server error')
        }

        if (response.status === 401) {
            return {}
        }

        const rawData = await response.json()
        return rawData.fields
    } catch (error) {
        console.error('Error:', error)
        throw error // re-throw the error after logging it
    }
}