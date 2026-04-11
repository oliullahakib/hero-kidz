import { getCartFromDb } from "@/action/server/cart"
import CheckoutComponent from "@/components/Checkout/CheckoutComponent"

const checkoutpage = async() => {
        const cartItems = await getCartFromDb()
        const formatedData = cartItems?.map(item=>{
            return {
                ...item,
                _id: item._id.toString()
            }
        })
  return <CheckoutComponent cartItems={formatedData}/>
}

export default checkoutpage