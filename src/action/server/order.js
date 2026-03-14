'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

const { dbConnect, collections } = require("@/lib/dbConnect")

const orderCollection = await dbConnect(collections.Order)
export const getMyOrders = async () => {
  const { user } = await getServerSession(authOptions)
      if (!user) {
          return { success: false, message: "Please login first" }
      }
      const query = { userEmail: user.email }
      const orders = await orderCollection.find(query).toArray()
      return orders
}