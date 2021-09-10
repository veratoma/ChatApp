import {useEffect, useState} from "react";


export const useRequestApi = ({url, options, isAutoLoad}) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const makeRequest = async () => {
    try {
      setError(undefined);
      setData(undefined);
      setLoading(true)
      const response = await fetch(url, options);

      const result = await response.json();

      setData(result);

    } catch (e) {
      setError(e);
      console.dir(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (isAutoLoad) {
      makeRequest();
    }
  }, [])


  return [
    {
      isLoading,
      error,
      data,
    },
    makeRequest
  ]
}