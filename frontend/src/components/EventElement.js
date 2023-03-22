import React from 'react'

const EventElement = () => {
  return (
    <React.Fragment>
        
      <div className='pt-14'>
        <h1 className='mx-20 text-black text-4xl'>Popular Event</h1>
      <div className=' flex items-center gap-3 mx-20 mt-8 bg-white rounded-md p-4'>
             <img  src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg' alt='iphone'/>
             <div className='text-lg text-gray-600 space-y-8'>
                    <h1 className='text-4xl'>Iphone 14 pro max</h1>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <h2 className='text-blue-600'>1 days 23 minutes 20 seconds</h2>
             </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default EventElement
