import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const isAuthorized=false;
    const navigate=useNavigate()
    useEffect(() => {
      if(!isAuthorized){
        navigate("/Signin")
      }
    
      
    }, [])
    
  return (
  children
  )
}

export default ProtectedRoutes