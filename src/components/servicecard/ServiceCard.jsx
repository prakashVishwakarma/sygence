import React from 'react'

const ServiceCard = () => {
    return (
        <div className='sm:w-[90%] md:w-[45%] group mr-6 hover:bg-slate-100 rounded-3xl pl-4 pr-4'>
            <h1 className='font-extrabold mt-6'>Projekty</h1>
            <p>Podívejte se na projekty, které pomohly mým klientům v růstu jejich podnikání.</p>
            <p className='bg-gray-100 rounded-full pt-1 pb-1 pl-4 pr-4 mt-6 mb-6 group-hover:bg-slate-900 group-hover:text-white w-max'> <a href='https://www.coolcamp.cz/' >Navštívit web</a></p>

        </div>
    )
}

export default ServiceCard
