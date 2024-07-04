import { FaTemperatureHigh } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GiEntryDoor } from "react-icons/gi";
import { useNavigate } from "react-router-dom"

function Cards() {
    const navigate = useNavigate()
    return (
        <>
            <div className={`flex flex-col items-center justify-center min-h-screen w-screen bg-white gap-5`}>
                <h1 className="p-3 mt-3 text-5xl font-bold">Smart Gym</h1>
                <div className="flex flex-col items-center w-11/12 min-h-screen gap-10 m-5">
                    <div onClick={() => navigate("/temperature")} className={`hover:cursor-pointer flex flex-row items-center gap-3  w-9/12 h-1/3 p-5 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105  `} >
                        <FaTemperatureHigh size="25px" />
                        <p className={`m-3 text-2xl font-bold text-slate  `}>Temperature</p>
                    </div>
                    <div onClick={() => navigate("/fan")} className={`hover:cursor-pointer flex flex-row items-center gap-3  w-9/12  h-1/3 p-5 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105  `}>
                        <TbAirConditioning size="25px" />
                        <p className={`m-3 text-2xl font-bold text-slate   `}>Fan</p>
                    </div>
                    <div onClick={() => navigate("/entry")} className={`hover:cursor-pointer flex flex-row items-center gap-3  w-9/12  h-1/3 p-5 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105  `}>
                        <GiEntryDoor size="25px" />
                        <p className={`m-3 text-2xl font-bold text-slate   `}>Entry</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards;