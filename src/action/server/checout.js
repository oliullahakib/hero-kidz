'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { getCartFromDb } from "./cart"
const orderCollection = await dbConnect(collections.Order)
export const createOrder = async (payload) => {
    const { user } = await getServerSession(authOptions)
    if (!user) {
        return { success: false, message: "Please login first" }
    }
    const cart = await getCartFromDb()
    console.log({cart,payload})
    return { success: true, message: "Order created successfully" }
}
