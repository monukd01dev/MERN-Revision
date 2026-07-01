import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";
import RestaurantMenuShimmer from "../components/RestaurantMenuShimmer";
import RestaurantInfo from "../components/RestaurantInfo";
import OfferSlider from "../components/OfferSlider";
import ItemCard from "../components/ItemCard";
import RestaurantMenu from "../components/RestaurantMenu";
const Restaurant = function(){

    const {resName,resId} = useParams()

    const {resMenu,resDetail,offers,menu}= useRestaurantMenu(resId)


    return (resMenu.length === 0) ? <RestaurantMenuShimmer/> : (
    <div className="restaurants-menu-wrapper">
        <RestaurantInfo restaurantData={resDetail} resName ={resName}/>
        <OfferSlider offers={offers}/>
        <RestaurantMenu menu={menu}/>
        {/* {
            menu[1].card.card.itemCards.map(item => <ItemCard key={item.card.info.id} itemData={item.card.info}/>)
        } */}
    </div>
    )
} 

export default Restaurant;