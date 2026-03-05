import data from "@/data/toys.json";
import ProductCard from "@/components/Shared/ProductCard";
import Link from "next/link";

const TopProducts = () => {
    return (
        <section className="py-16">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-base-content tracking-tight">
                    Our <span className="text-primary">Top Products</span>
                </h2>
                <p className="text-base-content/60 max-w-2xl mx-auto px-4 sm:px-0">
                    Explore our most popular and highly-rated educational toys that kids and parents love.
                </p>
                <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
                {data.slice(0, 4).map((toy, index) => (
                    <ProductCard key={index} product={toy} />
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/all-products" className="btn btn-outline btn-primary rounded-full px-10">
                    View All Products
                </Link>
            </div>
        </section>
    );
};

export default TopProducts;