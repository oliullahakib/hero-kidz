"use client"

import { addCartTodb } from "@/action/server/cart"
import { CartContext } from "@/context/cart.context"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { use } from "react"
import Swal from "sweetalert2"

const AddToCartButton = ({product,children,className}) => {
  const {items,setItems}=use(CartContext)
  const session = useSession()
  const router = useRouter()
  const path = usePathname()
  const addToCart = async(e) => {
    e.preventDefault()
    if(session.status === "unauthenticated") {
      router.push(`/login?callbackUrl=${path}`)
    }

   const result = await addCartTodb(product)
   if(result.success){
    Swal.fire('success',"Product add to cart","success")
    const isProductExsit = items.map(item=>item.productId===product._id)
    if(isProductExsit.includes(true)){
      setItems(prev => prev.map(item => item.productId == product._id ? { ...item, quantity: item.quantity + 1 } : item))
    }else{
      setItems(prev => [...prev,result.data])
    }
   }else{
    Swal.fire(result.message,"error")
   }
  }
  return (
    <button onClick={addToCart} className={className}>{children}</button>
  )
}

export default AddToCartButton