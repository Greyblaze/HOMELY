import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='bg-white text-center p-10'>
            <img src='../images/mainlogox.png' className='mx-auto my-0'/>
            <div className='bg-white text-center text-yellow-600'>
                <ul className='flex justify-around text-xs font-extrabold md:text-lg'>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='w-1/5 my-0 mx-auto py-10'>
                <div className='flex justify-between'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}