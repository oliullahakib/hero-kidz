import { getAllProducts } from '@/action/server/products'
import ProductCard from '@/components/Shared/ProductCard'
import React from 'react'

const AllProductsPage = async() => {
  const products = await getAllProducts()
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default AllProductsPage