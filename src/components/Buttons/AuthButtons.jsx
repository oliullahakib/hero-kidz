"use client"
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const AuthButtons = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = React.useState(false);

  if (status === "loading") {
    return <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>;
  }

  return (
    <div className='flex items-center space-x-4'>
      {status === "authenticated" ? (
        <div className="relative">
          {/* Profile Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center focus:outline-none group transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative p-0.5 rounded-full bg-linear-to-tr from-primary to-secondary shadow-lg">
              <Image
                className='rounded-full border-2 border-base-100 object-cover'
                src={session?.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJqB_VR-jFUwuUGZfnw0P2SkD2m7jlluAzQ&s"}
                alt="user image"
                width={45}
                height={45}
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-base-100 rounded-full"></div>
            </div>
          </button>

          {/* Profile Dropdown Modal */}
          {isOpen && (
            <>
              {/* Click outside to close */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              ></div>

              <div className="absolute right-0 mt-4 w-64 bg-base-100 rounded-3xl shadow-2xl border border-base-200 p-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-1 rounded-full bg-base-200">
                    <Image
                      className='rounded-full object-cover'
                      src={session?.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJqB_VR-jFUwuUGZfnw0P2SkD2m7jlluAzQ&s"}
                      alt="user image"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-black text-base-content leading-tight">
                      {session?.user?.name || "Hero Kidz User"}
                    </h3>
                    <div className="flex items-center justify-center mt-1">
                      <span className="badge badge-primary badge-outline text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                        {session?.user?.role || "Citizen"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="divider my-4 opacity-50"></div>

                <div className="space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center space-x-3 p-3 rounded-2xl hover:bg-base-200 transition-colors font-medium text-sm"
                  >
                    <span>View Profile</span>
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center w-full space-x-3 p-3 rounded-2xl hover:bg-error/10 text-error transition-colors font-bold text-sm"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <Link href="/login" className="btn btn-primary rounded-full px-8 font-black shadow-lg shadow-primary/20 capitalize">
          Login
        </Link>
      )}
    </div>
  )
}

export default AuthButtons