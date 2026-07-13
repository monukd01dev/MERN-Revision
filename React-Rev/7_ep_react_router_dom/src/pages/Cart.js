import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
    // Subscribing to the cart
    const cartItems = useSelector(store => store.cart.items);
    const cartDispatcher = useDispatch();

    function handleClearCart() {
        cartDispatcher(clearCart());
    }

    // 🧮 DYNAMIC BILL CALCULATION LOGIC (Updated for your structure)
    let itemTotal = 0;
    cartItems.forEach(item => {
        // Redux store mein ab data direct item.price / item.defaultPrice mein hai
        const itemPrice = item.price || item.defaultPrice || 0;
        
        // Price ko 100 se divide kiya (paise to rupees) aur fir quantity se multiply kar diya
        itemTotal += (itemPrice / 100) * (item.quantity || 1);
    });

    // Bill Breakups
    const deliveryFee = itemTotal > 0 ? 60 : 0;
    const discount = itemTotal > 500 ? 125 : itemTotal > 0 ? 25 : 0; // Agar cart empty hai to 0 discount
    const platformFee = itemTotal > 0 ? 6 : 0;
    const gstAndCharges = +(itemTotal * 0.05).toFixed(2); // 5% GST
    
    // Total calculation (Math.max taaki kabhi negative mein na jaaye bill)
    const totalToPay = Math.max(0, (itemTotal + deliveryFee + platformFee + gstAndCharges - discount)).toFixed(2);

    return (
        <div className="cart-wrapper">
            {cartItems.length === 0 ? (
                // 🛒 EMPTY CART STATE WITH ANIMATION
                <div className="empty-cart-container">
                    <div className="animated-cart-icon">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#a9abb2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </div>
                    <h2>Your cart is empty</h2>
                    <p>You can go to the home page to view more restaurants</p>
                </div>
            ) : (
                // 🍔 FILLED CART STATE
                <div className="cart-content-wrapper">
                    
                    {/* LEFT COLUMN: CART ITEMS */}
                    <div className="cart-items-displayer">
                        <div className="top-bar">
                            <h3>Cart Items ({cartItems.length})</h3>
                            <button className="clear-btn" onClick={handleClearCart}>
                                Clear Cart
                            </button>
                        </div>
                        <div className="itemCards-container">
                            {cartItems.map((item, index) => (
                                // Key ko update karke direct item.id kar diya hai
                                <div className="cart-item-wrapper" style={{ animationDelay: `${index * 0.1}s` }} key={item.id}>
                                    <ItemCard itemData={item} isCartItem={true} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: BILL SUMMARY */}
                    <div className="cart-summary-container">
                        <div className="order-summary-card">
                            <h3 className="summary-title">Bill Details</h3>
                            
                            <div className="summary-row">
                                <span>Item Total</span>
                                <span>₹{itemTotal.toFixed(2)}</span>
                            </div>
                            
                            <div className="summary-row">
                                <span>Delivery Fee | 5.9 kms</span>
                                <span>₹{deliveryFee}</span>
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-row discount-row">
                                <span>Extra Discount for you</span>
                                <span>- ₹{discount}</span>
                            </div>

                            <div className="summary-row">
                                <span>Platform Fee</span>
                                <span><strike style={{color: '#a9abb2', marginRight: '6px'}}>₹7.00</strike> ₹{platformFee}</span>
                            </div>

                            <div className="summary-row">
                                <span>GST and Restaurant Charges</span>
                                <span>₹{gstAndCharges}</span>
                            </div>

                            <div className="summary-divider thick"></div>

                            <div className="summary-row total-pay-row">
                                <span>TO PAY</span>
                                <span>₹{totalToPay}</span>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Cart;