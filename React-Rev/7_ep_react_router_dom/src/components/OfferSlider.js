import useSlider from "../../utils/hooks/useSlider";
import { OFFERS_LOGO_BASE_URL } from '../../utils/constants';

const OfferSlider = ({offers}) => {
    const { sliderRef, scrollDirection, disableLeft, disableRight, handleBtnScroll, handleSlideScroll } = useSlider();

    

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="header">
                    <h2 className="title">Deals for you</h2>
                    <div className="slider-btns">
                        <button
                            className="nav-btn"
                            onClick={() => handleBtnScroll(scrollDirection.left, 300)}
                            disabled={disableLeft}
                        >
                            {/* Left Arrow SVG */}
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /></svg>
                        </button>
                        <button
                            className="nav-btn"
                            onClick={() => handleBtnScroll(scrollDirection.right, 300)}
                            disabled={disableRight}
                        >
                            {/* Right Arrow SVG */}
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>
                        </button>
                    </div>
                </div>

                <div ref={sliderRef} className="slider-viewport" onScroll={handleSlideScroll}>
                    {offers.map((offer, index) => (
                        <div key={index} className="offer-card">
                            <div className="offer-img">
                                <img src={`${OFFERS_LOGO_BASE_URL}${offer.info.offerLogo}`} alt="offer" />
                            </div>
                            <div className="offer-detail">
                                <div className="offer-header">
                                    {offer.info.header}
                                </div>
                                <div className="coupon-code">
                                    {offer.info.couponCode} {offer.info.description ? `| ${offer.info.description}` : ''}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OfferSlider;