"use client"
import Image from 'next/image'
import { removeCartFromDb, updateQuantity } from '@/action/server/cart'
import Swal from 'sweetalert2'
import { useState } from 'react'

const CartCard = ({ product,setItems }) => {
    const [loading,setLoading] = useState(false)
    const handleDeleteCart = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await removeCartFromDb(product._id)
                if (result.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    setItems((prev)=>prev.filter((item)=>item._id !== product._id))
                } else {
                    Swal.fire("Opps", result?.message || "somthing went wrong", "error")
                }

            }
        });

    }
    const incrimentQuantity = async(id)=>{
        setLoading(true)
        const result = await updateQuantity(id,1)
        if(result.success){
            setItems(prev=>prev.map(item=> item._id ==id?{...item,quantity:item.quantity+1}:item))
        }
        setLoading(false)
    }
    const decrimentQuantity = async(id)=>{
        setLoading(true)
        const result = await updateQuantity(id,-1)
        if(result.success){
            setItems(prev=>prev.map(item=> item._id ==id?{...item,quantity:item.quantity-1}:item))
        }
        setLoading(false)
    }
    return (
        <div className="bg-base-100 rounded-2xl shadow-md border border-base-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-base-200 shrink-0">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="grow w-full">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold mb-1 hover:text-primary transition-colors cursor-pointer">{product.name}</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="badge badge-sm badge-success text-white">In Stock</span>
                                <span className="text-xs text-base-content/40">ID: {product.productId?.slice(-6)}</span>
                            </div>
                        </div>
                        {/* delete button  */}
                        <button onClick={handleDeleteCart} className="btn btn-circle btn-ghost btn-sm text-base-content/20 hover:text-error transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-between items-center mt-2">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-black text-primary">৳{product.price.toFixed(2)}</span>
                            <div className="join bg-base-200 rounded-lg p-1">
                                <button disabled={product?.quantity <= 1 || loading} 
                                onClick={()=>decrimentQuantity(product._id)} className="btn btn-ghost btn-xs join-item">-</button>
                                <input type="text" value={product.quantity} readOnly className="w-8 text-center bg-transparent border-none focus:outline-none text-xs font-bold join-item" />
                                <button disabled={product?.quantity >= 10 || loading} onClick={()=>incrimentQuantity(product._id)} className="btn btn-ghost btn-xs join-item">+</button>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-base-content/40 uppercase font-bold tracking-wider">Total</p>
                            <p className="text-xl font-bold">৳{(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard