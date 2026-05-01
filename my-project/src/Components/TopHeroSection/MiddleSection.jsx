import React from 'react'

const MiddleSection = ({ onCourseClick }) => {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-28 text-center sm:px-6 sm:pt-32 lg:px-8 lg:pt-40'>
      <div className='flex w-full items-center justify-center font-[neu2]'>
        <div className='flex w-full flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center lg:text-left'>
          <div className='text-5xl leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
            <h1 className='overflow-y-hidden'>We only <span className='text-[#24CFA6]'>teach</span></h1>
            <h1 className='overflow-y-hidden'>What we are really really good at.</h1>
            {/* <h1 className='overflow-y-hidden'>really good at.</h1> */}
          </div>
          <div className='flex max-w-sm text-sm leading-6 text-white sm:text-base lg:mb-4 lg:max-w-56'>
            <h1>Get ready to <span className='text-[#1EC679]'>accelerate your career</span>&nbsp;with customized courses and leave your mark in the tech industry</h1>
          </div>
        </div>
      </div>
      <div className='mt-8 w-full sm:w-auto'>
        <button onClick={onCourseClick} className='w-full max-w-sm cursor-pointer rounded-lg bg-[#27DFB3] px-5 py-3 text-base font-medium text-black sm:w-auto sm:max-w-none sm:px-6 sm:text-xl lg:text-2xl'>
          Check Courses - Make an Impact
        </button>
      </div>
    </section>
  )
}

export default MiddleSection
