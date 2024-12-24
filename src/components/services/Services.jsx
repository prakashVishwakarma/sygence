import React from 'react'
import ServiceCard from '../servicecard/ServiceCard'

const Services = () => {
    return (

        <div id='Services' className='w-full flex flex-col md:flex-row mt-16'>
            <div className='sm:w-[100%] md:w-[30%] sm:text-center md:text-left md:ml-[75px]'>
                <h1 className='font-extrabold'>Služby</h1>
            </div>
            <div className='sm:w-[100%]  md:w-[80%]'>
                <div className='flex flex-wrap sm:flex-col md:flex-row sm:items-center'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>

        </div>
    )
}

export default Services
