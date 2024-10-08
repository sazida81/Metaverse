import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import hero_logo from '../../assets/hero_logo.png';

const Hero = () => {
  return (
    <>
    <div className='px-20 sm:py-0 overflow-hidden text-white'>  
        <div className='container min-h-[700px] flex relative'>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 
            place-items-center relative z-10'>
                <div className='order-2 sm:order-1 space-y-5 lg:pr-20'>

                    <h1 className='text-4xl font-semibold'>
                    GET READY TO ENJOY VR 
                    <span className='bg-clip-text
                    text-transparent bg-gradient-to-r from-blue-400
                    to-red-400'> GAMES WITH OUR PLATFORM</span>
                    </h1>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                     elit. Ab molestias quia exercitationem ex inventore
                      labore beatae cumque et quaerat voluptas?
                    </p>

                    <div className='flex gap-6'>
                        <button className='bg-gradient-to-r from-blue-400 to-red-400
                        duration-300 py-2 px-6 text-white rounded-full 
                        hover:scale-105'>Get Started</button>
                        <button className='flex items-center gap-2'>
                            <IoPlayCircleOutline className='text-3xl'/> See Demo
                        </button>
                    </div>

                </div>

                <div className='order-1 sm:order-2'>
                    <img src={hero_logo} alt="" />
                </div>

            </div>


            <div className='h-[300px] w-[300px] bg-gradient-to-r
            from-blue-400 to-red-400 rounded-full absolute top-0
            left-0 blur-3xl animated-wrapper'>

            </div>

        </div>
    </div>
    </>
  )
}

export default Hero