import React from 'react'

const MiddleSection = () => {
  return (
    <div className=' flex flex-col justify-between items-center ml-4 mt-23 gap-1'>
    <div className='flex items-center justify-center mt-20 ml-20 font-[neu2]'>
        <div className='flex'>
        <div className='text-white text-[6vw] leading-19  '>
            <h1 className='overflow-y-hidden'>&nbsp;&nbsp;&nbsp;&nbsp;We only <span className='text-[#24CFA6]'>teach</span></h1>
            
            <h1 className='overflow-y-hidden'>What we are really</h1>
            <h1 className='overflow-y-hidden'>&nbsp;&nbsp;&nbsp;&nbsp;really good at.</h1>
        </div>
        <div className='text-white flex mt-47 ml-5  w-52 leading-5'>
<h1>Get ready to <span className='text-[#1EC679]'>accelerate your career</span>&nbsp;with customized courses and leave your mark in the tech industry</h1>

        </div>
        </div>
    </div>
    <div className='mr-29 mt-1'>
        <button className='text-black cursor-pointer text-2xl rounded-lg bg-[#27DFB3] py-2 px-6'>Check Courses-Make and Impact</button>
    </div>
    </div>
  )
}

export default MiddleSection