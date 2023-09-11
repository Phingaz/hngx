import { useState, useEffect } from "react";

export const useFetch = (url, method) => {
  const [data, setData] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState({
    message: "",
    status: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjZkNWJiOTdlNjA4OTc5MzRjZmRjZmM2MWRhNzNhZCIsInN1YiI6IjY0ZmYyYzExZmZjOWRlMGVlMTc2NTFiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F5IPPnCZcsqxVdAgYMUImPwVeKIyim0_TjVFN9EFj2M",
          },
        });
        if (!response.ok) throw new Error(response.ok);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError({
          message: `${error} Could not Fetch Data `,
          status: true,
        });
        setIsPending(false);
      }
    };
    fetchData();
  }, [url, method]);
  return { data, isPending, error };
};

export default useFetch;
