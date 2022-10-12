import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
       <div className="flex justify-between p-3 text-white">
            <div className="mx-0 my-auto">
                <h2 className="text-lg font-bold text-yellow-600 ml-3 md:text-2xl">HOMELY</h2>
            </div>
            <ul className="hidden md:flex text-lg">
                <li className="p-4">Home</li>
                <li className="p-4">Services</li>
                <li className="p-4">About Us</li>
                <li className="p-4 border-b border-b-yellow-700">Sign Up</li>
            </ul>
            <div onClick={handleNav} className='block px-3 mx-0 my-auto md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[70%] h-[70%] border-r-4 border-b-4 rounded-b-lg border-r-yellow-700 border-b-yellow-700 bg-gray-900 text-white-ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h4 className='p-4 text-center text-yellow-600 font-bold text-lg'>HOMELY</h4>
                <ul>
                    <li className="p-4 font-bold border-b border-b-yellow-600">Home</li>
                    <li className="p-4 border-b border-b-yellow-600">Services</li>
                    <li className="p-4 border-b border-b-yellow-600">About Us</li>
                    <li className="p-4 ">Sign Up</li>
                </ul>
            </div>
            
       </div>
    )
}