import { useState, useEffect } from 'react'
import { firestoreToValidData } from '../common/utils/firestoreHelpers/firestoreToValidData'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const convertedData = firestoreToValidData(data)
        setData(convertedData)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error)
        setError(error)
      })
  }, [url])

  return { data, loading, error }
}
