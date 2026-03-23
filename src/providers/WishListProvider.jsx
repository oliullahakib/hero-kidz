"use client"

import { getWishList } from "@/action/server/wishList"
import { WishListContext } from "@/context/wishList.context"
import { useEffect, useState } from "react"

const WishListProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])
       const [loading,setLoading]=useState(true)
    
       useEffect(() => {
        const fetchWishList = async () => {
            const res = await getWishList()
            const formatedData = res?.map(item=>{
                return {
                    ...item,
                    _id: item._id.toString()
                }
            })
            setWishlist(formatedData)
            setLoading(false)
        }
        fetchWishList()
       }, [])
  return (
    <WishListContext.Provider value={{wishlist,setWishlist,loading}}>
        {children}
    </WishListContext.Provider>
  )
}

export default WishListProvider