import React from 'react'
import { Icon } from '@iconify/react';

const Courses = () => {
  const course=[{
id:1,img:"/Courses/First.webp",title:"Data Science and Analytics with GenAI",button1:"HINGLISH",text:"Limited Time Discount",money1:"₹ 6999",money2:"₹15000",discount:"53% OFF"
  },{
id:2,img:"/Courses/Second.webp",title:"2.0 Job Ready AI Powered Cohort: Web+DSA+Aptitude",button1:"HINGLISH",text:"Limited Time Discount",money1:"₹ 6999",money2:"₹15000",discount:"53% OFF"
  },{
id:3,img:"/Courses/Third.webp",title:"DSA Domination Cohort:AI Powered Cohort",button1:"HINGLISH",text:"Limited Time Discount",money1:"₹ 6999",money2:"₹15000",discount:"53% OFF"
  },{
id:4,img:"/Courses/Fourth.webp",title:"Job Ready AI Powered Cohort: Web+DSA+Aptitude",button1:"HINGLISH",text:"Limited Time Discount",money1:"₹ 6999",money2:"₹15000",discount:"53% OFF"
  },{
id:5,title:"Three.js Domination:AI Powered Cohort",img:"/Courses/Fifth.webp",button1:"HINGLISH",text:"Limited Time Discount",money1:"₹ 6999",money2:"₹15000",discount:"53% OFF"
  },{
id:6,title:"Java & DSA Domination:AI Powered Cohort",img:"/Courses/Sixth.webp",button1:"HINGLISH",text:"Limited Time Discount",money1:"₹ 6999",money2:"₹15000",discount:"53% OFF"
  }]

  return (
    <section className='mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8 xl:grid-cols-3'>
      {course.map((item)=>(
        <div key={item.id} className='flex w-full flex-col overflow-hidden rounded-lg border border-black bg-[#171717] pb-6'>
          <div className='w-full'>
            <img className='h-48 w-full object-cover sm:h-52 lg:h-56' src={item.img} alt={item.title} />
          </div>
          <div className='flex flex-1 flex-col justify-between gap-8'>
            <div>
              <div className='px-4 pt-5 text-white'>
                <h1 className='text-xl font-medium leading-tight sm:text-2xl'>{item.title}</h1>
              </div>
              <div className='px-4 pt-1 text-white'>
                <button className='mt-2 rounded bg-[#2C2C2C] px-3 py-1 text-xs tracking-wide sm:text-sm'>{item.button1}</button>
              </div>
            </div>
            <div>
              <div className='px-4'>
                <h1 className='text-sm text-(--green) sm:text-base'>{item.text}</h1>
              </div>
              <div className='flex flex-wrap items-center gap-3 px-4 text-white sm:gap-5'>
                <h1 className='text-xl font-semibold sm:text-2xl'>{item.money1}</h1>
                <div className='relative overflow-y-hidden'>
                  <h1 className='text-lg text-[#4A4A4A] sm:text-xl'>{item.money2}</h1>
                  <Icon className='absolute -top-4 text-[#4A4A4A] stroke-[0.8]' icon="pepicons-pencil:line-x" width="63" />
                </div>
                <button className='ml-auto rounded-lg bg-white px-2 py-1 text-sm text-black'>
                  {item.discount}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Courses
