import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
    {
        name : "Captivating Videos",
        icon : (
            <FaCameraRetro className='text-5xl text-blue-400
            group-hover:text-black duration-300' />
        ),
        link : "#",
        descript : "Experience Videos Like Never",
        aosDelay : "300",
    },
    {
        name : "Safe Transactions",
        icon : (
            <GiNotebook className='text-5xl text-blue-400
            group-hover:text-black duration-300' />
        ),
        link : "#",
        descript : "Your Purchases, Simplified Virtually",
        aosDelay : "500",
    },
    {
        name : "Experience Reality",
        icon : (
            <SlNote className='text-5xl text-blue-400
            group-hover:text-black duration-300' />
        ),
        link : "#",
        descript : "Enter Worlds Beyond Imagination",
        aosDelay : "700",
    }
]

const Features = () => {
  return (
    <>
      <div className='container py-14 sm:min-h-[600px] text-white'>
        <div>
            <h1 data-aos="fade-up"
            className='text-3xl font-semibold text-center sm:text-4xl mb-12'>
                Why Choose Us
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-10'>
                {FeaturesData.map((data, index) => (
                    <div key={index} data-aos="fade-up"
                    data-aos-delay={data.aosDelay}  className='bg-slate-900 text-center group space-y-3
                    sm:space-y-6 p-4 sm:py-10  
                    hover:bg-gradient-to-r from-blue-400 to-red-400
                    hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg
                    duration-300'>
                        <div className='grid place-items-center'> {data.icon} </div>
                        <h1 className='text-2xl'> {data.name} </h1>
                        <p> {data.descript} </p>
                        <a href = {data.link} 
                        className='inline-block text-lg font-semibold
                        py-3 text-blue-400 group-hover:text-black
                        duration-300'>Learn More</a>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Features
