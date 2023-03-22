import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Middle from '../components/Middle'

const HomePage = () => {
  return (
    <React.Fragment>
       <div className='bg-slate-100'>
       <Header/>
      <NavBar/>
      <Hero/>
      <div className='pt-14'>
         <Middle/>
      </div>
      </div>
    
    </React.Fragment>
  )
}

export default HomePage
