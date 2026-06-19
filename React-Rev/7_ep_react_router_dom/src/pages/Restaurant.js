import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";
import RestaurantMenuShimmer from "../components/RestaurantMenuShimmer";
import RestaurantInfo from "../components/RestaurantInfo";
import OfferSlider from "../components/OfferSlider";
const Restaurant = function(){

    const {resName,resId} = useParams()

    const {resMenu,resDetail,offers,menu}= useRestaurantMenu(resId)


    return (resMenu.length === 0) ? <RestaurantMenuShimmer/> : (
    <div className="restaurants-menu-wrapper">
        <RestaurantInfo restaurantData={resDetail} resName ={resName}/>
        <OfferSlider offers={offers}/>
    </div>
    )
} 

export default Restaurant;