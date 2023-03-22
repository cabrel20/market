import React from 'react'
import { categoriesData } from '../static/data'

const DropDown = () => {
  return (
    <React.Fragment>
      <div className="bg-white rounded-md absolute top-12  py-3 w-full">
        {categoriesData.map((cat)=><button key={cat.id} className="flex items-center gap-2 w-full pr-8 py-2 pl-3 bg-white hover:bg-slate-100 transition-all">
            <img className='w-8 h-8 object-cover' src={cat.image_Url} alt='thing'/>
            <h1 className='text-[12px] text-gray-600'>{cat.title}</h1>
        </button>)}
      </div>
    </React.Fragment>
  )
}

export default DropDown
