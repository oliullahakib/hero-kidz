import React from 'react';

const ProfileLoading = () => {
    return (
        <div className="min-h-screen bg-base-100 p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
                {/* Hero Section Skeleton */}
                <div className="relative h-64 md:h-80 bg-base-200 rounded-[2.5rem] overflow-hidden">
                    <div className="absolute inset-0 bg-base-300/50"></div>
                </div>

                {/* Profile Info Skeleton */}
                <div className="relative -mt-24 px-6">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
                        <div className="w-40 h-40 rounded-full bg-base-300 border-8 border-base-100 shadow-xl"></div>
                        <div className="flex-1 space-y-4 pb-4">
                            <div className="h-10 bg-base-300 rounded-2xl w-64 mx-auto md:mx-0"></div>
                            <div className="h-6 bg-base-300 rounded-xl w-48 mx-auto md:mx-0"></div>
                        </div>
                        <div className="pb-4">
                            <div className="h-12 bg-base-300 rounded-2xl w-32"></div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid Skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-base-200 rounded-3xl p-6 space-y-3">
                            <div className="h-8 bg-base-300 rounded-xl w-16"></div>
                            <div className="h-4 bg-base-300 rounded-lg w-24"></div>
                        </div>
                    ))}
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-base-200 rounded-2xl p-8 h-96"></div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-base-200 rounded-2xl p-8 h-64"></div>
                        <div className="bg-base-200 rounded-2xl p-8 h-64"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLoading;
