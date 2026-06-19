
const RestaurantInfo = ({ restaurantData,resName }) => {
    
    // const name = "Chinese Wok";
    // const avgRating = "4.2";
    // const totalRatingsString = "669 ratings";
    // const costForTwoMessage = "₹250 for two";
    // const cuisines = ["Chinese", "Asian"];
    // const locality = "Omaxe mall";
    // const slaString = "40-50 mins";

    const {
        city,
        name,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        locality,
        sla
    } = restaurantData;

    return (
        <div className="restaurant-info-container">
            {/* Breadcrumbs */}
            <div className="breadcrumb">
                <span>Home</span> / <span>{city}</span> / <span className="current">{resName}</span>
            </div>

            {/* Title */}
            <h1 className="restaurant-title">{resName}</h1>

            {/* Info Card */}
            <div className="info-card-wrapper">
                <div className="info-card">
                    {/* Rating & Price */}
                    <div className="rating-price-row">
                        <div className="rating-badge">
                            <svg viewBox="0 0 24 24" fill="white" width="14px" height="14px">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </div>
                        <span className="rating-text">{avgRating} ({totalRatingsString})</span>
                        <span className="dot">•</span>
                        <span className="price-text">{costForTwoMessage}</span>
                    </div>

                    {/* Cuisines */}
                    <div className="cuisines">
                        {cuisines.join(", ")}
                    </div>

                    {/* Location & Time Timeline */}
                    <div className="timeline-section">
                        <div className="timeline-graphics">
                            <div className="dot-top"></div>
                            <div className="line"></div>
                            <div className="dot-bottom"></div>
                        </div>
                        <div className="timeline-details">
                            <div className="outlet-info">
                                <span className="label">Outlet</span>
                                <span className="value">{locality} ▾</span>
                            </div>
                            <div className="time-info">
                                <span>{sla.slaString}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantInfo;