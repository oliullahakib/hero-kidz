import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Image from 'next/image';
import { FaUserEdit, FaEnvelope, FaIdBadge, FaCalendarAlt, FaStar, FaBox, FaHistory, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { getMyOrders } from '@/action/server/order';
import { getWishList } from '@/action/server/wishList';

const ProfilePage = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;
const myOrders = await getMyOrders();
const wishList = await getWishList();
    const stats = [
        { label: 'My Orders', value: myOrders?.length, icon: <FaBox className="text-secondary" />, color: 'bg-secondary/10', href:"/profile/my-orders" },
        { label: 'Reviews', value: '0', icon: <FaStar className="text-warning" />, color: 'bg-warning/10', href:"/profile/reviews" },
        { label: 'Wishlist', value: wishList?.length, icon: <FaHeart className="text-error" />, color: 'bg-error/10', href:"/profile/wishlist" },
        
    ];

    return (
        <div className="min-h-screen bg-base-100 p-4 md:p-8 pb-20">
            <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">

                {/* Profile Header Card */}
                <div className="relative px-6">
                    <div className="bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl p-8 md:p-12 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 text-center md:text-left">
                            {/* Avatar */}
                            <div className="relative group/avatar">
                                <div className="w-40 h-40 rounded-full p-1 bg-linear-to-tr from-primary to-secondary shadow-2xl">
                                    <Image
                                        src={user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJqB_VR-jFUwuUGZfnw0P2SkD2m7jlluAzQ&s"}
                                        alt={user?.name || "Profile"}
                                        width={160}
                                        height={160}
                                        className="rounded-full border-4 border-base-100 object-cover"
                                    />
                                </div>
                                <button className="absolute bottom-2 right-2 p-3 bg-base-100 rounded-2xl shadow-lg border border-base-200 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                                    <FaUserEdit />
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="flex-1 space-y-2 pb-4">
                                <h1 className="text-4xl font-black text-base-content tracking-tight">
                                    {user?.name || "Hero Kidz User"}
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <span className="flex items-center gap-2 text-base-content/60 font-medium">
                                        <FaEnvelope className="text-primary" />
                                        {user?.email}
                                    </span>
                                    <span className="badge badge-primary badge-lg font-black tracking-widest px-4 rounded-xl uppercase">
                                        {user?.role || "Citizen"}
                                    </span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pb-4">
                                <button className="btn btn-primary btn-outline rounded-2xl px-8 h-12 font-black tracking-wide hover:scale-105 transition-transform">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {stats.map((stat, index) => (
                        <Link href={stat?.href} key={index} className="bg-base-100 rounded-3xl border border-base-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4`}>
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl font-black text-base-content">{stat.value}</h4>
                            <p className="text-base-content/50 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
                        </Link>
                    ))}
                </div>

                {/* Detailed Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Account Details */}
                    <div className="md:col-span-2">
                        <div className="bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl p-8 space-y-8">
                            <h2 className="text-2xl font-black text-base-content flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Account Information
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-4 bg-base-200 rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <FaIdBadge size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-base-content/40 uppercase tracking-widest">Full Name</p>
                                            <p className="text-lg font-bold text-base-content">{user?.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-4 bg-base-200 rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <FaEnvelope size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-base-content/40 uppercase tracking-widest">Email Address</p>
                                            <p className="text-lg font-bold text-base-content">{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-4 bg-base-200 rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <FaCalendarAlt size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-base-content/40 uppercase tracking-widest">Member Since</p>
                                            <p className="text-lg font-bold text-base-content">March 2024</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-4 bg-base-200 rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <FaStar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-base-content/40 uppercase tracking-widest">Account Status</p>
                                            <p className="text-lg font-bold text-success flex items-center gap-2">
                                                Active
                                                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Settings */}
                    <div className="space-y-8">
                        <div className="bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl p-8">
                            <h2 className="text-xl font-black text-base-content mb-6">Quick Actions</h2>
                            <div className="space-y-3">
                                <button className="btn btn-base-200 btn-block rounded-2xl h-14 font-bold border-none capitalize hover:bg-primary hover:text-white transition-all">
                                    Manage Orders
                                </button>
                                <button className="btn btn-base-200 btn-block rounded-2xl h-14 font-bold border-none capitalize hover:bg-primary hover:text-white transition-all">
                                    Security Settings
                                </button>
                                <button className="btn btn-base-200 btn-block rounded-2xl h-14 font-bold border-none capitalize hover:bg-primary hover:text-white transition-all">
                                    Support Center
                                </button>
                            </div>
                        </div>

                        <div className="bg-primary/5 rounded-[2.5rem] border border-primary/20 p-8 text-center space-y-4">
                            <h3 className="text-lg font-black text-primary">Need Help?</h3>
                            <p className="text-sm text-base-content/60 font-medium">Our customer support is here 24/7 for you!</p>
                            <Link href="/contact" className="btn btn-primary btn-sm rounded-full px-6 font-black capitalize">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
