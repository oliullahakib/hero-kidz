'use server'
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";


export const getAllProducts = async (search = '') => {
    try {
        const productCollection = await dbConnect(collections.Products);
        if (!productCollection) return [];
        const products = await productCollection.find({
            $or: [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ]
        }).toArray();
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
        console.log("Error in getSingleProduct:", error);
        return null;
    }
}

export const addProduct = async (productData) => {
    try {
        const productCollection = await dbConnect(collections.Products);
        if (!productCollection) throw new Error("Database not connected");

        const result = await productCollection.insertOne({
            ...productData,
            createdAt: new Date(),
        });
        
        revalidatePath("/dashboard/products");
        revalidatePath("/all-products");
        revalidatePath("/");
        return { success: true, insertedId: result.insertedId.toString() };
    } catch (error) {
        console.log("Error in addProduct:", error);
        return { success: false, message: error.message };
    }
}

export const updateProduct = async (id, productData) => {
    try {
        const productCollection = await dbConnect(collections.Products);
        if (!productCollection) throw new Error("Database not connected");

        // prevent modifying the immutable _id via object spread
        delete productData._id;

        const result = await productCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { ...productData, updatedAt: new Date() } }
        );

        revalidatePath("/dashboard/products");
        revalidatePath(`/product-details/${id}`);
        revalidatePath("/all-products");
        revalidatePath("/");
        return { success: true, modifiedCount: result.modifiedCount };
    } catch (error) {
        console.log("Error in updateProduct:", error);
        return { success: false, message: error.message };
    }
}

export const deleteProduct = async (id) => {
    try {
        const productCollection = await dbConnect(collections.Products);
        if (!productCollection) throw new Error("Database not connected");

        const result = await productCollection.deleteOne({ _id: new ObjectId(id) });
        
        revalidatePath("/dashboard/products");
        revalidatePath("/all-products");
        revalidatePath("/");
        return { success: true, deletedCount: result.deletedCount };
    } catch (error) {
        console.log("Error in deleteProduct:", error);
        return { success: false, message: error.message };
    }
}