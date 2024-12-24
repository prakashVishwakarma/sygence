import React from 'react'
import ContactCard from '../contactcard/ContactCard'

const Contact = () => {
    return (
        <div id='Contact' className='w-full flex flex-col md:flex-row mb-[100px] mt-16 '>
            <div className='sm:w-[100%] md:w-[30%] sm:text-center md:text-left md:ml-[75px]'>
                <h1 className='font-extrabold'>Kontakt</h1>
            </div>
            <div className='sm:w-[100%]  md:w-[70%]'>
                <div className='flex flex-wrap sm:flex-col md:flex-row sm:items-center'>
                    <ContactCard />
                </div>
            </div>

        </div>
    )
}

export default Contact
