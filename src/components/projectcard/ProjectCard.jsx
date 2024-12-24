import React from 'react'

const ProjectCard = () => {
    return (
        <div className='sm:w-[90%] md:w-[45%] group mr-6 '>
            <div className='relative overflow-hidden rounded-3xl '>
                <img className='transition-transform transform hover:scale-150 rounded-3xl duration-700' src="https://codegrid.pro/wp-content/uploads/2023/08/coolcamp_2.jpg.webp" alt="img" />
                <p className='absolute top-6 right-5 bg-white rounded-full pt-1 pb-1 pl-4 pr-4 group-hover:bg-slate-900 group-hover:text-white'>E-shop</p>
            </div>
            <h1 className='font-extrabold mt-6'>Projekty</h1>
            <p>Podívejte se na projekty, které pomohly mým klientům v růstu jejich podnikání.</p>
            <p className='bg-gray-100 rounded-full pt-1 pb-1 pl-4 pr-4 mt-6 mb-6 group-hover:bg-slate-900 group-hover:text-white w-max'> <a href='https://www.coolcamp.cz/' >Navštívit web</a></p>

        </div>
    )
}

export default ProjectCard
