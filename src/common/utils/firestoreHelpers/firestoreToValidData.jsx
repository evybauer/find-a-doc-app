export const firestoreToValidData = (firestoreResponse) => {
  const convertFirestoreResponseToData = (document) => {
    const convertValue = (firestoreValue) => {
      if ('stringValue' in firestoreValue) {
        return firestoreValue.stringValue
      } else if ('integerValue' in firestoreValue) {
        return parseInt(firestoreValue.integerValue, 10)
      } else if ('doubleValue' in firestoreValue) {
        return firestoreValue.doubleValue
      } else if ('booleanValue' in firestoreValue) {
        return firestoreValue.booleanValue
      } else if ('mapValue' in firestoreValue) {
        return Object.entries(firestoreValue.mapValue.fields).reduce(
          (acc, [key, value]) => {
            acc[key] = convertValue(value)
            return acc
          },
          {},
        )
      } else if ('arrayValue' in firestoreValue) {
        return firestoreValue.arrayValue.values
          ? firestoreValue.arrayValue.values.map(convertValue)
          : []
      } else {
        console.error('Unsupported type:', firestoreValue)
        return null
      }
    }

    const convertedObject = Object.entries(document.fields).reduce(
      (acc, [key, value]) => {
        acc[key] = convertValue(value)
        return acc
      },
      {},
    )

    return convertedObject
  }

  if (
    firestoreResponse.documents &&
    Array.isArray(firestoreResponse.documents)
  ) {
    const simpleObjects = firestoreResponse.documents.map((document) =>
      convertFirestoreResponseToData(document),
    )

    const data = simpleObjects

    return data
  } else {
    console.error('Invalid Firestore response:', firestoreResponse)
    return null
  }
}

export const firestoreToValidDataById = (firestoreResponse) => {
  const convertFirestoreResponseToData = (document) => {
    const convertValue = (firestoreValue) => {
      if ('stringValue' in firestoreValue) {
        return firestoreValue.stringValue
      } else if ('integerValue' in firestoreValue) {
        return parseInt(firestoreValue.integerValue, 10)
      } else if ('doubleValue' in firestoreValue) {
        return firestoreValue.doubleValue
      } else if ('booleanValue' in firestoreValue) {
        return firestoreValue.booleanValue
      } else if ('mapValue' in firestoreValue) {
        return Object.entries(firestoreValue.mapValue.fields).reduce(
          (acc, [key, value]) => {
            acc[key] = convertValue(value)
            return acc
          },
          {},
        )
      } else if ('arrayValue' in firestoreValue) {
        return firestoreValue.arrayValue.values
          ? firestoreValue.arrayValue.values.map(convertValue)
          : []
        } else if ('timestampValue' in firestoreValue) {
          return new Date(firestoreValue.timestampValue);
        } else {
          console.error('Unsupported type:', firestoreValue)
          return null
        }
    }

    const convertedObject = Object.entries(document.fields).reduce(
      (acc, [key, value]) => {
        acc[key] = convertValue(value)
        return acc
      },
      {},
    )

    if (document.createTime) {
      convertedObject.createTime = new Date(document.createTime);
    }
    if (document.updateTime) {
      convertedObject.updateTime = new Date(document.updateTime);
    }

    return convertedObject
  }

  if (
    firestoreResponse.documents &&
    Array.isArray(firestoreResponse.documents)
  ) {
    const simpleObjects = firestoreResponse.documents.map((document) =>
      convertFirestoreResponseToData(document),
    )

    const data = simpleObjects

    return data
  } else {
    console.error('Invalid Firestore response:', firestoreResponse)
    return null
  }
}

export const firestoreToValidDataTest = (firestoreResponse) => {
  const convertFirestoreResponseToData = (document) => {
    const convertValue = (firestoreValue) => {
      if ('stringValue' in firestoreValue) {
        return firestoreValue.stringValue
      } else if ('integerValue' in firestoreValue) {
        return parseInt(firestoreValue.integerValue, 10)
      } else if ('doubleValue' in firestoreValue) {
        return firestoreValue.doubleValue
      } else if ('booleanValue' in firestoreValue) {
        return firestoreValue.booleanValue
      } else if ('mapValue' in firestoreValue) {
        if (firestoreValue.mapValue.fields) {
          return Object.entries(firestoreValue.mapValue.fields).reduce(
            (acc, [key, value]) => {
              acc[key] = convertValue(value)
              return acc
            },
            {},
          )
        } else {
          console.error('Unsupported mapValue:', firestoreValue.mapValue)
          return null
        }
      } else if ('arrayValue' in firestoreValue) {
        if (firestoreValue.arrayValue.values) {
          return firestoreValue.arrayValue.values.map(convertValue)
        } else {
          console.error('Unsupported arrayValue:', firestoreValue.arrayValue)
          return null
        }
      } else {
        console.error('Unsupported type:', firestoreValue)
        return null
      }
    }

    const convertedObject = Object.entries(document.fields).reduce(
      (acc, [key, value]) => {
        acc[key] = convertValue(value)
        return acc
      },
      {},
    )

    return convertedObject
  }

  if (firestoreResponse.fields) {
    // This is a single document response
    return convertFirestoreResponseToData(firestoreResponse);
  } else if (
    firestoreResponse.documents &&
    Array.isArray(firestoreResponse.documents)
  ) {
    // This is a response with multiple documents
    return firestoreResponse.documents.map(convertFirestoreResponseToData);
  } else {
    console.error('Invalid Firestore response:', firestoreResponse)
    return null
  }
}