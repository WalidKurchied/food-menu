import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const fetchResponse = await fetch(url);
                const data = await fetchResponse.json();
                setResponse(data);
            } catch (error) {
                setError(error);
            }

            setIsLoading(false);
        }

        fetchData();
    }, [url]);

    return { isLoading, response, error };
};