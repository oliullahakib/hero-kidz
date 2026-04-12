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
