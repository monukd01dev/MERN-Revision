import { CLOUDINARY_URL } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from '../redux/cartSlice';
import { FiPlus, FiMinus } from 'react-icons/fi'

const ItemCard = ({ itemData }) => {

    const cartDispatcher = useDispatch();
    const cartItems = useSelector(store => store.cart.items);

    // Data destructuring taaki baar-baar itemData.info na likhna pade
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

    // Swiggy price paise mein bhejta hai, isliye / 100
    const finalPrice = (price || defaultPrice) / 100;

    function handleAddItem(itemData) {
        cartDispatcher(addItem(itemData))
    }
    function handleRemoveItem(itemData) {
        cartDispatcher(removeItem(itemData))
    }
    return (
        <div className="item-card">
            {/* Left Section: Details */}
            <div className="item-details">
                {/* Veg / Non-Veg Indicator */}
                <div className={`veg-icon ${isVeg === 1 ? 'veg' : 'non-veg'}`}>
                    <span className="circle"></span>
                </div>

                <h3 className="item-name">{name}</h3>
                <p className="item-price">₹{finalPrice}</p>

                {description && (
                    <p className="item-desc">{description}</p>
                )}
            </div>

            {/* Right Section: Image & Add Button */}
            <div className="item-image-section">
                <div className="image-container">
                    {/* Agar imageId nahi hai toh khali box mat dikhao */}
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

                {/* Add Button - Image ke upar overlap karega */}
                <div className="add-btn-container">
                    <button
                        className={`add-btn ${!thisItem ? 'justify-center' : ''}`} 
                        onClick={() => !thisItem && handleAddItem({ id, name, price, defaultPrice, description, imageId, isVeg, quantity: 1 })}
                    >
                        {thisItem ? (
                            <>
                                <FiMinus
                                    onClick={(e) => {
                                        e.stopPropagation(); // Parent button ka click trigger nahi hone dega
                                        handleRemoveItem({ id, name, price, defaultPrice, description, imageId, isVeg, quantity: 1 });
                                    }}
                                />
                                {thisItem.quantity}
                                <FiPlus
                                    onClick={(e) => {
                                        e.stopPropagation(); // Parent button ka click trigger nahi hone dega
                                        handleAddItem({ id, name, price, defaultPrice, description, imageId, isVeg, quantity: 1 });
                                    }}
                                />
                            </>
                        ) : (
                            "ADD"
                        )}
                    </button>

                    {/* Chota sa text button ke niche */}
                    <span className="customisable-text">Customisable</span>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;