import React from 'react';

export const Team = () => {
    return (
        <div className='text-white text-center py-5'>
            <h4 className='text-xs text-yellow-700 font-medium md:text-lg'>Our Team</h4>
            <h2 className='text-xl md:text-2xl'>Meet With Our Team</h2>
            <p className='text-sm md:text-lg'>We know that good design means good business</p>

            <div className='flex h-36 p-3'>
                <div className='basis-1/3 p-2 h-full'>
                    <img src='../images/eng1.jpg' className='h-full w-full' />
                    <div className='h-1/4 mt-2'>
                        <p className='text-bold text-sm md:text-lg'>Jamal Idris</p>
                        <p className='text-xs md:text-sm'>Senior Engineer</p>
                    </div>
                </div>
                <div className='basis-1/3 p-2 h-full'>
                    <div className='h-1/4 mb-4 md:mb-8'>
                        <p className='text-bold text-sm md:text-lg'>Chris Ward</p>
                        <p className='text-xs md:text-sm'>C.O.O</p>
                    </div>
                    <img src='../images/eng4.jpg' className='h-full w-full' />
                </div>
                <div className='basis-1/3 p-2 h-full'>
                    <img src='../images/eng5.jpg' className='h-full w-full' />
                    <div className='h-1/4 mt-2'>
                        <p className='text-bold text-sm md:text-lg'>Sarah Bucknor</p>
                        <p className='text-xs md:text-sm'>Creative Head</p>
                    </div>
                </div>
            </div>
        </div>
    )
}