import React from 'react'
import ProjectCard from '../projectcard/ProjectCard'

const Project = () => {
    return (
        <div id='Portfolio' className='w-full flex flex-col md:flex-row '>
            <div className='sm:w-[100%] md:w-[30%] sm:text-center  md:text-left md:ml-[75px] md:mr-[75px] '>
                <h1 className='font-bold text-lg'>Projekty</h1>
                <p>Podívejte se na projekty, které pomohly mým klientům v růstu jejich podnikání.</p>
            </div>
            <div className='sm:w-[100%]  md:w-[130%] '>
                <div className='flex flex-wrap sm:flex-col md:flex-row sm:items-center'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>


            </div>

        </div>
    )
}

export default Project
