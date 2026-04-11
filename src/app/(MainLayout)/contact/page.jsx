import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            {/* Header Section */}
            <section className=" bg-linear-to-b from-primary/5 to-transparent">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black text-base-content tracking-tight pt-5">
                        Get in <span className="text-primary italic">Touch</span>
                    </h1>
                    <p className="text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed">
                        Have a question or just want to say hi? We'd love to hear from you. Our team is here to help you find the perfect educational toys for your little heroes.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="p-8 bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl shadow-base-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <FaPhoneAlt className="text-primary text-xl" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Phone</h3>
                            <p className="text-base-content/60">+880 123 456 7890</p>
                            <p className="text-base-content/40 text-sm mt-1">Sun-Thu, 9am - 6pm</p>
                        </div>

                        <div className="p-8 bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl shadow-base-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                                <FaEnvelope className="text-secondary text-xl" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Email</h3>
                            <p className="text-base-content/60">hello@herokidz.com</p>
                            <p className="text-base-content/40 text-sm mt-1">We'll respond within 24 hours</p>
                        </div>

                        <div className="p-8 bg-base-100 rounded-[2.5rem] border border-base-200 shadow-xl shadow-base-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
                                <FaMapMarkerAlt className="text-success text-xl" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Office</h3>
                            <p className="text-base-content/60">123 Learning Lane, Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-base-100 p-8 md:p-12 rounded-2xl border border-base-200 shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Send us a Message</h2>
                                    <p className="text-base-content/60">Complete the form below and we'll get back to you shortly.</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text font-bold">Your Name</span>
                                            </label>
                                            <input type="text" placeholder="John Doe" className="input input-bordered rounded-2xl h-14 bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text font-bold">Email Address</span>
                                            </label>
                                            <input type="email" placeholder="john@example.com" className="input input-bordered rounded-2xl h-14 bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" />
                                        </div>
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold">Subject</span>
                                        </label>
                                        <input type="text" placeholder="Help with an order" className="input input-bordered rounded-2xl h-14 bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all w-full mt-2" />
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold">Message</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered rounded-2xl h-48 bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all w-full mt-2" placeholder="How can we help you?"></textarea>
                                    </div>

                                    <button className="btn btn-primary rounded-full w-full md:w-auto px-12 h-16 text-lg font-black shadow-xl shadow-primary/20 gap-3 group">
                                        <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
