import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero-img px-72 pb-[180px]'>
        <h1 className='text-6xl text-gray-600 max-w-5xl pt-20 pb-8'>Best collection for home decoration</h1>
        <p className='text-md text-gray-600 pb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <Link to="/products" className='px-6 py-2 rounded-md text-white font-bold bg-black'>Shop now</Link>
    </div>
  )
}

export default Hero
