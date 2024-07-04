/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Fan() {
    const [inputValue, setInputValue] = useState('');

    const handlePost = async (value) => {
        try {
            console.log('Sending POST request with inputValue:', value); // Log before sending
            const response = await fetch('https://6686845a378d14d5f751996d--testiotapi.netlify.app/.netlify/functions/api/hantarKipas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ kelajuan: value }),
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

    return (
        <>
            <div className={`flex flex-col items-center justify-center min-h-screen w-screen bg-white gap-5`}>
                <h1 className="p-3 mt-3 text-4xl font-bold">SPEED SETTING</h1>
                <div className="flex flex-col items-center w-11/12 min-h-screen gap-10 m-5">
                    <button onClick={() => { setInputValue('0'); handlePost('0'); }} className={`font-bold text-center focus:cursor-pointer flex flex-col justify-center items-center gap-3 w-9/12 h-1/3 p-5 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out focus:scale-105 focus:bg-slate-400`}>
                        <p>OFF</p>
                    </button>
                    <button onClick={() => { setInputValue('85'); handlePost('85'); }} className={`font-bold text-center focus:cursor-pointer flex flex-col justify-center items-center gap-3 w-9/12 h-1/3 p-5 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out focus:scale-105 focus:bg-slate-400`}>
                        <p>SLOW</p>
                    </button>
                    <button onClick={() => { setInputValue('170'); handlePost('170'); }} className={`font-bold text-center focus:cursor-pointer flex flex-col justify-center items-center gap-3 w-9/12 h-1/3 p-5 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out focus:scale-105 focus:bg-slate-400`}>
                        <p>MEDIUM</p>
                    </button>
                    <button onClick={() => { setInputValue('255'); handlePost('255'); }} className={`font-bold text-center focus:cursor-pointer flex flex-col justify-center items-center gap-3 w-9/12 h-1/3 p-5 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out focus:scale-105 focus:bg-slate-400`}>
                        <p>FAST</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Fan;