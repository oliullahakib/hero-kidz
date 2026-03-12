'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const CheckoutComponent = ({ cartItems }) => {
    const session = useSession()
    console.log(session)
    const [items, setItems] = useState(cartItems)
    const subtotal = items?.length > 0 ? items?.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0
    const shipping = items?.length > 0 ? 50 : 0
    const total = subtotal + shipping
const handleDelevery= (e)=>{
    e.preventDefault()
    const from = e.target;
    const formData = {
        userName: from.userName.value,
        userEmail: from.userEmail.value,
        contact: from.contact.value,
        altContact: from.altContact.value,
        address: from.address.value,
        city: from.city.value,
        zipCode: from.zipCode.value,
        notes: from.notes.value,
    }
    console.log(formData)
}
    return (
        <div className="bg-base-200 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb */}
                <div className="text-sm breadcrumbs mb-6 text-base-content/60">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                        <li>Checkout</li>
                    </ul>
                </div>

                <h1 className="text-4xl font-black  text-base-content">Check <span className="text-primary italic">Out</span></h1>

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
                        {/* Delevery Information */}
                        <div className="lg:col-span-8">
                            <div className="bg-base-100 rounded-3xl shadow-xl border border-base-200 p-8">
                                <h2 className="text-2xl font-black mb-8 pb-4 border-b border-base-200">Delivery <span className="text-primary italic">Information</span></h2>

                                <form onSubmit={handleDelevery} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Full Name</span>
                                            </label>
                                            <input
                                                defaultValue={session?.data?.user?.name}
                                                type="text"
                                                name='userName'
                                                className="input input-bordered rounded-2xl focus:input-primary transition-all"
                                                required
                                                disabled
                                                readOnly />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Email Address</span>
                                            </label>
                                            <input
                                                type="email"
                                                name='userEmail'
                                                defaultValue={session?.data?.user?.email}
                                                className="input input-bordered rounded-2xl  transition-all"
                                                required
                                                disabled
                                                readOnly />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Contact Number</span>
                                            </label>
                                            <input type="tel" placeholder="+880 1XXX-XXXXXX" name='contact' className="input input-bordered rounded-2xl focus:input-primary transition-all" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Alternative Contact (Optional)</span>
                                            </label>
                                            <input name='altContact' type="tel" placeholder="+880 1XXX-XXXXXX" className="input input-bordered rounded-2xl focus:input-primary transition-all" />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Shipping Address</span>
                                        </label>
                                        <textarea name='address' className="textarea textarea-bordered rounded-2xl w-full h-24 focus:textarea-primary transition-all" placeholder="House #, Road #, Area, City" required></textarea>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control flex gap-2">
                                            <label className="label">
                                                <span className="label-text font-bold">City</span>
                                            </label>
                                            <input type="text" placeholder="Dhaka" name='city' className="input input-bordered rounded-2xl focus:input-primary transition-all" />
                                        </div>
                                        <div className="form-control flex gap-2">
                                            <label className="label">
                                                <span className="label-text font-bold">Zip Code</span>
                                            </label>
                                            <input type="text" placeholder="1212" name='zipCode' className="input input-bordered rounded-2xl focus:input-primary transition-all" />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Order Notes (Optional)</span>
                                        </label>
                                        <textarea name='notes' className="textarea textarea-bordered rounded-2xl w-full h-24 focus:textarea-primary transition-all" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>

                                    <div className="mt-8">
                                        <button type="submit" className="btn btn-primary w-full rounded-2xl text-white font-bold text-lg hover:scale-105 transition-transform">
                                            Pay for Cash on Delevery
                                        </button>
                                    </div>
                                </form>
                            </div>
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




                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckoutComponent