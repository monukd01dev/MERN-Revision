import ItemCard from "./ItemCard";

const ItemCategory = ({ categoryData, showCategoryId, setShowCategoryId, nested }) => {
    const { title, itemCards, categoryId } = categoryData;
    const isOpen = showCategoryId === categoryId;

    const handleCollapse = () => {
        isOpen ? setShowCategoryId('') : setShowCategoryId(categoryId);
    };

    return (
        <div className={`item-category-container ${nested ? 'is-nested' : ''}`}>
            
            {/* Header Section */}
            <div className="category-header" onClick={handleCollapse}>
                <span className="category-title">
                    {title} ({itemCards.length})
                </span>

                <span className={`category-arrow ${isOpen ? "rotate" : ""}`}>
                    {/* Arrow ka color bhi deep black kar diya hai */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(2, 6, 12, 0.92)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </div>

            {/* 🔥 Animated Thin Line (Shrinks on Open) 🔥 */}
            {nested && <div className={`nested-thin-line ${isOpen ? 'active' : ''}`}></div>}

            {/* Body Section */}
            {isOpen && (
                <div className="category-body">
                    {itemCards?.map(item => (
                        <ItemCard key={item.card.info.id} itemData={item.card.info} />
                    ))}
                </div>
            )}

            {/* Mota Divider sirf Main categories mein aayega */}
            {!nested && <div className="category-divider"></div>}
            
        </div>
    );
};

export default ItemCategory;