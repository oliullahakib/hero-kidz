'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import CartCard from './CartCard'

const CartComponent = ({cartItems}) => {
    const [items,setItems]=useState(cartItems)
    const subtotal = items?.length > 0 ? items?.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0
    const shipping = items?.length > 0 ? 50 : 0
    const total = subtotal + shipping

  return (
    <div className="bg-base-200 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
            {/* Breadcrumb */}
            <div className="text-sm breadcrumbs mb-6 text-base-content/60">
                <ul>
                    <li><Link href="/">Home</Link></li> 
                    <li>Cart</li>
                </ul>
            </div>

            <h1 className="text-4xl font-black  text-base-content">Shopping <span className="text-primary italic">Cart</span></h1>
            <h1 className="text-xl font-black mb-10 text-base-content">Item found <span className="text-primary italic">{items.length}</span></h1>

            {!items || (Array.isArray(items) && items.length === 0) ? (
                <div className="bg-base-100 rounded-3xl p-20 text-center shadow-xl border border-base-300">
                    <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
                    <p className="max-w-md mx-auto text-base-content/60 mb-10 text-lg">Looks like you haven't added anything to your cart yet. Let's explore some amazing products!</p>
                    <Link href="/all-products" className="btn btn-primary btn-lg rounded-full px-12 text-white font-bold hover:scale-105 transition-transform">
                        Explore Products
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-8 space-y-6">
                        {items.map((item) => (
                            <CartCard 
                            key={item._id} 
                            product={{...item, _id: item._id.toString()}}
                            setItems={setItems}
                            />
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-200 p-8 sticky top-24">
                            <h2 className="text-2xl font-black mb-8 pb-4 border-b border-base-200">Order <span className="text-primary italic">Summary</span></h2>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-base-content/60">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-base-content">৳{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-base-content/60">
                                    <span>Shipping</span>
                                    <span className="font-bold text-base-content">৳{shipping.toFixed(2)}</span>
                                </div>
                                <div className="divider opacity-30"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold">Total</span>
                                    <span className="text-3xl font-black text-primary">৳{total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-block rounded-2xl h-14 text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-lg">
                                Checkout Now
                            </button>

                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default CartComponent