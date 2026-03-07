'use client'
import { signIn } from 'next-auth/react';
import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
const SocialLogin = () => {
    const params = useSearchParams();
    const callbackUrl = params.get('callbackUrl') || '/';
    const handleGoogleLogin = () => {
       signIn('google',{redirect:true,callbackUrl})
    }
    return (
        <div className="grid grid-cols-1 gap-4">
            <button onClick={handleGoogleLogin} className="btn btn-outline border-base-300 rounded-2xl gap-3 hover:bg-base-200 hover:text-base-content capitalize">
                <FaGoogle className="text-error" />
                Google
            </button>
        </div>
    )
}

export default SocialLogin