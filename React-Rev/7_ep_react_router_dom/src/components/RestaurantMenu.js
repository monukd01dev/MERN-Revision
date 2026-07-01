import { useState } from "react";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";

const RestaurantMenu = ({ menu }) => {
    const [showCategoryId, setShowCategoryId] = useState("-1");
    const [vegMode, setVegMode] = useState('ALL');
    const [bestsellerOnly, setBestsellerOnly] = useState(false);

    const filterStates = {
        all: "ALL",
        veg: 'VEG',
        nonVeg: "NON-VEG",
    };

    function handleFilterClick(clickedFilter) {
        // Agar same filter pe dobara click kiya, toh reset kar do (ALL)
        if (vegMode === clickedFilter) {
            setVegMode(filterStates.all);
        } else {
            // Warna naya filter set kar do
            setVegMode(clickedFilter);
        }
    }

    // 🌟 MASTERSTROKE: Original Menu ka ek naya Deep Copy bana lo.
    // Isse original prop kabhi touch nahi hoga!
    const menuCopy = JSON.parse(JSON.stringify(menu));

    // Ab hum is naye copy par apna filter chalayenge
    const filteredMenu = menuCopy.map((category) => {
        const type = category?.card?.card["@type"];

        // 1. NORMAL CATEGORY FILTERING
        if (type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
            category.card.card.itemCards = category.card.card.itemCards.filter((dish) => {
                const info = dish.card.info;
                let passesVegCheck = true;
                if (vegMode === 'VEG') passesVegCheck = (info.isVeg === 1);
                if (vegMode === 'NON-VEG') passesVegCheck = (info.isVeg !== 1);

                let passesBestsellerCheck = true;
                if (bestsellerOnly) passesBestsellerCheck = (info.isBestseller === true);

                return passesVegCheck && passesBestsellerCheck;
            });
        }

        // 2. NESTED CATEGORY FILTERING
        if (type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
            // Har sub-category ke andar jao aur items filter karo
            category.card.card.categories.forEach(nestedCategory => {
                nestedCategory.itemCards = nestedCategory.itemCards.filter((dish) => {
                    const info = dish.card.info;
                    let passesVegCheck = true;
                    if (vegMode === 'VEG') passesVegCheck = (info.isVeg === 1);
                    if (vegMode === 'NON-VEG') passesVegCheck = (info.isVeg !== 1);

                    let passesBestsellerCheck = true;
                    if (bestsellerOnly) passesBestsellerCheck = (info.isBestseller === true);

                    return passesVegCheck && passesBestsellerCheck;
                });
            });

            // Jo sub-categories khaali ho gayi hain, unko uda do
            category.card.card.categories = category.card.card.categories.filter(
                (nestedCategory) => nestedCategory.itemCards.length > 0
            );
        }

        return category; // Map ko hamesha kuch return karna zaroori hai!

    }).filter(category => {
        // 3. FINAL CLEANUP: Jo Main Categories poori khali ho chuki hain, unko array se nikal do
        const type = category?.card?.card["@type"];

        if (type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
            return category.card.card.itemCards.length > 0;
        }
        if (type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
            return category.card.card.categories.length > 0;
        }
        
    });


    return (
        <div className="restaurant-menu-wrapper">
            <div className="menu-title-separator">
                <span className="separator-line"></span>
                <span className="separator-text">M E N U</span>
                <span className="separator-line"></span>
            </div>

            <div className="menu-filters"><button
                className={`filter-btn toggle-btn veg ${vegMode === filterStates.veg ? 'active' : ''}`}
                onClick={() => handleFilterClick(filterStates.veg)}
            >
                <div className="veg-icon veg"><span className="circle"></span></div>
            </button>

                <button
                    className={`filter-btn toggle-btn non-veg ${vegMode === filterStates.nonVeg ? 'active' : ''}`}
                    onClick={() => handleFilterClick(filterStates.nonVeg)}
                >
                    <div className="veg-icon non-veg"><span className="circle"></span></div>
                </button>

                <button
                    className={`filter-btn bestseller-btn ${bestsellerOnly ? 'active' : ''}`}
                    onClick={() => setBestsellerOnly(!bestsellerOnly)}
                >
                    Bestseller
                </button>
                
            </div>

            <hr className="filter-divider" />

            <div className="menu-categories-container">

                {filteredMenu.length === 0 ? (
                    // 🔥 Premium Empty State UI 🔥
                    <div className="empty-menu-state">
                        <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="#F4F4F5"/>
                            <path d="M100 140C122.091 140 140 122.091 140 100C140 77.9086 122.091 60 100 60C77.9086 60 60 77.9086 60 100C60 122.091 77.9086 140 100 140Z" stroke="#D4D5D9" strokeWidth="4"/>
                            <path d="M85 90C85 92.7614 82.7614 95 80 95C77.2386 95 75 92.7614 75 90C75 87.2386 77.2386 85 80 85C82.7614 85 85 87.2386 85 90Z" fill="#A9ABB2"/>
                            <path d="M125 90C125 92.7614 122.761 95 120 95C117.239 95 115 92.7614 115 90C115 87.2386 117.239 85 120 85C122.761 85 125 87.2386 125 90Z" fill="#A9ABB2"/>
                            <path d="M115 115C115 115 108 110 100 110C92 110 85 115 85 115" stroke="#A9ABB2" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M135 135L165 165" stroke="#D4D5D9" strokeWidth="12" strokeLinecap="round"/>
                        </svg>
                        <h3>No matches found</h3>
                        <p>We couldn't find any items matching your selected filters. Try changing them!</p>
                    </div>
                ) : (
                    filteredMenu.map((category) => {
                        const type = category?.card?.card["@type"];

                        if (type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                            return (
                                <ItemCategory
                                    key={category?.card?.card?.title}
                                    setShowCategoryId={setShowCategoryId}
                                    showCategoryId={showCategoryId}
                                    categoryData={category?.card?.card}
                                    nested={false}
                                />
                            );
                        }

                        if (type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
                            return (
                                <NestedItemCategory
                                    key={category?.card?.card?.title}
                                    nestedCategoryData={category?.card?.card}
                                />
                            );
                        }

                        return null;
                    })
                )}
                
            </div>
        </div>
    );
};

export default RestaurantMenu;