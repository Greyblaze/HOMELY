import React from 'react';

export const Blog = () => {
    return (
        <div className='text-white text-center py-8'>
          <h4 className='text-xs text-yellow-700 font-medium md:text-lg'>Blog</h4>
          <h2 className='text-xl'>Get Updated With Our Latest Blog</h2>
          <p className='text-sm'>We know that good design means good business</p>

          <div className='flex p-3'>
            <div className='basis-1/2 p-2'>
                <img src='../images/inside4.jpg' className='w-full'/>
                <div className='flex mt-1'>
                    <h3 className='basis-1/6 text-xs p-1 font-bold md:text-sm'>06 JULY 2022</h3>
                    <p className='basis-5/6 my-auto mx-0 text-xs md:text-sm'> Discover Top 5 interior projects this week</p>
                </div>
            </div>
            <div className='basis-1/2 p-2'>
                <img src='../images/konstruct10.jpg' className='w-full'/>
                <div className='flex mt-1'>
                    <h3 className='basis-1/6 text-xs p-1 font-bold md:text-sm'>07 JULY 2022</h3>
                    <p className='basis-5/6 my-auto mx-0 text-xs mt-2 md:text-sm'> 4 Modern buildings under construction by Homly</p>
                </div>
            </div>
          </div>
        </div>
    )
}