"use client"
import { WishListContext } from '@/context/wishList.context'
import Link from 'next/link'
import { use } from 'react'
import { FaHeart } from 'react-icons/fa'
const WishListIndicator = () => {
    const {wishlist} = use(WishListContext)
    return <Link href="/profile/wishlist" className='relative'>
        <FaHeart className='mr-5 bg-red-100 text-4xl text-red-500 p-2 rounded-md' />
        <span className="bg-white px-2 rounded-full text-xs font-bold absolute top-[-5px] right-2">{wishlist.length}</span>
    </Link>
}

export default WishListIndicator