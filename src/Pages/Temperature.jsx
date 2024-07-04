import { useState, useEffect } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

function Temperature() {
    const [data, setData] = useState(null);
    const navigate = useNavigate()
    const fetchData = async () => {
        try {
            const response = await fetch('https://6686845a378d14d5f751996d--testiotapi.netlify.app/.netlify/functions/api/getSuhu');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setData(data);
            console.log(data)
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);

    // Determine color based on data.suhu
    const isHighTemperature = data && data.suhu >= 33;
    const textColorClass = isHighTemperature ? 'text-red-500' : 'text-orange-500';
    const bgColorClass = isHighTemperature ? 'bg-red-500' : 'bg-orange-500';
    const shadowColorClass = isHighTemperature ? 'shadow-red-400' : 'shadow-orange-400';
    const iconColor = isHighTemperature ? "#EF4444" : "#F97316";

    return (
        <>
            <div className="flex flex-col items-center w-screen h-screen mt-12">
                <div className={`flex flex-col items-center justify-center w-3/4 gap-10 mx-auto shadow-xl rounded-2xl h-4/6 ${shadowColorClass}`}>
                    <div className={`text-6xl font-bold ${textColorClass}`}>{data && Math.round(data.suhu)}</div>
                    <div>
                        <FaTemperatureHigh size="170px" color={iconColor} />
                    </div>
                    <button onClick={() => navigate("/fan")} className={`w-48 p-4 text-xl font-bold text-white ${bgColorClass} border rounded-lg`}>Fan</button>
                </div>
            </div>
        </>
    )
}

export default Temperature