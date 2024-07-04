import { Link } from 'react-router-dom';
import { FaTemperatureHigh } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GiEntryDoor } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

function Navbar() {
    return (
        <>
            <div className={`flex justify-center min-w-full  container bg-[#f8f8f8]`}>
                <div className={`font-semibold w-3/4 min-h-16  flex justify-evenly items-center`}>
                    <Link to={"/"}><IoHome size="25px" /></Link>
                    <Link to={"/temperature"}><FaTemperatureHigh size="25px" /></Link>
                    <Link to={"/fan"}><TbAirConditioning size="25px" /></Link>
                    <Link to={"/entry"}><GiEntryDoor size="25px" /></Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;