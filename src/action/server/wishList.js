"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { collections, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
const wishListCollection = await dbConnect(collections.WishList)
export const addToWishList = async (product) => {
    const {user} = await getServerSession(authOptions)
        if(!user){
            return {success: false, message: "Please login first"}
        }
        const query = {productId:product._id,email: user.email}
        const isProductExist = await wishListCollection.findOne(query)
        if(isProductExist){
            // delete from wishList 
          const result =  await wishListCollection.deleteOne(query)
         return {success: Boolean(result.deletedCount)}
        }else{
            // add to wishList
            const newProduct = {
                email: user.email,
                productId: product._id,
                title: product.title,
                image: product.image,
                price: product.price,
                discount: product.discount,
                ratings: product.ratings,
                reviews: product.reviews,
            }
            const result = await wishListCollection.insertOne(newProduct)
            return {success: result.acknowledged}
        }
}
export const getWishList = async () => {
    const {user} = await getServerSession(authOptions)
    if(!user){
        return {success: false, message: "Please login first"}
    }
    const query = {email: user.email}
    const wishList = await wishListCollection.find(query).toArray()
    return wishList
}
export const removeWishlistFromDb = async (id,productId) => {
    const {user} = await getServerSession(authOptions)
    if(!user){
        return {success: false, message: "Please login first"}
    }
    const query = {_id:new ObjectId(id),email: user.email,productId}
    const result = await wishListCollection.deleteOne(query)
    return {success: Boolean(result.deletedCount)}
}