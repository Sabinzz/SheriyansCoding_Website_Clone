import React from 'react'

const LastSection = () => {
  return (
    <section className='mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 px-4 text-center text-white sm:grid-cols-3 sm:px-6 lg:px-8'>
      <div className='flex flex-col leading-8 sm:leading-9'>
        <h1 className='text-3xl font-semibold sm:text-4xl'>250k+</h1>
        <h1 className='text-sm text-white/80 sm:text-base'>Students taught</h1>
      </div>
      <div className='flex flex-col leading-8 sm:leading-9'>
        <h1 className='text-3xl font-semibold sm:text-4xl'>20+</h1>
        <h1 className='text-sm text-white/80 sm:text-base'>Instructors</h1>
      </div>
      <div className='flex flex-col leading-8 sm:leading-9'>
        <h1 className='text-3xl font-semibold sm:text-4xl'>623k+</h1>
        <h1 className='text-sm text-white/80 sm:text-base'>Youtube Subs.</h1>
      </div>
    </section>
  )
}

export default LastSection
