import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-400">404</h1>
        <h2 className='text-xl font-semibold'>Page Not Found</h2>
        <p className='text-gray-500'>Sorry, the page you are looking for does not exist.</p>
        <Link href={'/'} className='btn btn-primary mt-2'>Back to Home</Link>
    </div>
  )
}

export default NotFound