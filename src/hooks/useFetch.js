import { useState, useEffect } from 'react'
import axios from 'axios'

// useFetch will handle the fetching of data. Based on the needs of the component we can get only certain information from the data response.

const useFetch = (query) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    // Change url to serverless function path.
    // You can also pass in query parameters. Which I'll also do handle using useParams
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      cancelToken: abortCont.token, // Use cancelToken instead of signal for Axios
    }

    axios
      .get(`/.netlify/functions/fetch-data?query=${query}`, { config })
      .then((response) => {
        if (response.status !== 200) {
          // Handle non-successful responses here
          throw Error('Could not fetch the data for that resource')
        }
        return response.data
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message)
        } else {
          // Handle other errors here
          setIsPending(false)
          setError(error.message)
        }
      })
  }, [query])
  return { data, isPending, error }
}

export default useFetch
