import React from 'react'
import {AiFillFacebook} from "react-icons/ai"
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { footerProductLinks } from '../static/data'
import { footercompanyLinks } from '../static/data'
import { footerSupportLinks } from '../static/data'

const Footer = () => {
  return (
    <React.Fragment>
      <div className='bg-black px-20 text-white grid grid-cols-4 py-20 space-x-12 mt-12'>
             <div className='space-y-4'>
             <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
            <p className='text-md'>The home and elements needed to create beautiful products</p>
            <div className='flex gap-3 items-center'>
                  <AiFillFacebook size={30} className="text-white"/>
                  <BsTwitter size={28} className="text-white"/>
                  <BsInstagram size={28} className="text-white"/>
                  <BsYoutube size={28} className="text-white"/>
            </div>
             </div>

               <div>
                  <h1 className='text-md font-bold pb-4'>Company</h1>
                  {footerProductLinks.map((footer)=><h1 className='text-light'>{footer.name}</h1>)}
               </div>
                     
               <div>
                  <h1 className='text-md font-bold pb-4'>Shop</h1>
                  {footercompanyLinks.map((footer)=><h1 className='text-light'>{footer.name}</h1>)}
               </div>

               <div>
                  <h1 className='text-md font-bold pb-4'>Support</h1>
                  {footerSupportLinks.map((footer)=><h1 className='text-light'>{footer.name}</h1>)}
               </div>


      </div>
    </React.Fragment>
  )
}

export default Footer
