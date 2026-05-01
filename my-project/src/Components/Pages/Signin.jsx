import { Icon } from '@iconify/react'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'

const Signin = () => {
    const GoogleLogin=useGoogleLogin({
        onSuccess:(tokenResponse)=>{
            console.log("Token",tokenResponse)
        },
        onError:()=>{
            console.log("Error")
        },
    })
  return (
    <div className='h-screen w-screen bg-[#0C0C0C]'>
<div className='flex flex-col gap-15  items-center'>
      <div className='flex justify-center items-center flex-col gap-22 mt-40'>
        <div>
            <h1 className='text-center text-white text-[40px]'>Sign In</h1>
        </div>
        <div>
            <div className='flex flex-col gap-2'>
                <label className='text-[#8C9E9E] text-sm'>Mobile Number *</label>
<input
onFocus={(e)=>{
e.target.placeholder=""
}}
onBlur={(e)=>{
    e.target.placeholder="Enter Your Mobile Number"
}}

type="text" className='w-100 text-white outline-0 h-7 px-3 py-2 bg-[#1E1E1E] rounded-sm border-b-2 border-b-[#2D2D2D] placeholder:text-[#9E9E8C] placeholder:text-sm' placeholder='Enter Your Mobile Number'/>
            </div>
        </div>

     </div>
     <div className='flex flex-col gap-5'>
     <div className='flex gap-2'>
<div className='border-b border-b-[#2D2D2D] w-45 mb-2'></div>
<div><h1 className='text-sm text-[#998f8f]'>Or</h1></div>
<div className='border-b border-b-[#2D2D2D] w-45 mb-2'></div>
     </div>
     <div>
        <button
        onClick={GoogleLogin}
        className='border border-[#2D2D2D] px-22 py-3 rounded-full'>
            <div className='flex gap-3 items-center'>
<Icon icon="material-icon-theme:google" fontSize={30}/>
<h1 className='text-[#EBEBEB] text-lg'>Continue with Google</h1>
            </div>
        </button>
     </div>
     <div className='-mt-2'>
        <button className='border border-[#2D2D2D] px-22 py-3 rounded-full '>
            <div className='flex gap-3 items-center'>
<Icon icon="mdi:account-add-outline" fontSize={30} color='white'/>
<h1 className='text-[#EBEBEB] text-lg'>Create a New Account</h1>
            </div>
        </button>
     </div>
     </div>
</div>
   
    </div>
  )
}

export default Signin