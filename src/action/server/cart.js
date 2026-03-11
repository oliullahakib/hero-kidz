'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
const cartCollection = await dbConnect(collections.Cart)
export const addCartTodb = async(product)=>{
    const {user} = await getServerSession(authOptions)
    if(!user){
        return {success: false, message: "Please login first"}
    }
    const query ={email: user.email, productId: product._id}
    const isProductExist = await cartCollection.findOne(query)
    if(isProductExist){
        
        const update = {$inc: {quantity: 1}}
        const result = await cartCollection.updateOne(query, update)
        return {success: Boolean(result.modifiedCount)}
    }else{
        const newProduct = {
            email: user.email,
            productId: product._id,
            quantity: 1,
            price: (product?.price - (product?.price * product?.discount) / 100),
            name: product.title,
            image: product.image,
            reviews:product.reviews
            
        }
        const result = await cartCollection.insertOne(newProduct)
        return {success: result.acknowledged}
    }
}
export const getCartFromDb = async()=>{
    const {user} = await getServerSession(authOptions)
    if(!user){
        return {success: false, message: "Please login first"}
    }
    const query ={email: user.email}
    const result = await cartCollection.find(query).toArray()
    return result
}