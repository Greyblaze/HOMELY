import React from 'react';

export const Process = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <h2 className='text-center py-2 md:text-2xl'>How It Works</h2>
            <div className=' py-3 px-5 flex justify-between'>
                <div className='basis-1/6'>
                    <div className='p-3 border border-yellow-700 rounded-full'>
                        <h4 className='text-center text-yellow-700 font-bold'>1</h4>
                    </div>
                    <p className='text-center text-sm py-1 md:text-lg'>Request</p>
                </div>
                <div className='basis-1/6'>
                    <div className='p-3 border border-yellow-700 rounded-full'>
                        <h4 className='text-center text-yellow-700 font-bold'>2</h4>
                    </div>
                    <p className='text-center text-sm py-1 md:text-lg'>Meet our Experts</p>
                </div>
                <div className='basis-1/6'>
                    <div className='p-3 border border-yellow-700 rounded-full'>
                        <h4 className='text-center text-yellow-700 font-bold'>3</h4>
                    </div>
                    <p className='text-center text-sm py-1 md:text-lg'>Book with us</p>
                </div>
                <div className='basis-1/6'>
                    <div className='p-3 border border-yellow-700 rounded-full'>
                        <h4 className='text-center text-yellow-700 font-bold'>4</h4>
                    </div>
                    <p className='text-center text-sm py-1 md:text-lg'>Submit Designs</p>
                </div>
                <div className='basis-1/6'>
                    <div className='p-3 border border-yellow-700 rounded-full'>
                        <h4 className='text-center text-yellow-700 font-bold'>5</h4>
                    </div>
                    <p className='text-center text-sm py-1 md:text-lg'>Transact</p>
                </div>
            </div>
        </div>
    )
}