import React from 'react'

const ContactCard = () => {
  return (
    <div className='h-[200px] sm:w-[90%] md:w-[90%] group mr-6  rounded-3xl pl-4 pr-4 shadow-xl	'>
        <h1 className='font-extrabold mt-9'>Zeptejte se nás</h1>
        <p>Líbí se vám naše práce, máte dotaz nebo chcete s námi navázat spolupráci? Neváhejte a napište nám.</p>
        <p className='group-hover:bg-gray-300 rounded-full pt-1 pb-1 pl-4 pr-4 mt-6 mb-6 bg-slate-900 text-white group-hover:text-black w-max'> <a href='https://www.coolcamp.cz/' >Napište nám</a></p>
    </div>
  )
}

export default ContactCard
