// import { useState, useEffect } from 'react';

// const useAQIAPIs = (url) => {
//     const [data, setData] = useState({});
//     const [initial, setInitial] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         if (url.trim().length === 0) {
//             return;
//         }
//         async function fetchData() {
//             try {
//                 setInitial(false);
//                 setLoading(true);
//                 let response = await fetch(url);
//                 const json = await response.json();
//                 setData(json);
//                 setLoading(false);
//             } catch(error) {
//                 setError(error);
//             }
//         }

//         fetchData();
//     }, [url]);

//     return [ data, loading, initial, error ];
// };

// export { useAQIAPIs };

import { useState, useEffect } from 'react';

const useAQIAPIs = (url) => {
    const [data, setData] = useState({});
    const [initial, setInitial] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (url.trim().length === 0) {
            return;
        }
        async function fetchData() {
            try {
                setInitial(false);
                setLoading(true);
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error.message); // Set error message instead of error object
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return [data, loading, initial, error];
};

export { useAQIAPIs };