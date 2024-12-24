import React from 'react'

const HeroSection = () => {
    return (
        <div className=" video_section flex justify-center items-center relative z-[-10000] top-[440px] ">

            <video className=" object-cover opacity-35 w-[90%] h-[100vh] rounded-[30px] z-[-500] absolute" autoPlay loop playsInline muted >
                <source src="https://codegrid.pro/wp-content/themes/codegrid/assets/img/hero_bg_3.mp4" type="video/mp4" />
                Your browser does not support HTML video.
            </video>

            <div className="text absolute w-[40%] text-center">
                <h1 className="sm:text-3xl md:text-6xl font-bold" >Atraktivní weby. Na míru.</h1>
                <p className='text-[10px] md:text-base	'>Jsem spolehlivý partner pro tvorbu webových stránek. Bez ohledu na to, zda potřebujete jednoduchou prezentaci své firmy nebo rozsáhlý e-shop. S důrazem na čistý kód a atraktivní design se postarám o to, aby váš web nejen skvěle vypadal, ale také bezchybně fungoval.</p>
            </div>
        </div>
    )
}

export default HeroSection
