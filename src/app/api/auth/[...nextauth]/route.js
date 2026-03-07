import { collections, dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }

                try {
                    const db = await dbConnect(collections.Users);
                    const user = await db.findOne({ email });

                    if (!user) {
                        console.log("User not found for email:", email);
                        return null;
                    }

                    if (!user.password) {
                        return null;
                    }

                    const isPasswordValid = await compare(password, user.password);

                    if (!isPasswordValid) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.error("Error in NextAuth authorize:", error);
                    return null;
                }
            }
        }),
        GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }