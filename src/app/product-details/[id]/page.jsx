import { getSingleProduct } from '@/action/server/products'
import AddToCartButton from '@/components/Buttons/AddToCartButton'
import Image from 'next/image'
import React from 'react'
import { FaStar, FaShoppingBag, FaTruck, FaShieldAlt, FaUndo, FaYoutube } from 'react-icons/fa'

const ProductDetails = async ({ params }) => {
    const { id } = await params
    const product = await getSingleProduct(id)

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 text-center px-4">
                <h1 className="text-3xl font-black text-base-content">Product not found</h1>
                <p className="text-base-content/60 max-w-md">The toy you are looking for might have been moved or is currently unavailable.</p>
                <button className="btn btn-primary rounded-full px-8">Back to Shop</button>
            </div>
        )
    }

    const { title, bangla, image, price, discount, percentage, description, qna, reviews, sold, ratings, info, youtube } = product;

    const actualDiscount = discount || percentage || 0;
    const discountedPrice = actualDiscount ? (price - (price * actualDiscount) / 100).toFixed(2) : price;

    return (
        <div className="bg-base-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Image Section */}
                    <div className="relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-base-200 shadow-2xl border-4 border-white group">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={700}
                                    height={600}
                                    priority
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {actualDiscount > 0 && (
                                    <div className="absolute top-8 left-8">
                                        <div className="bg-error text-neutral-content font-black px-5 py-2.5 rounded-2xl shadow-xl flex flex-col items-center leading-none">
                                            <span className="text-xl">{actualDiscount}%</span>
                                            <span className="text-[10px] uppercase tracking-tighter">OFF</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Short Features under image for desktop */}
                            <div className="hidden md:grid grid-cols-3 gap-4">
                                <div className="p-4 bg-base-200/50 rounded-2xl text-center space-y-2 border border-base-200">
                                    <FaStar className="mx-auto text-warning text-xl" />
                                    <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">Premium Quality</p>
                                </div>
                                <div className="p-4 bg-base-200/50 rounded-2xl text-center space-y-2 border border-base-200">
                                    <FaShieldAlt className="mx-auto text-success text-xl" />
                                    <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">Safe Materials</p>
                                </div>
                                <div className="p-4 bg-base-200/50 rounded-2xl text-center space-y-2 border border-base-200">
                                    <FaUndo className="mx-auto text-info text-xl" />
                                    <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">Easy Return</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="space-y-10">
                        {/* Header Content */}
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-3 items-center">
                                <span className="bg-primary/10 text-primary text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">Educational Toy</span>
                                <span className="bg-base-200 text-base-content/60 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">SKU: HK-{id.slice(-6).toUpperCase()}</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-black text-base-content leading-[1.1] tracking-tight">
                                    {title}
                                </h1>
                                {bangla && (
                                    <p className="text-2xl font-bold text-primary/70 font-bangla border-l-4 border-primary/20 pl-4 italic">
                                        {bangla}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-warning">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={i < Math.floor(ratings) ? "fill-current" : "opacity-30"} />
                                        ))}
                                    </div>
                                    <span className="font-black text-lg">{ratings}</span>
                                </div>
                                <div className="h-4 w-px bg-base-300" />
                                <span className="text-base-content/60 font-medium">{reviews} Reviews</span>
                                <div className="h-4 w-px bg-base-300" />
                                <span className="text-base-content/60 font-medium">{sold} Sold</span>
                            </div>
                        </div>

                        {/* Price Card */}
                        <div className="p-8 bg-linear-to-br from-base-200 to-base-300 rounded-[2.5rem] relative overflow-hidden group border border-white/50 shadow-inner">
                            <div className="relative z-10 flex items-center justify-between flex-wrap gap-6">
                                <div className="space-y-1">
                                    <p className="text-xs font-black uppercase tracking-widest text-base-content/40">Special Price</p>
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-5xl font-black text-primary tracking-tighter">৳{discountedPrice}</span>
                                        {actualDiscount > 0 && (
                                            <span className="text-2xl text-base-content/30 line-through decoration-error/30 font-bold tracking-tighter">৳{price}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="bg-success/10 text-success px-4 py-2 rounded-2xl border border-success/20 flex items-center gap-2 font-black text-sm">
                                    <span className="w-2 h-2 bg-success rounded-full animate-ping" />
                                    Available Now
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-black uppercase tracking-widest text-base-content/30">Description</h3>
                            <div className="prose prose-lg max-w-none text-base-content/70 leading-relaxed whitespace-pre-line bg-base-100 p-8 rounded-[2.5rem] border border-base-200 shadow-sm">
                                {description}
                            </div>
                        </div>

                        {/* Info List */}
                        {info && info.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-xl font-black uppercase tracking-widest text-base-content/30">Key Features</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {info.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-5 bg-base-200/50 rounded-2xl border border-white hover:border-primary/20 transition-all group">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                                <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-white" />
                                            </div>
                                            <span className="font-bold text-sm text-base-content/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 sticky bottom-4 z-40 md:static">
                            {/* quantity secetion  */}
                            {/* <div className="flex items-center bg-base-200 rounded-2xl px-4 py-2 border-2 border-base-300 shadow-lg">
                                <button className="btn btn-ghost btn-circle btn-sm font-black text-xl hover:bg-base-300">-</button>
                                <span className="px-8 font-black text-2xl w-20 text-center">1</span>
                                <button className="btn btn-ghost btn-circle btn-sm font-black text-xl hover:bg-base-300">+</button>
                            </div> */}

                            <AddToCartButton product={product} className="btn btn-primary rounded-2xl flex-1 h-16 text-xl font-black shadow-2xl shadow-primary/40 gap-4 group">
                                <FaShoppingBag className="transition-transform group-hover:scale-125" />
                                Add to Cart
                            </AddToCartButton>
                        </div>

                        {/* Q&A Section */}
                        {qna && qna.length > 0 && (
                            <div className="space-y-8 pt-10 border-t border-base-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-black tracking-tight leading-none">Questions & Answers</h3>
                                    <button className="btn btn-ghost btn-sm rounded-full font-bold">Ask a Question</button>
                                </div>
                                <div className="space-y-6">
                                    {qna.map((item, idx) => (
                                        <div key={idx} className="p-8 bg-base-100 rounded-[3rem] border border-base-200 shadow-sm space-y-6 hover:shadow-md transition-shadow">
                                            <div className="flex gap-5">
                                                <div className="w-12 h-12 rounded-2xl bg-primary text-white font-black flex items-center justify-center shrink-0 text-xl shadow-lg shadow-primary/20">Q</div>
                                                <p className="font-black text-lg pt-2 leading-tight">{item.question}</p>
                                            </div>
                                            <div className="flex gap-5 ml-4 border-l-4 border-base-200 pl-8">
                                                <div className="w-10 h-10 rounded-2xl bg-base-200 text-base-content/40 font-black flex items-center justify-center shrink-0">A</div>
                                                <p className="text-base-content/60 font-medium pt-2 italic leading-relaxed">{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Video Section */}
                        {youtube && (
                            <div className="pt-10">
                                <h3 className="text-xl font-black uppercase tracking-widest text-base-content/30 mb-6">Product Preview</h3>
                                <a
                                    href={youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group relative aspect-video rounded-[2.5rem] overflow-hidden bg-base-300 shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/0 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                                            <div className="w-0 h-0 border-t-10 border-t-transparent border-l-18 border-l-white border-b-10 border-b-transparent ml-2" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <p className="text-sm font-black uppercase tracking-widest opacity-60">Youtube Video</p>
                                        <p className="text-2xl font-black tracking-tight">{title} Demo</p>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails