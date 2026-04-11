import ProductSkeleton from '@/components/Shared/ProductSkeleton'
import React from 'react'

const loading = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-full p-4">

                {/* Title Skeleton */}
                <div className="flex items-center gap-2">
                    <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-8 w-80 px-4 py-2 rounded-2xl bg-gray-300 animate-pulse"></div>
                </div>


            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                {Array.from({ length: 8 }).map((_, index) => (
                    <ProductSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}

export default loading