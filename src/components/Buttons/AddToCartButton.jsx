"use client"

import { addCartTodb } from "@/action/server/cart"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Swal from "sweetalert2"

const AddToCartButton = ({product,children,className}) => {
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
   }else{
    Swal.fire(result.message,"error")
   }
  }
  return (
    <button onClick={addToCart} className={className}>{children}</button>
  )
}

export default AddToCartButton