
import React, { useState } from 'react';

function Navbar()
{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <nav className="w-full md:h-16 h-auto bg-indigo-200 md:flex justify-between 
        px-4 py-5 md:my-0 md:px-5 items-center ">
            <div className="text-2xl text-indigo-700 font-bold ">PW Skills <span className="md:hidden float-right pr-3">  <a className="text-4xl font-bold" onClick={() => setIsOpen(!isOpen)} href="#">&#8801;</a></span></div>

            <ul className={`md:flex ${isOpen ? "block" : "hidden"} font-semibold `}>
                <li className="md:mx-[12px] cursor-pointer hover:text-blue-600  md:mt-0 mt-5 uppercase  font-bold ">Home</li>
                <li className="md:mx-[12px] cursor-pointer hover:text-blue-600 md:mt-0 mt-2 uppercase  font-bold">About Us</li>
                <li className="md:mx-[12px] cursor-pointer  hover:text-blue-600 md:mt-0 mt-2 uppercase font-bold">Contact Us</li>
            </ul>
            <div className={`md:block px-3 py-2 mt-2 md:m-0 uppercase md:w-auto w-40  
             bg-indigo-700 text-white hover:text-indigo-700 hover:bg-white rounded
              font-semibold cursor-pointer ${isOpen ? "block" : "hidden"} `}>Login/SignUp</div>
           
        </nav>
        </>
    );   
}

export default Navbar;