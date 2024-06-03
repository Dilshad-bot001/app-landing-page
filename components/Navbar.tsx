'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Logo from '@/public/Logo.svg'
import Close from '@/public/close.png'
import Menu from '@/public/menu.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='w-full h-16 flex justify-between items-start lg:items-center lg:w-[980px] xl:w-[1090px]'>
      <Image src={Logo} alt='logo' className='-mt-4' />
      <div className='hidden w-full justify-between items-center ml-10 lg:flex'>
      <ul className='flex gap-6'>
        <li className='nav-links'><a href="#home">Home</a></li>
        <li className='nav-links'><a href="#aboutus">About Us</a></li>
        <li className='nav-links'><a href="#advantages">Pricing</a></li>
        <li className='nav-links'><a href="#features">Features</a></li>
      </ul>
      <button className='w-[180px] h-[60px] bg-black rounded-[4px] text-2xl text-white font-medium'>Download</button>
      </div>


      {/* mobile view */}
      {isMenuOpen ? <div className='absolute z-10 right-0 top-0 w-64 h-80 bg-[#272727] flex flex-col items-center justify-between py-5'>
        <Image src={Close} alt='logo' className='w-8 h-8 self-end mr-4 cursor-pointer' onClick={() => setIsMenuOpen(false)} />
        <ul className='text-white'>
          <li className='nav-links'><a href="#home">Home</a></li>
          <li className='nav-links'><a href="#aboutus">About Us</a></li>
          <li className='nav-links'><a href="#advantages">Pricing</a></li>
          <li className='nav-links'><a href="#features">Features</a></li>
        </ul>
        <button className='w-40 h-12 bg-white rounded-md font-medium'>Download</button>
      </div> :
        <Image src={Menu} alt='logo' className='w-8 h-8 cursor-pointer lg:hidden' onClick={() => setIsMenuOpen(true)} />
      }
    </nav>
  )
}

export default Navbar