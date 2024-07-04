import { useState, useEffect } from "react";

function HistoryEntry() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Start loading
            try {
                const response = await fetch('https://6686845a378d14d5f751996d--testiotapi.netlify.app/.netlify/functions/api/getEntryRecord');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Failed to fetch:', error);
            } finally {
                setIsLoading(false); // End loading
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-4">
                <div className="w-32 h-32 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="flex justify-center p-4 overflow-x-auto font-sans">
            <table className="w-full max-w-lg text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">No.</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => {
                        // Split the dateTime string to separate date and time for display
                        const [date, time] = entry.dateTime.split('T');
                        // Extract the time part and remove milliseconds and 'Z' to simplify display
                        const simplifiedTime = time.slice(0, 8);

                        return (
                            <tr key={entry.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{entry.name}</td>
                                <td className="px-6 py-4">{date}</td>
                                <td className="px-6 py-4">{simplifiedTime}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default HistoryEntry;