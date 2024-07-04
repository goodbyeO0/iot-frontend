import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch('https://animated-choux-c90517.netlify.app/.netlify/functions/api/getSuhu');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    };

    const handlePost = async () => {
        try {
            console.log('Sending POST request with inputValue:', inputValue); // Log before sending
            const response = await fetch('https://6686845a378d14d5f751996d--testiotapi.netlify.app/.netlify/functions/api/hantarKipas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ kelajuan: inputValue }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json(); // Assuming the server sends back JSON
            console.log('Response from POST request:', responseData); // Log the response

            setInputValue(''); // Clear the input field
        } catch (error) {
            console.error('Failed to post:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="p-6">
            <h1 className="mb-6 text-3xl text-center">Data Fetcher</h1>
            <div className="p-6 m-4 bg-white rounded shadow">
                <h2 className="mb-4 text-xl">Fetched Data</h2>
                {data !== null && data !== undefined && (
                    <>
                        <p className="mb-2">Suhu: {data.suhu}</p>
                        <p className="mb-2">Kelembapan: {data.kelembapan}</p>
                        {data.suhu > 35 && <p className="font-bold text-red-500">Warning: High temperature!</p>}
                    </>
                )}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="p-2 mr-2 border rounded"
                    placeholder="Enter value to post"
                />
                <button onClick={handlePost} className="p-2 text-white bg-blue-500 rounded">
                    Post Data
                </button>
            </div>
        </div>
    );
}

export default App;