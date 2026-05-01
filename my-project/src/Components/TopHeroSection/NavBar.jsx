import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const NavBar = ({ onCourseClick, show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleCourseClick = () => {
    onCourseClick?.()
    closeMenu()
  }

  return (
    <nav className={`fixed top-0 z-50 w-full bg-[#0C0C0C]/90 shadow-lg shadow-black/10 backdrop-blur transition-transform duration-300 ${show || isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <Link to="/" onClick={closeMenu} className='flex items-center gap-3'>
          <img className='h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10' src="/Lion.webp" alt="" />
          <h1 className='w-28 font-[neu2] text-base leading-5 text-white sm:w-36 sm:text-[19px] sm:leading-6'>
            Sheryians coding school
          </h1>
        </Link>

        <div className='hidden items-center gap-6 font-[neu2] text-white md:flex lg:gap-10'>
          <Link to="/">Home</Link>
          <button type="button" onClick={handleCourseClick} className="cursor-pointer">Courses</button>
          <Link to="/Bootcamp">BootCamp</Link>
          <button type="button" className="cursor-pointer">Request Callback</button>
          <Link to="/Signin" className='rounded-lg bg-(--green) px-7 py-2 font-medium text-black'>
            Sign In
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className='flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden'
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} width="26" />
        </button>
      </div>

      <div className={`overflow-hidden px-4 transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='mx-auto flex max-w-7xl flex-col gap-1 rounded-lg border border-white/10 bg-[#151515] p-2 text-white'>
          <Link to="/" onClick={closeMenu} className='rounded-md px-3 py-3'>Home</Link>
          <button type="button" onClick={handleCourseClick} className='rounded-md px-3 py-3 text-left'>Courses</button>
          <Link to="/Bootcamp" onClick={closeMenu} className='rounded-md px-3 py-3'>BootCamp</Link>
          <button type="button" className='rounded-md px-3 py-3 text-left'>Request Callback</button>
          <Link to="/Signin" onClick={closeMenu} className='mt-1 rounded-lg bg-(--green) px-3 py-3 text-center font-medium text-black'>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
