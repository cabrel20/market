import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {BsBag} from "react-icons/bs"
import {IoEyeSharp} from "react-icons/io5"
import {ImStarFull} from "react-icons/im"

const Card = ({image,title,des,price,sold}) => {
  return (
    <React.Fragment>
      <div className='w-full bg-white rounded-md pb-4'>
            <div className='w-full'>
                <img  className="w-full h-60 rounded-t-md object-cover" src={image} alt='thing'/>
                <div className='flex items-center justify-center gap-5 pt-3'>
                  <button><AiOutlineHeart size={25} className="text-[#333]"/></button>
                   <button> <BsBag size={23} className="text-black"/>  </button>
                   <button> <IoEyeSharp size={23} className="text-black"/></button>
                </div>
            </div>
            <div className='px-3 space-y-3 pb-3 pt-4'>
                  <h1 className='text-blue-600 text-md'>{title}</h1>
                  <p className='text-black text-md'>{des}</p>
                  <div className='flex gap-3 items-center'>
                 <ImStarFull size={20} className="text-[#F6BA00]"/>
                 <ImStarFull size={20} className="text-[#F6BA00]"/>
                 <ImStarFull size={20} className="text-[#F6BA00]"/>
                 <ImStarFull size={20} className="text-[#F6BA00]"/>
                  </div>
            </div>
            <div className='flex justify-between items-center px-3'>
                <h1 className='text-black text-md'>{price}$</h1>
                <h1 className='text-green-500 text-md'>{sold} sold</h1>
            </div>
      </div>
    </React.Fragment>
  )
}

export default Card
