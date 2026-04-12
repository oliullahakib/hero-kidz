"use client"
import { signOut } from 'next-auth/react'

const BlockedPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
        <h1 className='text-5xl font-bold text-error'>You are not allow to this page!</h1>
        <p className='text-xl font-bold text-gray-400'>Please contact with admin for any issue.</p>
        <p className='text-primary'>Contact Admin <small>[oliullahakib@gmail.com]</small> </p>
        <button onClick={()=>signOut()} className='btn btn-primary'>Logout</button>
    </div>
  )
}

export default BlockedPage