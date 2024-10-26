import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';

const Banner = ({togglePlay}) => {
  return (
    <>
    <div className='py-12 sm:py-0 relative text-white'>
      <div className='container px-20 min-h-[620px] flex items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        gap-8 place-items-center'>

            <div data-aos="fade-up" data-aos-once="false">
                <img src={banner1} alt='' className='w-full max-w-[400px]'/>
            </div>
            <div className='space-y-5 lg:pr-20 relative'>

                <div className='relative z-10 space-y-5'>
                <h1 data-aos="fade-up"
                data-aos-delay="300"
                className='text-4xl font-semibold'>
                GET READY TO ENJOY VR 
                <span className='bg-clip-text
                text-transparent bg-gradient-to-r from-blue-400
                to-red-400'> Movies WITH OUR PLATFORM</span>
                </h1>
            <p data-aos="fade-up"
                data-aos-delay="500">
                Immerse Yourself in a New Reality
                Excitement Awaits in Every Scene
                Feel the Thrill of Unmatched Experiences
            </p>

        <div className='flex gap-6'>
        <button data-aos="fade-up"
               data-aos-delay="700"
        className='bg-gradient-to-r from-blue-400 to-red-400
        duration-300 py-2 px-6 text-white rounded-full 
        hover:scale-105'>Get Started</button>
        <button data-aos="fade-up"
                data-aos-delay="700"
        onClick={togglePlay}
        className='flex items-center gap-2'>
        <IoPlayCircleOutline className='text-3xl'/> See Demo
        </button>
        </div>
        </div>

        <div className='h-[300px] w-[300px] bg-gradient-to-r
            from-blue-400 to-red-400 rounded-full absolute
            bottom-[-50px] left-[300px] blur-3xl opacity-25'></div>

        </div>




        </div>
      </div>
    </div>
    </>
  )
}

export default Banner
