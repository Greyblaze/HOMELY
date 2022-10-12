import React from 'react';


export const Gallery = () => {
    return (
        <div className='bg-gray-900 p-3'>
            <div className='flex h-48 md:h-80 lg:h-96'>
                <div className='basis-1/3 p-1 relative'>
                    <img src='../images/interior1.webp' className='h-3/5 w-full p-2 absolute bottom-0 md:p-3 lg:h-5/6'/>
                </div>
                <div className='basis-1/3 p-1 relative'>
                    <img src='../images/interior2.webp' className='h-4/5 w-full p-2 absolute bottom-0 md:p-3 lg:h-full'/>
                </div>
                <div className='basis-1/3 p-1 relative'>
                     <img src='../images/construct8.jpg' className='h-full w-full p-2 absolute bottom-0 md:p-3 lg:h-[30rem]'/>
                </div>
            </div>
        </div>
    )
} 
