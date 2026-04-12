"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const getAllUsers = async () => {
    try {
        const result = await (await dbConnect(collections.Users)).find({}).toArray();
        return result.map(user => ({
            ...user,
            _id: user._id.toString()
        }));
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export const updateUserRole = async (userId, newRole) => {
    // verify user is admin 
    const session = await getServerSession(authOptions)
    const role = session?.user?.role
    const isAdmin = role === 'admin'
    if (!isAdmin) {
        return { success: false, error: "You are not authorized to update user role" };
    }
    try {
        const result = await (await dbConnect(collections.Users)).updateOne(
            { _id: new ObjectId(userId) },
            { $set: { role: newRole } }
        );
        revalidatePath("/dashboard/users");
        return { success: true, result };
    } catch (error) {
        console.error("Error updating user role:", error);
        return { success: false, error: error.message };
    }
}

export const getBlocklist = async () => {
    try {
        const result = await (await dbConnect(collections.Blocklist)).find({}).toArray();
        return result.map(doc => doc.email);
    } catch (error) {
        console.error("Error fetching blocklist:", error);
        return [];
    }
}

export const toggleUserBlock = async (email, block) => {
    // verify user is admin 
    const session = await getServerSession(authOptions)
    const role = session?.user?.role
    const isAdmin = role === 'admin'
    if (!isAdmin) {
        return { success: false, error: "You are not authorized to block/unblock users" };
    }
    
    try {
        const collection = await dbConnect(collections.Blocklist);
        if (block) {
            // Block user: insert email if it doesn't exist
            await collection.updateOne({ email }, { $set: { email } }, { upsert: true });
        } else {
            // Unblock user: remove email from blocklist
            await collection.deleteOne({ email });
        }
        revalidatePath("/dashboard/users");
        return { success: true };
    } catch (error) {
        console.error("Error toggling block status:", error);
        return { success: false, error: error.message };
    }
}
