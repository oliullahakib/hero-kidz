'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { clearAllCart, getCartFromDb } from "./cart"
const orderCollection = await dbConnect(collections.Order)
export const createOrder = async (payload) => {
    const { user } = await getServerSession(authOptions)
    if (!user) {
        return { success: false, message: "Please login first" }
    }
    const cart = await getCartFromDb()
    // cost calculation 
    const subtotal = cart?.length > 0 ? cart?.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0
    const shipping = cart?.length > 0 ? 50 : 0
    const total = subtotal + shipping
    const newOrder = {cart,...payload,createdAt: new Date().toISOString(),total}
    const result = await orderCollection.insertOne(newOrder)
    await clearAllCart()
    return { success: Boolean(result.insertedId) }
}
