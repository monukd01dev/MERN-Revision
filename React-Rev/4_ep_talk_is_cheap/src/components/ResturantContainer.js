import '../styles/ResturantContainer.css'
import RestroCard from './RestroCard';
const ResturantContainer = function(){
    const kitneRestros = [1,2,3,4]
    return (
        <div className="resturant-wrapper">
            <div id="header">
                <div className="available-restros">
                    <p>{"20 Resturants"}</p>
                </div>
                <div className="filters">
                    <ul>
                        <li>
                            <button>High Rating</button>
                        </li>
                        <li>
                            <button>Fast Delivery</button>
                        </li>
                        <li>
                            <button>High Discount</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="resturant-cards">
                {
                    kitneRestros.map(key => <RestroCard key={key+"s"}/>)
                }
            </div>
        </div>
    )
};

export default ResturantContainer;