"use client"
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import { addToWishList } from '@/action/server/wishList'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

const WishListBtn = ({ product,initialWishList }) => {
    const session = useSession()
        const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
    const [wishlist, setWishlist] = useState([])
    const handleWishlist = async (e) => {
        e.preventDefault()
        if (session.status === "unauthenticated") {
            Toast.fire({
                    icon: "error",
                    title: "Please login first"
                });
            return
        }
        if (wishlist.includes(product._id)) {
            setWishlist(wishlist.filter((id) => id !== product._id))
        } else {
            setWishlist([...wishlist, product._id])
        }
      const result =  await addToWishList(product)
     
        
    }

    return (
        <button onClick={handleWishlist} className="absolute top-4 right-3 z-10">
            <FaHeart fill={initialWishList.some((item) => item.productId == product._id) || wishlist.includes(product._id) ? "red" : "white"}  className='bg-red-200 text-2xl md:text-3xl text-red-500 p-1 rounded-md' />
        </button>
    )
}

export default WishListBtn