import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/assets/logo.png"
const Logo = () => {
  return (
    <div className='flex items-center gap-1'>
        <Image src={logo} alt="Logo" width={50} height={50} />
        <Link href="/" className='text-2xl font-bold' >Hero <span className='text-primary'>Kidz</span> </Link>
    </div>
  )
}

export default Logo