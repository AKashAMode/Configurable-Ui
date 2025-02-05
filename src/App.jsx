import React from 'react'
import {WEBSITE_NAME, 
        WEBSITE_TAGLINE, 
        WEBSITE_DESCRIPTION, 
        WEBSITE_BANNER, 
        BUTTON_1, BUTTON_2 } from "./config";



const App = () => {
  return (
    <>
    <h1 className='text-4xl font-bold text-center p-4'>{WEBSITE_NAME}</h1>
    <div className='border-4 w-[90%] my-4 mx-auto rounded-4xl flex justify-evenly bg-orange-100'>
      <div className='w-[50%] p-6 flex justify-center items-center'>
        <div>
        <h1 className='text-4xl font-bold py-2'>{WEBSITE_NAME}</h1>
        <h3 className='text-2xl font-bold py-2'>{WEBSITE_TAGLINE}</h3>
        <p className='text-[17px] mt-[30px] text-left'>{WEBSITE_DESCRIPTION}</p>
        <div className='py-4'>
          <button className='py-2 px-8 rounded-2xl border-none bg-blue-500 mr-14 cursor-pointer'>{BUTTON_1}</button>
          <button className='py-2 px-8 rounded-2xl border-none bg-green-500 cursor-pointer'>{BUTTON_2}</button>
        </div>
        </div>
      </div>
      <div className='w-[40%]'>
        <img src={WEBSITE_BANNER} className='h-[600px] px-12' alt='banner'/>
      </div>
    </div>

    </>
  )
}

export default App