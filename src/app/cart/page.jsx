import { getCartFromDb } from '@/action/server/cart'
import React from 'react'

const cartpage = async() => {
    const cartItem = await getCartFromDb()
  return (
    <div>cartpage{cartItem?.length}</div>
  )
}

export default cartpage