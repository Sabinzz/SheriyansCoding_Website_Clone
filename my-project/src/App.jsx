import { useRef, useState, useEffect } from 'react'
import NavBar from './Components/TopHeroSection/NavBar'
import Home from './Components/Pages/Home'
import { Route,Routes} from 'react-router-dom'
import BootCamp from './Components/Pages/BootCamp'
import Signin from './Components/Pages/Signin'
import ProtectedRoutes from './Components/Common/ProtectedRoutes'

function App() {
  const [showNav, setShowNav] = useState(true)
  const [lastPosition, setLastPosition] = useState(0)
  const useCourse = useRef(null)

  const onCourseClick = () => {
    useCourse.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const scrollTrigger = () => {
      const currentPosition = window.scrollY
      if (currentPosition > lastPosition) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      setLastPosition(currentPosition)
    }
    
    window.addEventListener("scroll", scrollTrigger)
    return () => {
      window.removeEventListener("scroll", scrollTrigger)
    }
  }, [lastPosition])
 
  return (
   
    <>
      <NavBar show={showNav} onCourseClick={onCourseClick}/>
      <div 
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Bg-img.svg')"}}
      >
        <Routes>
          <Route path="/" element={<Home useCourseRef={useCourse} onCourseClick={onCourseClick}/>}></Route>

          <Route path='/Bootcamp' element={
            <ProtectedRoutes>
            <BootCamp/>
            </ProtectedRoutes>
            
            }></Route>

          <Route path='/Signin' element={<Signin/>}></Route>

        </Routes>
      </div>
    </>
  )
}

export default App
