import { useState, useEffect } from 'react';

/**
 * Custom hook to handle API calls with loading and error states
 * @param {string} url - The API URL to call
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {object} { data, loading, error, refetch }
 */
function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);

    return { data, loading, error, refetch: fetchData };
}

export default useFetch;
