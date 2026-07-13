import { CLOUDINARY_URL } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from '../redux/cartSlice';
import { FiPlus, FiMinus } from 'react-icons/fi'

const ItemCard = ({ itemData, isCartItem }) => {

    const cartDispatcher = useDispatch();
    const cartItems = useSelector(store => store.cart.items);
    
    // Data destructuring
    const {
        id,
        name,
        price,
        defaultPrice,
        description,
        imageId,
        isVeg
    } = itemData;

    const thisItem = cartItems.find((item) => item.id === id)
    const finalPrice = (price || defaultPrice) / 100;

    function handleAddItem(itemData) {
        cartDispatcher(addItem(itemData))
    }
    
    function handleRemoveItem(itemData) {
        cartDispatcher(removeItem(itemData))
    }

    return (
        <>
        {/* Dynamic Class: Agar isCartItem true hai, toh cart-version class lag jayegi */}
        <div className={`item-card ${isCartItem ? 'cart-version' : ''}`}>
            
            {/* Left Section: Details */}
            <div className="item-details">
                {/* Veg / Non-Veg Indicator */}
                <div className={`veg-icon ${isVeg === 1 ? 'veg' : 'non-veg'}`}>
                    <span className="circle"></span>
                </div>

                <h3 className="item-name">{name}</h3>
                <p className="item-price">₹{finalPrice}</p>

                {/* 🔥 MAGIC: Description sirf tab dikhega jab cart mein NAHI hoga */}
                {description && !isCartItem && (
                    <p className="item-desc">{description}</p>
                )}
            </div>

            {/* Right Section: Image & Add Button */}
            <div className="item-image-section">
                <div className="image-container">
                    {imageId ? (
                        <img
                            src={`${CLOUDINARY_URL}${imageId}`}
                            alt={name}
                            className="item-img"
                        />
                    ) : (
                        <div className="no-image-placeholder"></div>
                    )}
                </div>

                {/* Add Button Section */}
                <div className="add-btn-container">
                    <button
                        className={`add-btn ${!thisItem ? 'justify-center' : ''}`} 
                        onClick={() => !thisItem && handleAddItem({ id, name, price, defaultPrice, description, imageId, isVeg, quantity: 1 })}
                    >
                        {thisItem ? (
                            <>
                                <FiMinus
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleRemoveItem({ id, name, price, defaultPrice, description, imageId, isVeg, quantity: 1 });
                                    }}
                                />
                                {thisItem.quantity}
                                <FiPlus
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleAddItem({ id, name, price, defaultPrice, description, imageId, isVeg, quantity: 1 });
                                    }}
                                />
                            </>
                        ) : (
                            "ADD"
                        )}
                    </button>
                    {/* Yahan se "Customisable" ka kachra poori tarah saaf kar diya */}
                </div>
            </div>
        </div>
        </>
    );
};

export default ItemCard;