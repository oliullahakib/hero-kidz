import React from 'react';
import Link from 'next/link';
import { FaGoogle,FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Logo from '@/components/Shared/Logo';

const SignUpPage = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-md w-full relative z-10 transition-all duration-500">
                <div className="bg-base-100 rounded-2xl border border-base-200 shadow-2xl p-8 md:p-12 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center mb-6">
                            <Logo />
                        </div>
                        <h1 className="text-3xl font-black text-base-content tracking-tight">Join the Heroes!</h1>
                        <p className="text-base-content/60">Start your child's learning journey today.</p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-1 gap-4">
                        <button className="btn btn-outline border-base-300 rounded-2xl gap-3 hover:bg-base-200 hover:text-base-content capitalize">
                            <FaGoogle className="text-error" />
                            Google
                        </button>
                    </div>

                    <div className="divider text-base-content/30 text-xs uppercase font-bold tracking-widest">or email</div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaUser />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaLock />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <button className="btn btn-primary w-full h-14 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 mt-4 capitalize">
                            Create Account
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-base-content/60 font-medium">
                        Already a hero? {' '}
                        <Link href="/login" className="text-primary font-black hover:underline underline-offset-4">
                            Login Instead
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
