"use client"
import React from 'react'

const QuantityUpdateBtn = ({product}) => {
    return <div className="flex items-center bg-base-200 rounded-2xl px-4 py-2 border-2 border-base-300 shadow-lg">
        <button className="btn btn-ghost btn-circle btn-sm font-black text-xl hover:bg-base-300">-</button>
        <span className="px-8 font-black text-2xl w-20 text-center">{product.quantity}</span>
        <button className="btn btn-ghost btn-circle btn-sm font-black text-xl hover:bg-base-300">+</button>
    </div>
}

export default QuantityUpdateBtn