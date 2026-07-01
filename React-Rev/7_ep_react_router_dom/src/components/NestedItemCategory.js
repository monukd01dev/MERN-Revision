import { useState } from "react";
import ItemCategory from "./ItemCategory";

const NestedItemCategory = ({ nestedCategoryData }) => {
    const [showCategoryId, setShowCategoryId] = useState("");
    const { title, categories } = nestedCategoryData;

    return (
        <div className="nested-item-category-wrapper">
            
            {/* Main Parent Header */}
            <div className="nested-main-header">
                <h2 className="nested-main-title">{title}</h2>
            </div>
            
            {/* Child Categories */}
            <div className="nested-categories-list">
                {categories.map((category, index) => {
                    return (
                        <ItemCategory
                            key={category?.title || index}
                            setShowCategoryId={setShowCategoryId}
                            showCategoryId={showCategoryId}
                            categoryData={category}
                            nested={true}
                        />
                    );
                })}
            </div>

            {/* Divider after entire nested block */}
            <div className="category-divider"></div>

        </div>
    );
};

export default NestedItemCategory;