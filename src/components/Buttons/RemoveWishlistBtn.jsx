"use client"
import { removeWishlistFromDb } from "@/action/server/wishList"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Swal from "sweetalert2"

const RemoveWishlistBtn = ({ product, children, className }) => {
    const session = useSession()
    const router = useRouter()
    const path = usePathname()
    const handleRemoveWishlist = async (e) => {
        e.preventDefault()
        if (session.status === "unauthenticated") {
            router.push(`/login?callbackUrl=${path}`)
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await removeWishlistFromDb(product._id, product.productId)
                if (result.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    router.refresh()
                } else {
                    Swal.fire(result.message, "error")
                }
            }
        });

    }
    return (
        <button onClick={handleRemoveWishlist} className={className}>{children}</button>
    )
}

export default RemoveWishlistBtn