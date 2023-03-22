import React from 'react'
import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi"
import {MdKeyboardArrowRight} from "react-icons/md"

const Header = () => {
  return (
    <React.Fragment>
        <div className='flex justify-between px-20 bg-gray-200 py-4 items-center'>
           <Link to="/">
              <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="logo"/>
            </Link>
            <div className='flex items-center gap-2 text-gray-600 px-8 h-12  rounded-md bg-white'>
              <input type="search" placeholder='Search...' className='h-full w-full outline-none'/>
               <FiSearch size={23}/>
            </div>
            <Link to="/seller" className=" flex gap-2 items-center px-4 py-2 rounded-md bg-black text-white"><span>Become Seller</span> <MdKeyboardArrowRight size={20} className='text-white'/></Link>
        </div>
    </React.Fragment>
  )
}

export default Header
