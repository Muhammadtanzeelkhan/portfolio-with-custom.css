import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)]  bg-cover'
    style={{backgroundSize: "25%", backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[50px] sm:text-[70px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p data-aos="zoom-in-up">GET</p>
                <p data-aos="zoom-in-up">FREE </p>
                <p data-aos="zoom-in-up">COURSE</p>
                <p data-aos="zoom-in-up">WITH</p>
                <p data-aos="zoom-in-up">TANZEEL</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
