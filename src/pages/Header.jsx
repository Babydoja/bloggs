import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  const [nav, setNav] = useState(false)
  return (
    <div className='flex bg-[black] justify-around text-white items-center h-[10vh] cursor-pointer'>
      {/* desktop */}
        <div>
            <h1>E<span className='text-red-500'>BLOG</span></h1>
        </div>
        <div>
            <ul className='md:flex gap-8 uppercase text-[12px] hidden'>
                <li className='hover:text-red-600'><Link to='/'>Home</Link></li>
                <li className='hover:text-red-600'><Link to='/addblog'>Add Blog</Link></li>
            </ul>
        </div>
        <div onClick={()=>setNav(!nav)} className='md:hidden'>
           {nav ? <i className='pi pi-times'></i>:<i className='pi pi-align-justify'></i>}
        </div>

        {/* monile */}
        <div  className={nav ?'fixed left-0 top-10 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]' }>
            <ul className='flex flex-col gap-5 text-[18px] '>
                <li className='hover:text-red-600 border-b p-2'><Link to='/'>Home</Link></li>
                <li className='hover:text-red-600 border-b p-2'><Link to='/addblog'>Add Blog</Link></li>
             
            </ul>
        </div>

    </div>
  )
}
