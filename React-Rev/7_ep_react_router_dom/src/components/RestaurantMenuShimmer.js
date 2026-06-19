
const RestaurantMenuShimmer = () => {
    return (
        <div className="menu-shimmer-wrapper">
            
            {/* 1. Breadcrumb & Title */}
            <div className="shimmer-breadcrumb animate-shimmer"></div>
            <div className="shimmer-title animate-shimmer"></div>

            {/* 2. Restaurant Info Card */}
            <div className="shimmer-info-card">
                <div className="shimmer-line short animate-shimmer"></div>
                <div className="shimmer-line medium animate-shimmer"></div>
                <div className="shimmer-line long animate-shimmer"></div>
            </div>

            {/* Deals Heading */}
            <div className="shimmer-subtitle animate-shimmer"></div>

            {/* 3. Offers Slider Section */}
            <div className="shimmer-offers-slider">
                <div className="shimmer-offer-card animate-shimmer"></div>
                <div className="shimmer-offer-card animate-shimmer"></div>
                <div className="shimmer-offer-card animate-shimmer hide-mobile"></div>
            </div>

            {/* Menu Divider */}
            <div className="shimmer-menu-divider animate-shimmer"></div>

            {/* 4. Menu Search & Filters */}
            <div className="shimmer-search-bar animate-shimmer"></div>
            
            <div className="shimmer-filters">
                <div className="shimmer-filter-pill animate-shimmer"></div>
                <div className="shimmer-filter-pill animate-shimmer"></div>
                <div className="shimmer-filter-pill animate-shimmer"></div>
            </div>

            {/* 5. Menu Items (List) - Added so the page doesn't look empty */}
            <div className="shimmer-menu-list">
                {[1, 2, 3, 4].map((item, index) => (
                    <div key={index} className="shimmer-menu-item">
                        <div className="shimmer-item-details">
                            <div className="shimmer-line short animate-shimmer"></div>
                            <div className="shimmer-line long animate-shimmer"></div>
                            <div className="shimmer-line medium animate-shimmer"></div>
                        </div>
                        <div className="shimmer-item-image animate-shimmer"></div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RestaurantMenuShimmer;