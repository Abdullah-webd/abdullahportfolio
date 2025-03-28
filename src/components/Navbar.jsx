import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { NavLink } from 'react-router-dom'
import {logo,menu,close } from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {
  const [active,setActive] = useState('')
  const [toggle,setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center justify-center py-5 fixed top-0 z-20 bg-primary min-h-[60px]`}>
      <div className='w-screen flex justify-around items-center mx-20'>
        <Link
        to='/'
        className='flex items-center justify-center gap-2'
        onClick={()=>{
          setActive('')
          window.scrollTo(0,0)
        }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain '/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Abdullah <span className='sm:block hidden '>&nbsp; Ajala</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link=>(
            <li 
              key={link.id} className={`${active===link.title ?'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close :menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}/>
          <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } black-gradient absolute top-20 right-0 min-w-[140px] z-10 rounded-xl flex justify-center items-center`}
            >
            <ul className='list-none flex justify-center items-center flex-col gap-4'>
            {navLinks.map(link=>(
              <li 
                key={link.id} className={`${active===link.title ?'text-white' : 'text-secondary'} hover:text-white text-[16px] font-medium font-poppins cursor-pointer`} onClick={()=>{
                  setToggle(!toggle)
                  setActive(link.title)}}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar