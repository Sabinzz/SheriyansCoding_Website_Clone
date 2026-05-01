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
    <div className='min-h-screen w-full bg-[#0C0C0C] px-4 pb-10 pt-28'>
<div className='mx-auto flex w-full max-w-md flex-col items-center gap-10 sm:gap-15'>
      <div className='flex w-full flex-col items-center justify-center gap-10 sm:gap-16'>
        <div>
            <h1 className='text-center text-4xl text-white sm:text-[40px]'>Sign In</h1>
        </div>
        <div className='w-full'>
            <div className='flex w-full flex-col gap-2'>
                <label className='text-[#8C9E9E] text-sm'>Mobile Number *</label>
<input
onFocus={(e)=>{
e.target.placeholder=""
}}
onBlur={(e)=>{
    e.target.placeholder="Enter Your Mobile Number"
}}

type="text" className='h-11 w-full rounded-sm border-b-2 border-b-[#2D2D2D] bg-[#1E1E1E] px-3 py-2 text-white outline-0 placeholder:text-sm placeholder:text-[#9E9E8C]' placeholder='Enter Your Mobile Number'/>
            </div>
        </div>

     </div>
     <div className='flex w-full flex-col gap-5'>
     <div className='flex items-center gap-2'>
<div className='mb-2 flex-1 border-b border-b-[#2D2D2D]'></div>
<div><h1 className='text-sm text-[#998f8f]'>Or</h1></div>
<div className='mb-2 flex-1 border-b border-b-[#2D2D2D]'></div>
     </div>
     <div>
        <button
        onClick={GoogleLogin}
        className='w-full rounded-full border border-[#2D2D2D] px-5 py-3'>
            <div className='flex items-center justify-center gap-3'>
<Icon icon="material-icon-theme:google" fontSize={30}/>
<h1 className='text-base text-[#EBEBEB] sm:text-lg'>Continue with Google</h1>
            </div>
        </button>
     </div>
     <div className='-mt-2'>
        <button className='w-full rounded-full border border-[#2D2D2D] px-5 py-3'>
            <div className='flex items-center justify-center gap-3'>
<Icon icon="mdi:account-add-outline" fontSize={30} color='white'/>
<h1 className='text-base text-[#EBEBEB] sm:text-lg'>Create a New Account</h1>
            </div>
        </button>
     </div>
     </div>
</div>
   
    </div>
  )
}

export default Signin
