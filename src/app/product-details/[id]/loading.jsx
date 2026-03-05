const loading = () => {
    return (
       <div className="bg-base-100 min-h-screen animate-pulse">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Image Section Skeleton */}
                    <div className="relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="relative aspect-square rounded-[3rem] bg-base-300 skeleton border-4 border-white" />

                            {/* Short Features under image */}
                            <div className="hidden md:grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="p-4 bg-base-200/50 rounded-2xl h-24 border border-base-200 skeleton" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Section Skeleton */}
                    <div className="space-y-10">
                        {/* Header Content Skeleton */}
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-3 items-center">
                                <div className="h-6 w-24 bg-base-300 skeleton rounded-full" />
                                <div className="h-6 w-32 bg-base-300 skeleton rounded-full" />
                            </div>

                            <div className="space-y-4">
                                <div className="h-12 w-full bg-base-300 skeleton rounded-2xl" />
                                <div className="h-12 w-3/4 bg-base-300 skeleton rounded-2xl" />
                                <div className="h-8 w-1/2 bg-base-300 skeleton rounded-xl" />
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="h-6 w-20 bg-base-300 skeleton rounded-full" />
                                <div className="h-4 w-px bg-base-300" />
                                <div className="h-6 w-24 bg-base-300 skeleton rounded-full" />
                                <div className="h-4 w-px bg-base-300" />
                                <div className="h-6 w-16 bg-base-300 skeleton rounded-full" />
                            </div>
                        </div>

                        {/* Price Card Skeleton */}
                        <div className="p-8 bg-base-200 rounded-[2.5rem] border border-white/50 h-32 skeleton" />

                        {/* Description Section Skeleton */}
                        <div className="space-y-4">
                            <div className="h-6 w-32 bg-base-300 skeleton rounded-full" />
                            <div className="h-48 w-full bg-base-200 rounded-[2.5rem] skeleton" />
                        </div>

                        {/* Info List Skeleton */}
                        <div className="space-y-4">
                            <div className="h-6 w-32 bg-base-300 skeleton rounded-full" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-16 bg-base-200 rounded-2xl skeleton" />
                                ))}
                            </div>
                        </div>

                        {/* Actions Skeleton */}
                        <div className="pt-6">
                            <div className="h-16 w-full bg-base-300 rounded-2xl skeleton" />
                        </div>

                        {/* Q&A Section Skeleton */}
                        <div className="space-y-8 pt-10 border-t border-base-200">
                            <div className="flex justify-between items-center">
                                <div className="h-8 w-48 bg-base-300 skeleton rounded-full" />
                                <div className="h-8 w-32 bg-base-300 skeleton rounded-full" />
                            </div>
                            <div className="space-y-6">
                                {[1, 2].map((i) => (
                                    <div key={i} className="h-40 bg-base-100 rounded-[3rem] border border-base-200 skeleton" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loading