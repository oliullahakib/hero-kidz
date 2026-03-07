"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const AddToCartButton = ({product,children,className}) => {
  const session = useSession()
  const router = useRouter()
  const path = usePathname()
  const addToCart = (e) => {
    e.preventDefault()
    if(session.status === "unauthenticated") {
      router.push(`/login?callbackUrl=${path}`)
    }
  }
  return (
    <button onClick={addToCart} className={className}>{children}</button>
  )
}

export default AddToCartButton