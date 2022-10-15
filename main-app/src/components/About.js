import React from "react";

export const About = () => {
    return(
        <div className='text-white p-2 pt-10'>
            <h3 className='text-base font-medium pt-4 md:text-2xl mt-10'>About Us</h3>
            <p className='text-left ml-6 mt-2 pl-4 border-l text-sm border-l-yellow-700 md:text-lg'>Whether you're feeling overwhelmed and want someone to take the wheel 
                    or you just need a second opinion and youi have it
                    covered, you can be rest assured HOMELY is the right plug for any of the service, 
                    in any market condition.
            </p>
            <button className='my-3 p-2 text-xs border-y border-y-yellow-700'> Read More </button>
            <div className='flex md:w-4/6 text-center text-sm pt-5 lg:py-6 text-lg'>
                <div className='basis-1/3 mx-0 my-auto text-sm md:text-xl pt-4'>
                    <h4>100%</h4>
                    <p>Satisfaction</p>
                </div>
                <div className='basis-1/3 text-sm md:text-xl pt-4'>
                    <h4>250+</h4>
                    <p>Clients & Employees</p>
                </div>
                <div className='basis-1/3 text-sm md:text-xl pt-4'>
                    <h4>1k+</h4>
                    <p>Completed Projects</p>
                </div>
            </div>
        </div>
    )
}