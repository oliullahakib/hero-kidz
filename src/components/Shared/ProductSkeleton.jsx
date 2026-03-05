import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="bg-base-100 rounded-3xl overflow-hidden shadow-lg border border-base-200/50 animate-pulse">
            {/* Image Container Skeleton */}
            <div className="relative aspect-square bg-base-300 skeleton rounded-none" />

            {/* Content Skeleton */}
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    {/* Title Skeleton */}
                    <div className="h-6 bg-base-300 skeleton w-3/4 rounded-lg" />

                    {/* Rating Skeleton */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div key={star} className="w-3 h-3 bg-base-300 skeleton rounded-full" />
                            ))}
                        </div>
                        <div className="w-10 h-3 bg-base-300 skeleton rounded-lg" />
                    </div>
                </div>

                {/* Price and Action Skeleton */}
                <div className="flex items-center justify-between pt-2">
                    <div className="space-y-1">
                        <div className="h-3 bg-base-300 skeleton w-12 rounded-lg" />
                        <div className="h-7 bg-base-300 skeleton w-20 rounded-lg" />
                    </div>

                    <div className="h-8 w-16 bg-base-300 skeleton rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
