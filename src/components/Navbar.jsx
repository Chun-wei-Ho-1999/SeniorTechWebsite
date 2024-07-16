import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { Link } from "react-router-dom";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <React.Fragment>
    <nav className='w-full flex py-6 justify-between items-center navbar bg-green-faded'>
      <Link to="/"><img src={logo} alt='seniortech' className='w-[124px] h-[64px]'/></Link>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}
          >
            <Link to={`${nav.id}`} className='text-black'>
              {nav.title}
            </Link>
          </li>        
        ))}
      </ul>
    </nav>
    <div className="nav-padding"></div>
    </React.Fragment>
  )
}

export default Navbar
