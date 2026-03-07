"use client"
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const AuthButtons = () => {
    const session = useSession();
    if(session.status === "authenticated") {
        return (
            <button onClick={() => signOut()} className="btn btn-primary btn-outline">Logout</button>
        )
    }
  return (
    <Link href="/login" className="btn btn-primary btn-outline">Login</Link>
  )
}

export default AuthButtons