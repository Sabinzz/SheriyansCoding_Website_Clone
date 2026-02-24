import React from 'react'
import lion from '/public/Lion.webp'
import { Link } from 'react-router-dom'
const NavBar = ({onCourseClick,show}) => {
  return (
    <div className={`flex justify-between px-15 py-5 fixed w-full top-0 z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex gap-3 '>
<div className=''>
    <img className='h-10 object-cover' src="/Lion.webp" alt="" />
</div>
<div className='font-[neu2]  w-30 whitespace-normal text-white text-[19px] leading-6'>
    <h1>Sheryians coding school</h1>

</div>
        </div>
        <div className='flex gap-10 items-center text-white font-[neu2]'>
<Link to="/">Home</Link>
            <a onClick={onCourseClick} className="cursor-pointer "  href="#">Courses</a>
<Link to="/Bootcamp">BootCamp</Link>
            <a className="cursor-pointer "  href="#">Request Callback</a>
        

            <button className='bg-(--green) cursor-pointer    px-7 py-1.75 rounded-lg font-medium'><Link to="/Signin">Sign In</Link></button>


            


        </div>
    </div>
  )
}

export default NavBar