import React from 'react'
import {Link} from "react-router-dom"

const LoginForm = () => {
  return (
    <React.Fragment>
     <div className='flex flex-col items-center py-20'>
     <form className="bg-slate-100 w-2/5 rounded-md h-96 flex flex-col items-center gap-4 ">
           <h1 className='text-4xl text-gray-600 text-center pb-6 pt-4'>Login</h1>
          <input type="email" placeholder='enter your email'className='h-12 pl-2 bg-white text-gray-600 w-1/2 outline-2 outline-blue-600 rounded-md'/>
          <input type="password" placeholder='enter your password'className='h-12 pl-2 bg-white text-gray-600 w-1/2 outline-2 outline-blue-600 rounded-md'/>
        <button className='mt-6 px-8 py-1 rounded-md bg-blue-500 text-white'>Login</button>    
           
            <div className='flex justify-center w-full gap-2 pb-6'>
            <p>Tu n'as pas de compte ?</p>
            <Link className='text-blue-500 underline' to={"/register"}>Creer un compte</Link>
            </div>
           
     </form>
     </div>
    </React.Fragment>
  )
}

export default LoginForm
