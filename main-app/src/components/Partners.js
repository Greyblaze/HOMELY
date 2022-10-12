import React from 'react';

export const Partners = () => {
    return (
        <div className='text-center text-white py-8 w-screen md:my-3'>
            <h2 className='p-3 md:text-lg '>Our Partners</h2>
            <div className='flex p-3 bg-white h-32 w-full'>
                <img src='../images/logo3.jpg' className='basis-1/3' />
                <img src='../images/logo4.jpg' className='basis-1/3' />
                <img src='../images/logo5.jpg' className='basis-1/3' />
            </div>
        </div>
    )
}