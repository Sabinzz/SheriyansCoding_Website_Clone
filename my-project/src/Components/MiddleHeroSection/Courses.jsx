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
    <div className='grid grid-cols-3 gap-8 mx-30 mt-10'>
{course.map((item)=>(
  <div key={item.id} className='border w-97.5 pb-7 bg-[#171717] border-black  rounded-lg'>
<div >

  <img className='w-full h-[30vh] object-cover' src={item.img} alt="sorry" />
</div>
<div className='flex flex-col gap-10'>
  <div>
<div className='text-white pt-5 px-3 text-[1.5vw] ' >
  <h1 className='[&>*:nth-child(3)]:pt-20'>{item.title}</h1>
</div>
<div className='pt-1 px-3 text-white '>

  <button className='bg-[#2C2C2C]  border-2 w-[6vw] border-transparent'>{item.button1}</button>
</div>
</div>
<div>
<div className='px-3 '>
  <h1 className='text-(--green)'>{item.text}</h1>
</div>
<div className='flex gap-5 text-white px-3'>
  <h1 className='text-2xl'>{item.money1}</h1>
<div className='relative overflow-y-hidden'>
  <h1 className='text-xl text-[#4A4A4A]'>{item.money2}</h1>
  <div>
 <Icon className='text-[#4A4A4A] absolute -top-4 stroke-[0.8]' icon="pepicons-pencil:line-x" width="63" />
  </div>
</div>
<button className='bg-white ml-20 text-black px-2 py-1 rounded-lg'>
  {item.discount}
</button>
</div>
</div>

</div>
  </div>
))}
   
        </div>
  )
}

export default Courses
