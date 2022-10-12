import React from 'react';

export const Banner = () => {
    return(
        <div className='relative w-full md:h-45'>
            <img src='../images/konstruct14.jpg' className='w-full h-full'/>
            <div className='absolute top-0 h-3/4 w-full p-0 py-6 bg-white/80'>
                <h4 className='font-bold px-3 md:pt-8 text-xl'> You have a project in mind?</h4>
                <div className='flex p-4 text-center'>
                    <div className='basis-1/3 w-full md:pt-8'>
                        <h2 className='font-bold md:text-xl'>Our Contact</h2>
                        <p className='text-xs text-yellow-600 md:text-lg'>+2349015977007</p>
                    </div>
                    <div className='basis-1/3 w-full md:pt-8'>
                        <h2 className='font-bold leading-tight md:text-xl'>Our Office Address</h2>
                        <p className='text-xs text-yellow-600 md:text-lg'>No 2 Vincent Eku street off Ayeni Crescent, Barcelona</p>
                    </div>
                    <div className='basis-1/3 w-full md:pt-8'>
                        <h2 className='font-bold leading-tight md:text-xl'>Our Mail Address</h2>
                        <p className='text-xs md:text-lg'>+2349015977007</p>
                        <p className='text-yellow-600 text-xs md:text-lg'>Open Hours:- 00:00 - 18:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}