import React from 'react'
import { brandingData } from '../static/data'
import { categoriesData } from '../static/data'
import Category from './Category'
import { productData } from '../static/data'
import EventElement from './EventElement'
import Footer from './Footer'

const Middle = () => {
  return (
    <React.Fragment>
      <div className=' flex items-center justify-between mx-20 py-4 rounded-md bg-white px-4'>
        {brandingData.map((brad)=> <div  key={brad.id} className='flex items-center gap-2'>
            <span>{brad.icon}</span>
            <div>
                <h1 className='font-bold text-gray-600'>{brad.title}</h1>
                <p className='text-sm text-gray-500'>{brad.Description}</p>
            </div>
         </div>)}
      </div>

      <div className='grid grid-cols-5 mx-20 bg-white rounded-md mt-8 px-3 py-2 gap-4'>
            {categoriesData.map((cat)=> <div key={cat.id} className='flex items-center  gap-2'>
                <h1 className='text-gray-500 text-md'>{cat.title}</h1>
                <img className='h-20 w-20 object-cover' src={cat.image_Url} alt='thing'/>
             </div>)}
         </div>
               
               <Category type="Best deals" things={productData}/>
               <EventElement/>
               <Category type="Features products" things={productData}/>
               <Footer/>
    </React.Fragment>
  )
}

export default Middle
