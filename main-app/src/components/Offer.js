import React from 'react';

export const Offer = () => {
    return (
        <div className='py-4 bg-gray-900 '>
            <div className='flex'>
                <div className='basis-1/2'>
                    <img src='../images/inside2.jpg' className='w-full h-full'/>
                </div>
                <div className='basis-1/2 bg-white p-4 text-left md:py-8'>
                    <h4 className='text-sm pb-1 font-bold md:text-lg'>Interior Design</h4>
                    <h2 className='text-base text-yellow-700 font-bold leading-tight md:text-xl'>We Offer Best Services and Wonderful Experience</h2>
                    <p className='text-sm py-1 md:text-lg'>Whether you're feeling overwhelmed and want
                        someone to take the wheel, or you just need
                        a second opinion and you have it covered, you
                        can be rest assured HOMLY is the right plug
                        for any of the service in any market condition
                    </p>
                </div>
            </div>
        </div>
    )
}