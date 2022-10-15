import React from "react";
import { IconBase } from 'react-icons/ai';

export const Intro = () => {
    return(
        <div className="pb-10 text-white border-none">
            <div className="flex h-96">
                <div className="basis-1/2 p-3">
                    <div className="h-40">
                        <img src='../images/konstruct9.jpg' className='h-full w-full'/>
                        <div className="h-1/2 text-left">
                            <h1 className='mt-2 leading-tight text-sm md:text-2xl'>We are the Professional</h1>
                            <span className='text-yellow-600 text-sm font-medium md:text-2xl'>Architectural & Interior Design Plug</span>
                            <p className="text-xs w-100 leading-tight text-left pt-2 md:text-lg">Whether you feel overwhelmed and want someone to take the wheel or you
                                just need a second opinion and you have it covered,
                                you can be rest assured that HOMELY is the right plug for any of the services,
                                in any market condition
                            </p>
                            <div className="flex pt-3">
                                <button className="bg-yellow-700 leading-none text-xs p-1.5 rounded md:text-lg">Get Started</button>
                                <button className="border-y border-y-yellow-700 ml-3 leading-none text-xs p-1.5 md:text-lg">View Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 p-3">
                    <img src='../images/design.jpg' className='h-full w-full'/>
                </div>
            </div>
        </div>
    )
}