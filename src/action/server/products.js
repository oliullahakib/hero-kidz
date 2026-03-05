'use server'
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getAllProducts = async () => {
    try {
        const productCollection = await dbConnect(collections.Products);
        if (!productCollection) return [];
        const products = await productCollection.find().toArray();
       return products.map(product => ({...product, _id: product._id.toString()}));
    } catch (error) {
        console.log("Error in getAllProducts:", error);
        return [];
    }
}
export const getSingleProduct = async (id) => {
    try {
        const productCollection = await dbConnect(collections.Products);
        if (!productCollection) return [];
        const product = await productCollection.findOne({ _id: new ObjectId(id) });
        return {...product, _id: product._id.toString()};
    } catch (error) {
        console.log("Error in getAllProducts:", error);
        return [];
    }
}