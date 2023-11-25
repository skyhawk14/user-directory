import { useState, useEffect } from 'react';

const useFetch = function(url) {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true)
    setResponseData(null);
    setError(null);
    fetch(url)
    .then(res => {
      console.log(res);
      res.json().then(data=>{
        console.log(data);
        setResponseData(data)
        setLoading(false);
      })
    })
    .catch(err => {
      setLoading(false)
      setError('An error occurred. Awkward..')
    })
  }, [url])
  return { responseData, loading, error }
}
export default useFetch