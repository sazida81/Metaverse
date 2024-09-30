import React,{useState} from 'react'
import { HiMenu } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from '../../assets/logo.png'
import Darkmode from './Darkmode';


const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "#",
    },
    {
        id: 3,
        name: "Pricing",
        link: "#",
    },
    {
        id: 4,
        name: "Contact",
        link: "#",
    },
]
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    }
  return (
    <div className='text-black  '>
      <div className='container py-2 md:py-0'>

        <div className='flex justify-between items-center'>

            <div className='flex items-center gap-3'>
                <img src={logo} className='h-16'/>
                <p className='text-3xl'>
                    VR <span className='font-bold'>World</span>
                </p>
            </div>
            
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {NavLinks.map(({id, name, link }) => {
                            return(
                                <li key={id}>
                                    <a href={link} 
                                    className="text-xl font-semibold
                                    hover:text-red-400 py-2
                                    hover:border-b-2
                                    hover:border-blue-400
                                    transition-colors duration-500 dark:text-white"
                                    >{name}</a>
                                </li>
                            );
                        })}
                        
                        <Darkmode />
                     
                    </ul>
                </nav> 

                <div>
                    {
                        showMenu ? <HiMenu onClick={toggleMenu}
                        className='cursor-pointer' size={30}/> : 
                        <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30}/>
                    }
                </div>
            
            
        </div>

      </div>

    </div>
  )
}

export default Navbar
