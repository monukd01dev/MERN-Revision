

import RestroCard, { promotedRestroCard } from './RestroCard';
import ShimmerCard from './ShimmerCard';
import { Link } from 'react-router';
const ResturantContainer = function (props) {
    const { resList, observerTarget, isFetching, activeFilter, setActiveFilter, filterState } = props;

    const PromotedCard = promotedRestroCard(RestroCard)
    return (
        <div className="resturant-wrapper">
            <div id="header">
                <div className="available-restros">
                    <p>{`${resList.length} Restaurants`}</p>
                </div>
                <div className="filters">
                    <ul>
                        <li><button
                            className={activeFilter === filterState.all ? "active-btn" : ''}
                            onClick={() => {
                                if (activeFilter === filterState.all) return
                                setActiveFilter(filterState.all)
                            }}
                        >
                            All
                        </button>
                        </li>
                        <li><button
                            className={activeFilter === filterState.high_rating ? "active-btn" : ''}
                            onClick={() => {
                                if (activeFilter === filterState.high_rating) return
                                setActiveFilter(filterState.high_rating)
                            }}
                        >
                            High Rating
                        </button>
                        </li>
                        <li><button
                            className={activeFilter === filterState.fast_delivery ? "active-btn" : ''}
                            onClick={() => {
                                if (activeFilter === filterState.fast_delivery) return
                                setActiveFilter(filterState.fast_delivery)
                            }}
                        >Fast Delivery
                        </button>
                        </li>
                        {/* <li><button
                            className={activeFilter === filterState.high_discount ? "active-btn" : '' }
                            onClick={()=> {
                                if(activeFilter === filterState.high_discount) return
                                setActiveFilter(filterState.high_discount)
                            }}
                            >High Discount
                            </button>
                        </li> */}
                        {/* {(activeFilter !== filterState.none) ? 
                        (<li><button
                            className={activeFilter === filterState.none ? "active-btn" : '' }
                            onClick={()=> {
                                if(activeFilter === filterState.none) return
                                setActiveFilter(filterState.none)
                            }}
                            >Clear Filter
                            </button>
                        </li>) : ''
                        } */}
                    </ul>
                </div>
            </div>

            {/* 🍱 MAIN GRID CONTAINER */}
            <div className="resturant-cards">
                {resList.length === 0 ? (
                    Array(8).fill("").map((_, index) => <ShimmerCard key={index} />)
                ) : (
                    <>
                        {/* 1. Real Cards */}
                        {resList.map(e => {
                            return <Link key={e.info.id} to={`/restaurants/${e?.info?.name}/${e?.info?.id}`}>{
                                (e?.info?.promoted) ? <PromotedCard restroData={e?.info} /> : <RestroCard restroData={e.info} />}
                                </Link>
                        })}

                        {isFetching && (
                            Array(4).fill("").map((_, index) => <ShimmerCard key={`shimmer-${index}`} />)
                        )}
                    </>
                )}
            </div>
            <div ref={observerTarget} style={{ width: '100%', height: '20px', background: 'transparent' }}></div>
        </div>
    )
};

export default ResturantContainer;