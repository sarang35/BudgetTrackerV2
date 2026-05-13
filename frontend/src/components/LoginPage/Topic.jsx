import React from 'react'
import {Form} from "./Form"
const Topic = () => {
  return (
    <div className='text-white lg:text-black w-full p-0 lg:block rounded-2xl min-h-[100px] lg:mt-14 '>
        <div className='font-DM-sans flex lg:block justify-center items-center pd-0 space-y-0 mt-5  text-[25px] lg:text-3xl font-bold '>SIGN UP</div>
        <Form />
        <div className='mt-13 text-[10px]'>
         Already have a account?
        </div>
    </div>  
    
  )
}

export default Topic