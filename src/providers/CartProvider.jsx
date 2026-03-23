"use client"

import { getCartFromDb } from "@/action/server/cart"
import { CartContext } from "@/context/cart.context"
import { useEffect, useState } from "react"

const CartProvider = ({children}) => {
   const [items,setItems]=useState([])
   const [loading,setLoading]=useState(true)

   useEffect(() => {
    const fetchCart = async () => {
        const res = await getCartFromDb()
        const formatedData = res?.map(item=>{
            return {
                ...item,
                _id: item._id.toString()
            }
        })
        setItems(formatedData)
        setLoading(false)
    }
    fetchCart()
   }, [])
  return (
    <CartContext.Provider value={{items,setItems,loading}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider