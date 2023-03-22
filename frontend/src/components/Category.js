import React from 'react'
import Card from './Card'

const Category = ({type,things}) => {
  return (
    <React.Fragment>
      <div className=' space-y-8 px-20 pt-16'>
        <h1 className='text-black text-4xl'>{type}</h1>
        <div className='grid grid-cols-5 gap-5'>
           {things.map((thing)=><Card key={thing.id} title={thing.name.substring(0,11)} image={thing.image_Url[0].url} des={thing.description.substring(0,60)} price={thing.price} sold={thing.stock}/>)}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Category
