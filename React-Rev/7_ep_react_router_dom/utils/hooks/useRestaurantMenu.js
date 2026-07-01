import { useEffect, useState } from "react"
import { RESTAURANT_MENU_API } from "../constants"
import fetchJson from "../fetchJson"
import MOCK_MENUS from '../mockMenus.json'
const useRestaurantMenu = (resId) => {

    const [resMenu, setResMenu] = useState([])
    const restroIds = [804071,831065,999580,804724,1171351,378311]
    const availabelRestaurantMenu = new Set(restroIds)
    let resDetail
    let offers
    let menu

    function getRandomResId(){
        const randomIndex = Math.floor((Math.random()) * (restroIds.length - 1))
        return restroIds[randomIndex]
    }

    useEffect(() => {

        fetchRestaurantMenu(resId);

    },[])

    async function fetchRestaurantMenu(resId) {

        try {
            
                                          
            await new Promise((resolve)=>setTimeout(resolve,1000))
            
            const finalResId = availabelRestaurantMenu.has(Number(resId)) ? resId : getRandomResId()
            
            
            const data = MOCK_MENUS[`${finalResId}`]
            
            

            setResMenu(data)

        }
        catch (error) {
            console.log("Failed to Fetch Restaurant Data for ID :", resId, error)
        }

    }

    if(resMenu){
        resDetail = resMenu?.data?.cards[2]?.card?.card?.info;
        offers = resMenu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
        menu = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(categroy=>{
            if(categroy.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || categroy.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){

                return true
            }else{
                return false
            }
        })
       
    }


    return {
        resMenu,
        resDetail,
        offers,
        menu,
        
    }
}

export default useRestaurantMenu;