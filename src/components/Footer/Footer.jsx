import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterLink = [
    {
        id : 1,
        title : "Home",
        link : "/#"
    },
    {
        id : 2,
        title : "About",
        link : "/#about"
    },
    {
        id : 3,
        title : "Contact",
        link : "/#contact"
    },
    {
        id : 4,
        title : "Blog",
        link : "/#blog"
    },
]

const Footer = () => {
  return (
    <>
      <div className='bg-stone-900 mt-14 rounded-t-3xl text-white'>
        <div data-aos="fade" className='container'>
            <div className='grid md:grid-cols-3 py-4'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3 flex items-center gap-3'>
                        Metaverse
                    </h1>
                    <p className='text-sm'>
                    Imagine Beyond the Physical
                    In a World Without Boundaries
                    Discover the Metaverse Today
                    </p>
                    <br/>

                    <div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Sylhet, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt />
                            <p>+01712463621</p>
                        </div>                       
                    </div>

                    <div className='flex items-center gap-3 mt-6'>
                        <a href='#'>
                            <FaFacebook className='text-3xl hover:text-blue-400 duration-300' />
                        </a>
                        <a href='#'>
                            <FaInstagram className='text-3xl hover:text-blue-400 duration-300' />
                        </a>
                        <a href='#'>
                            <FaLinkedin className='text-3xl hover:text-blue-400 duration-300' />
                        </a>
                    </div>

                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLink.map((link) => (
                                    <li key={link.id}
                                    className='hover:translate-x-1 duration-300'>
                                        <a href={link.link} className='cursor-pointer
                                        hover:text-blue-400'>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLink.map((link) => (
                                    <li key={link.id}
                                    className='hover:translate-x-1 duration-300'>
                                        <a href={link.link} className='cursor-pointer
                                        hover:text-blue-400'>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Locations</h1>
                            <ul className='space-y-3'>
                                {FooterLink.map((link) => (
                                    <li key={link.id}
                                    className='hover:translate-x-1 duration-300'>
                                        <a href={link.link} className='cursor-pointer
                                        hover:text-blue-400'>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
