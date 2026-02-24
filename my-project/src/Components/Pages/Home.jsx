import React, { useRef } from 'react'
import NavBar from '../TopHeroSection/NavBar'
import Courses from '../MiddleHeroSection/Courses'
import MiddleSection from '../TopHeroSection/MiddleSection'
import LastSection from '../TopHeroSection/LastSection'

const Home = ({ useCourseRef }) => {
  
  return (
    <div>
         <div className='flex flex-col gap-28'>
              <MiddleSection/>
              <LastSection/>
         </div>
         <div ref={useCourseRef}>
              <Courses />
         </div>
    </div>
  )
}

export default Home