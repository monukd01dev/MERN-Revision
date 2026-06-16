import '../styles/restroCard.css'
import { CLOUDINARY_URL } from '../../utils/constants';

const RestroCard = function (props) {
    const{
        name,
        cloudinaryImageId,
        aggregatedDiscountInfoV3,
        avgRating,
        sla,
        cuisines,
        areaName
    }=props.restroData;
    const offerHeader = aggregatedDiscountInfoV3?.header || "";
    const offerSubHeader = aggregatedDiscountInfoV3?.subHeader || "";
    return (
        <div className="restro-card">
            <figure>
                <img src={`${CLOUDINARY_URL}${cloudinaryImageId}`} alt="restro img" />
                <figcaption>{offerHeader+" "+offerSubHeader}</figcaption>
            </figure>
            <div className="restro-details">
                <h3 className="restro-name">{name}</h3>
                <div className="rating-time">
                    <span className="star-icon">★</span>
                    <span className="rating-text">{`${avgRating} • ${sla?.slaString}`}</span>
                </div>
                <div className="cuisine">{cuisines.join(", ")}</div>
                <div className="location">{areaName}</div>
            </div>
        </div>
    )
};

export default RestroCard;