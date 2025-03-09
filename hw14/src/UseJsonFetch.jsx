import { useEffect, useState } from "react"

function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(url, {opts})
        .then(response => {
            if(!response.ok) setError(response.status)
            return response.json();
        }).then(data => {
            setData(data);
            setLoading(false);
        }).catch(err => setError(err))
    }, [url, opts])
    return  [data ? data.status : '', error, loading]
}

export default useJsonFetch