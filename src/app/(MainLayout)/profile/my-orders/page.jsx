import { getMyOrders } from "@/action/server/order"

const MyOrders = async() => {
const orders = await getMyOrders()
  return (
    <div className="bg-base-200 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-base-content mb-8">My <span className="text-primary italic">Orders</span></h1>

        {(!orders || orders.length === 0) ? (
          <div className="bg-base-100 rounded-2xl p-16 text-center shadow-xl border border-base-200 flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black mb-4">No Orders Yet</h2>
            <p className="text-base-content/60 max-w-sm mb-8">Looks like you haven't made any purchases yet. Start exploring our amazing collection!</p>
            <a href="/all-products" className="btn btn-primary rounded-full px-10 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30">
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, orderIndex) => (
              <div key={order._id || orderIndex} className="bg-base-100 rounded-3xl shadow-xl shadow-base-content/5 border border-base-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                
                {/* Order Header */}
                <div className="border-b border-base-200 bg-base-100/50 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-base-content/60 text-sm font-medium">Order ID:</p>
                      <p className="font-bold font-mono text-sm">{order._id?.toString() || `ORD-${Math.floor(Math.random() * 10000)}`}</p>
                    </div>
                    <p className="text-base-content/60 text-xs">
                      Placed on {new Date(order.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                     {/* Using a static badge for now, could be dynamic based on order.status */}
                    <div className="badge badge-primary badge-outline font-bold shadow-sm p-3">Processing</div>
                    <p className="text-lg font-black text-primary bg-primary/5 px-4 py-1.5 rounded-xl border border-primary/10">৳{order.total?.toFixed(2) || '0.00'}</p>
                  </div>
                </div>

                {/* Order Body - Split Layout */}
                <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-base-200">
                  
                  {/* Left Side - Items */}
                  <div className="flex-1 p-6">
                    <h3 className="text-sm font-bold text-base-content mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Items in this order ({order.cart?.length || 0})
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                      {order.cart?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex  gap-4 items-center bg-base-200/50 p-3 rounded-2xl border border-base-200/50 hover:border-primary/20 transition-colors">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-base-100 border border-base-200 shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm truncate text-base-content">{item.name}</h4>
                            <p className="text-xs text-base-content/60 mt-0.5">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - User Info */}
                  <div className="lg:w-80 p-6 bg-base-100/30">
                     <h3 className="text-sm font-bold text-base-content mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Delivery Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-base-200/50 p-4 rounded-2xl border border-base-200/50">
                        <p className="text-xs text-base-content/60 mb-1">Customer</p>
                        <p className="font-bold text-sm text-base-content">{order.userName}</p>
                        <p className="text-sm text-base-content/80 mt-1">{order.userEmail}</p>
                        <p className="text-sm text-base-content/80 mt-1">{order.contact}</p>
                        {order.altContact && <p className="text-xs text-base-content/60 mt-1">Alt: {order.altContact}</p>}
                      </div>

                      <div className="bg-base-200/50 p-4 rounded-2xl border border-base-200/50">
                        <p className="text-xs text-base-content/60 mb-1">Shipping Address</p>
                        <p className="text-sm text-base-content/80 whitespace-pre-line">{order.address}</p>
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-base-300">
                          <span className="text-xs font-bold text-base-content">{order.city}</span>
                          <span className="text-xs text-base-content/40">•</span>
                          <span className="text-xs font-mono text-base-content/60">{order.zipCode}</span>
                        </div>
                      </div>
                      
                      {order.notes && (
                         <div className="bg-warning/5 p-4 rounded-2xl border border-warning/10">
                            <p className="text-xs text-warning/80 font-bold mb-1">Order Note</p>
                            <p className="text-sm text-base-content/80 italic">"{order.notes}"</p>
                         </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyOrders