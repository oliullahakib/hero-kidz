import { getAllProducts } from '@/action/server/products'
import SearchProducts from '@/components/AllProducts/SearchProducts'
import ProductCard from '@/components/Shared/ProductCard'
import React from 'react'

export const metadata = {
  title: "All Products | Hero Kidz",
  description: "Browse our huge collection of toys and discover the best products for your kids.",
  openGraph: {
    title: "All Products | Hero Kidz",
    description: "Browse our huge collection of toys and discover the best products for your kids.",
    images: ["https://i.ibb.co.com/XkK057C1/homepage.png"],
  },
  icons: {
    icon: "https://i.ibb.co.com/MxfwC02d/logo.png",
  },
};

const AllProductsPage = async({searchParams}) => {
  const {search} = await searchParams
  const products = await getAllProducts(search)
      const formatedData = products?.map(item=>{
        return {
            ...item,
            _id: item._id.toString()
        }
    })
  return (
    <div className='pb-10'>
      <div className='flex flex-col-reverse md:flex-row my-5  items-center gap-5'>
                <h1 className='text-2xl my-2'>Toys <span className='font-bold text-orange-400'>({products.length})</span> </h1>
                <SearchProducts/>
            </div>
     
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-0'>
      {formatedData.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default AllProductsPage