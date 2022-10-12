import React from 'react';

export const Services = () => {
    return(
        <div className='bg-gray-900 text-white text-center py-5'>
          <h4 className='text-xs text-yellow-700 font-medium md:text-lg'>Services</h4>
          <h2 className='text-xl md:text-2xl'>Our Area of Focus</h2>
          <p className='text-sm md:text-lg'>We know that good design means good business</p>

          <div className='flex justify-between p-3'>
            <div className='basis-1/3 relative h-44 p-1'>
                <img src='../images/inside6.jpg' className='h-full'/>
                <div className='w-full absolute bottom-0 bg-slate-900/50 text-left p-1'>
                    <h4 className='font-bold md:text-lg'>Interior Design</h4>
                    <p className='text-xs'>Lorem ipsum dolor emet connetiut </p>
                </div>
            </div>
            <div className='basis-1/3 relative h-44 p-1'>
                <img src='../images/konstruct3.jpg' className='h-full'/>
                <div className='w-full absolute bottom-0 bg-slate-900/50 text-left p-1'>
                    <h4 className='font-bold md:text-lg'>Planning</h4>
                    <p className='text-xs'>Lorem ipsum dolor emet connetiut </p>
                </div>
            </div>
            <div className='basis-1/3 relative h-44 p-1'>
                <img src='../images/konstruct6.jpg' className='h-full'/>
                <div className='w-full absolute bottom-0 bg-slate-900/50 text-left p-1'>
                    <h4 className='font-bold md:text-lg'>Architecture Design</h4>
                    <p className='text-xs'>Lorem ipsum dolor emet connetiut </p>
                </div>
            </div>
          </div>
        </div>
    )
}