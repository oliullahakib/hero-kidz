import React from 'react';
import Image from 'next/image';
import { FaHeart, FaLightbulb, FaShieldAlt, FaRocket } from 'react-icons/fa';

const AboutPage = () => {
    return (
        <div className="bg-base-100 min-h-screen py-5">
            {/* Hero Section */}
            <section className="relative overflow-hidden ">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full font-black text-sm uppercase tracking-widest mb-4">
                        Meet Hero Kidz
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-base-content tracking-tight leading-[1.1]">
                        Every Child is a <br />
                        <span className="text-primary italic">Born Hero.</span>
                    </h1>
                    <p className="text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed">
                        We believe that the right toys don't just entertain—they empower. Hero Kidz is dedicated to providing educational tools that spark curiosity, creativity, and confidence.
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="w-24 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-primary rounded-full animate-slide" />
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            </section>

            {/* Our Mission Section */}
            <section className="py-20 bg-base-200/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <Image
                                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Children playing with educational toys"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-xl uppercase tracking-widest">Nurturing Potential</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-base-content tracking-tight">
                                Our <span className="text-primary">Mission</span>
                            </h2>
                            <p className="text-lg text-base-content/70 leading-relaxed">
                                Our goal is to bridge the gap between playing and learning. We carefully curate toys that promote cognitive development, fine motor skills, and social interaction. At Hero Kidz, we provide the building blocks for the future leaders and thinkers of tomorrow.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="space-y-2">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                        <FaLightbulb className="text-primary text-xl" />
                                    </div>
                                    <h4 className="font-black text-lg">Creative Play</h4>
                                    <p className="text-sm text-base-content/50">Inspiring imagination in every child.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                                        <FaRocket className="text-secondary text-xl" />
                                    </div>
                                    <h4 className="font-black text-lg">Future Ready</h4>
                                    <p className="text-sm text-base-content/50">Building skills for a changing world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-black tracking-tight">Why Families <span className="text-primary">Trust Us</span></h2>
                        <p className="text-base-content/60">The core values that drive every decision at Hero Kidz.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl shadow-base-200/50 hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-error/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-error group-hover:text-white transition-colors duration-300">
                                <FaShieldAlt className="text-3xl" />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Safety First</h3>
                            <p className="text-base-content/60 leading-relaxed">
                                Every toy in our collection meets or exceeds rigorous international safety standards. Non-toxic, BPA-free, and child-safe.
                            </p>
                        </div>
                        <div className="p-10 bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl shadow-base-200/50 hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-info/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-info group-hover:text-white transition-colors duration-300">
                                <FaHeart className="text-3xl" />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Parent Approved</h3>
                            <p className="text-base-content/60 leading-relaxed">
                                We listen to our community. Our selection is guided by feedback from parents, teachers, and developmental experts.
                            </p>
                        </div>
                        <div className="p-10 bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl shadow-base-200/50 hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-success/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-success group-hover:text-white transition-colors duration-300">
                                <FaRocket className="text-3xl" />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Fast Delivery</h3>
                            <p className="text-base-content/60 leading-relaxed">
                                We know children's excitement won't wait. We offer reliable, fast shipping so the fun can start as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl shadow-primary/30 relative overflow-hidden">
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-primary-content tracking-tight leading-tight">
                                Ready to Find the Perfect <br />Educational Toy?
                            </h2>
                            <p className="text-primary-content/80 text-xl max-w-xl mx-auto font-medium">
                                Join thousands of happy families and start your child's learning journey today.
                            </p>
                            <div className="pt-4">
                                <button className="btn bg-white text-primary hover:bg-white hover:scale-105 border-none rounded-full px-12 h-16 text-lg font-black shadow-xl">
                                    Shop All Products
                                </button>
                            </div>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
