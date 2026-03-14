import { getWishList } from "@/action/server/wishList"
import AddToCartButton from "@/components/Buttons/AddToCartButton"
import RemoveWishlistBtn from "@/components/Buttons/RemoveWishlistBtn"
import Image from "next/image"
import { FaCartPlus, FaTrash } from "react-icons/fa"

const WishlistPage = async() => {
    const wishList = await getWishList()
  return (
    <div className="bg-base-200 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-base-content mb-8">My <span className="text-primary italic">Wishlist</span></h1>

        {(!wishList || wishList.length === 0) ? (
          <div className="bg-base-100 rounded-3xl p-16 text-center shadow-xl border border-base-200 flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
               </svg>
            </div>
            <h2 className="text-3xl font-black mb-4">Your Wishlist is Empty</h2>
            <p className="text-base-content/60 max-w-sm mb-8">Save items you love here and view them later. Start exploring to find your favorites!</p>
            <a href="/all-products" className="btn btn-primary rounded-full px-10 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30">
              Discover Products
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishList.map((product) => {
              const discountedPrice = product.discount ? (product.price - (product.price * product.discount) / 100).toFixed(2) : product.price;

              return (
                <div key={product._id} className="bg-base-100 rounded-2xl shadow-sm border border-base-200 overflow-hidden group">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-base-200 flex items-center justify-center p-4">
                    {product.discount > 0 && (
                        <div className="absolute top-3 left-3 z-10">
                            <span className="badge badge-primary font-bold shadow-md shadow-primary/30">
                                -{product.discount}%
                            </span>
                        </div>
                    )}
                    <div className="relative w-full h-full">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-base-content line-clamp-2 min-h-14 mb-2">
                        {product.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-warning text-sm">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.floor(product.ratings || 0) ? "currentColor" : "none"} stroke="currentColor" className="w-4 h-4 text-warning">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-xs text-base-content/50 font-medium">({product.reviews || 0})</span>
                    </div>

                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-black text-primary">৳{discountedPrice}</span>
                        {product.discount > 0 && (
                            <span className="text-sm text-base-content/40 line-through font-bold mb-1">
                                ৳{product.price}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <AddToCartButton productId={product.productId} className={'btn btn-primary rounded-full px-10 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30'} > <FaCartPlus/></AddToCartButton>
                        <RemoveWishlistBtn className="btn btn-error rounded-full px-10 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-error/30" product={{...product,_id:product._id.toString()}} >
                            <FaTrash/>
                        </RemoveWishlistBtn>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default WishlistPage