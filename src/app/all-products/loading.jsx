import ProductSkeleton from '@/components/Shared/ProductSkeleton'
import React from 'react'

const loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
            ))}
        </div>
    )
}

export default loading