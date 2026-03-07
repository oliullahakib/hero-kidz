"use client"
import React from 'react';
import Link from 'next/link';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import Logo from '@/components/Shared/Logo';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();
const params = useSearchParams();
console.log(
    params.get("callbackUrl" || " ")
)
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: params.get("callbackUrl" || " "),
            });

            if (result.ok) {
                form.reset();
            } 
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
                confirmButtonColor: "#d33"
            });
        }
    };

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-md w-full relative z-10 transition-all duration-500">
                <div className="bg-base-100 rounded-[2.5rem] border border-base-200 shadow-2xl p-8 md:p-12 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center mb-6">
                            <Logo />
                        </div>
                        <h1 className="text-3xl font-black text-base-content tracking-tight">Welcome Back!</h1>
                        <p className="text-base-content/60">Ready to find more hero tools?</p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-1 gap-4">
                        <button type="button" className="btn btn-outline border-base-300 rounded-2xl gap-3 hover:bg-base-200 hover:text-base-content capitalize">
                            <FaGoogle className="text-error" />
                            Google
                        </button>
                    </div>

                    <div className="divider text-base-content/30 text-xs uppercase font-bold tracking-widest">or email</div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    name="email"
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
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-full h-14 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 mt-4 capitalize">
                            Login Now
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-base-content/60 font-medium">
                        New hero joining? {' '}
                        <Link href="/signup" className="text-primary font-black hover:underline underline-offset-4">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
