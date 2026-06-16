

const ShimmerCard = function () {
    return (
        <div className="shimmer-card">
            {/* 🎬 Image Wrapper Shimmer */}
            <div className="shimmer-figure"></div>
            
            {/* 📝 Text Details Shimmer */}
            <div className="shimmer-details">
                {/* Title line */}
                <div className="shimmer-line shimmer-title"></div>
                
                {/* Rating & Time line */}
                <div className="shimmer-line shimmer-meta"></div>
                
                {/* Cuisine line */}
                <div className="shimmer-line shimmer-cuisine"></div>
                
                {/* Location line */}
                <div className="shimmer-line shimmer-location"></div>
            </div>
        </div>
    );
};

export default ShimmerCard;