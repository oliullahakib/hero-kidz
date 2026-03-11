import { getCartFromDb } from '@/action/server/cart'
import CartComponent from '@/components/Cart/CartComponent'

const CartPage = async() => {
    const cartItems = await getCartFromDb()
    const formatedData = cartItems?.map(item=>{
        return {
            ...item,
            _id: item._id.toString()
        }
    })
    
  return <CartComponent cartItems={formatedData} />
}

export default CartPage