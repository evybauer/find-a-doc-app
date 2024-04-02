export const firestoreToValidData = (firestoreResponse) => {
    const convertFirestoreResponseToData = (document) => {
        const convertValue = (firestoreValue) => {
            if ('stringValue' in firestoreValue) {
                return firestoreValue.stringValue;
            } else if ('integerValue' in firestoreValue) {
                return parseInt(firestoreValue.integerValue, 10);
            } else if ('doubleValue' in firestoreValue) {
                return firestoreValue.doubleValue;
            } else if ('booleanValue' in firestoreValue) {
                return firestoreValue.booleanValue;
            } else if ('mapValue' in firestoreValue) {
                return Object.entries(firestoreValue.mapValue.fields).reduce((acc, [key, value]) => {
                    acc[key] = convertValue(value)
                    return acc
                }, {})
            } else if ('arrayValue' in firestoreValue) {
                return firestoreValue.arrayValue.values ? firestoreValue.arrayValue.values.map(convertValue) : []
            } else {
                console.error('Unsupported type:', firestoreValue)
                return null
            }
        }

        const convertedObject = Object.entries(document.fields).reduce((acc, [key, value]) => {
            acc[key] = convertValue(value);
            return acc
        }, {})

        return convertedObject
    }

    if (firestoreResponse.documents && Array.isArray(firestoreResponse.documents)) {
        const simpleObjects = firestoreResponse.documents.map(document => convertFirestoreResponseToData(document))

        const data = simpleObjects

        return data
    } else {
        console.error('Invalid Firestore response:', firestoreResponse)
        return null
    }
}