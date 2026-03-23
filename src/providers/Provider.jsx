
import CartProvider from './CartProvider'
import AuthProviders from './AuthProviders'

const Provider = ({ children }) => {
    return (
        <div>
            <AuthProviders>
                <CartProvider>
                    {children}
                </CartProvider>
            </AuthProviders>
        </div>
    )
}

export default Provider