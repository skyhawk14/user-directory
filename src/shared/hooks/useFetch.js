import { useState, useEffect } from 'react';

const useFetch = function(url) {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true)
    setResponseData(null);
    setError(null);
    async function fetchData(){
      try {
        const response = await fetch(url)
        const data = await response.json()
        setResponseData(data)
        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError('An error occurred. Awkward..')
        console.log('Error fetching url', url);
      }
    }
    fetchData()
  }, [url])
  return { responseData, loading, error }
}
export { useFetch }