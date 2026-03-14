import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../Buttons/AddToCartButton";
import WishListBtn from "./WishListBtn";
import { getWishList } from "@/action/server/wishList";


const ProductCard = async({ product }) => {
    const { title, image, price, ratings, reviews, discount } = product;
    const wishList = await getWishList() 
    const wishListIds = wishList.map((item) => ({...item,_id: item._id.toString()})); 
      
    // Calculate discounted price if applicable
    const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(2) : price;

    return (
        <Link href={`product-details/${product._id}`}><div className="group relative bg-base-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-200/50 hover:-translate-y-2">
            {/* Discount Badge */}
            {discount > 0 && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-error text-neutral-content text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        -{discount}% OFF
                    </span>
                </div>
            )}
            <WishListBtn product={product} initialWishList={wishListIds} />

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-base-200">
                <Image
                    src={image}
                    alt={title}
                    loading="eager"
                    width={400}
                    height={400}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-base-content line-clamp-1 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="rating rating-xs">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    name={`rating-${title}`}
                                    className={`mask mask-star-2 ${star <= Math.round(ratings) ? "bg-warning" : "bg-base-300"}`}
                                    readOnly
                                    checked={star === Math.round(ratings)}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-base-content/60">({reviews})</span>
                    </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                        {discount > 0 && (
                            <span className="text-sm text-base-content/50 line-through">
                                ৳{price}
                            </span>
                        )}
                        <span className="text-xl font-extrabold text-primary">
                            ৳{discountedPrice}
                        </span>
                    </div>

                    <AddToCartButton product={product} className="btn btn-primary btn-sm rounded-full px-5 shadow-md hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
                        Add
                    </AddToCartButton>
                </div>
            </div>
        </div></Link>
    );
};

export default ProductCard;
