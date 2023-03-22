import React,{useState} from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import {RiArrowDropDownLine} from "react-icons/ri"
import {AiOutlineHeart} from "react-icons/ai"
import {BsBag} from "react-icons/bs"
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
//import { navItems } from '../static/data'

const NavBar = () => {

  const [isDrop,setIsDrop] = useState(false);

  return (
    <React.Fragment>
      <div className='py-3 px-20 flex justify-between items-center bg-blue-600 sticky top-0'>
          <div className='relative'>
          <button className='flex items-center gap-4 bg-white px-6 py-2 rounded-md' onClick={()=>setIsDrop(!isDrop)} >
          <div className='flex gap-2 items-center'>
          <BiMenuAltLeft size={20}/>
          <h1 className='text-lg text-gray-800'>All Categorie</h1>
          </div>
          <RiArrowDropDownLine size={30}/>
           </button>
            {isDrop && <DropDown/>}
          </div>

           <nav className='flex gap-5 items-center'>
              <Link to="/" className='text-white'>Home</Link>
              <Link to="/best-selling" className='text-white'>Best Selling</Link>
              <Link to="/products" className='text-white'>Products</Link>
              <Link to="/events" className='text-white'>Events</Link>
              <Link to="/FAQ" className='text-white'>FAQ</Link>
           </nav>

             <div className='flex gap-8 items-center'>
                   <div className='relative'>
                    <AiOutlineHeart size={27} className="text-white"/>
                    <span className='h-4 w-5 font-bold ring-1 ring-white bg-green-600 absolute  px-1 top-0 left-5 text-[12px]  text-white rounded-full'>8+</span>
                   </div>
                   
                   <div className='relative'>
                    <BsBag size={24} className="text-white"/>
                    <span className='h-4 w-5 font-bold ring-1 ring-white bg-green-600 absolute  px-1 top-0 left-5 text-[12px]  text-white rounded-full'>8+</span>
                   </div>

                   <img className='h-10 w-10 rounded-full object-cover' src='https://images.unsplash.com/photo-1679343316332-6b854e892a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='person'/>

             </div>
      </div>
    </React.Fragment>
  )
}

export default NavBar
