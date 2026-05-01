import React from 'react'
import Courses from '../MiddleHeroSection/Courses'
import MiddleSection from '../TopHeroSection/MiddleSection'
import LastSection from '../TopHeroSection/LastSection'

const Home = ({ useCourseRef, onCourseClick }) => {
  return (
    <div className='pb-12 sm:pb-16'>
      <div className='flex flex-col gap-12 sm:gap-20 lg:gap-28'>
        <MiddleSection onCourseClick={onCourseClick} />
        <LastSection />
      </div>
      <div ref={useCourseRef}>
        <Courses />
      </div>
    </div>
  )
}

export default Home
