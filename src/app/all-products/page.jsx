import { getAllProducts } from '@/action/server/products'
import SearchProducts from '@/components/AllProducts/SearchProducts'
import ProductCard from '@/components/Shared/ProductCard'
import React from 'react'

const AllProductsPage = async({searchParams}) => {
  const {search} = await searchParams
  const products = await getAllProducts(search)
  return (
    <div>
      <div className='flex items-center gap-5'>
                <h1 className='text-2xl my-5'>Foods <span className='font-bold text-orange-400'>({products.length})</span> </h1>
                <SearchProducts/>
            </div>
     
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default AllProductsPage