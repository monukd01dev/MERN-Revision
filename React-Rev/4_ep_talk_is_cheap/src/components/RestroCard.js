import '../styles/restroCard.css'
const RestroCard = function () {

    return (
        <div className="restro-card">
            <figure>
                <img src="./restro-img.png" alt="restro img" />
                <figcaption>50% OFF UPTO ₹100</figcaption>
            </figure>
            <div className="restro-details">
                <h3 className="restro-name">Chinese Wok</h3>
                <div className="rating-time">
                    <span className="star-icon">★</span>
                    <span className="rating-text">4.2 • 25-30 mins</span>
                </div>
                <div className="cuisine">Chinese, Asian, Noodles</div>
                <div className="location">Burari, New Delhi</div>
            </div>
        </div>
    )
};

export default RestroCard;