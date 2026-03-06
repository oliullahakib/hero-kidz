"use server"

import { collections, dbConnect } from "@/lib/dbConnect";
import { hash } from "bcryptjs";
export const creatUser = async (payload) => {
    const { name, email, password, provider } = payload;
    // check user exist or not
    const userExist = await (await dbConnect(collections.Users)).findOne({email});
    if (userExist) {
        return {
            error: "User already exists"
        }
    }
    // creat user 
    const newUser = {
        name,
        email,
        password: await hash(password, 10),
        provider,
        role: "user"
    }
    // send user to db
    const result = await (await dbConnect(collections.Users)).insertOne(newUser);
    return result;
}