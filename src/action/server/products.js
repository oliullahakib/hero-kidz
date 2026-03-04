'use server'
import { collections, dbConnect } from "@/lib/dbConnect";

export const getAllProducts = async () => {
    try {
        const productCollection = await dbConnect(collections.Products);
        if (!productCollection) return [];
        const products = await productCollection.find().toArray();
        return products;
    } catch (error) {
        console.log("Error in getAllProducts:", error);
        return [];
    }
}