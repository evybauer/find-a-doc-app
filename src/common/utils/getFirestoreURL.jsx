export const getFirestoreURL = (collectionName) => {
    const baseURL = import.meta.env.VITE_APP_FIRESTORE_KEY
    const baseURLWithoutCollection = baseURL.substring(0, baseURL.lastIndexOf('/'))
    return `${baseURLWithoutCollection}/${collectionName}`
}