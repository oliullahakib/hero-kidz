
import CartProvider from './CartProvider'
import AuthProviders from './AuthProviders'
import WishListProvider from './WishListProvider'

const Provider = ({ children }) => {
    return (
        <div>
            <AuthProviders>
                <CartProvider>
                    <WishListProvider>
                        {children}
                    </WishListProvider>
                </CartProvider>
            </AuthProviders>
        </div>
    )
}

export default Provider