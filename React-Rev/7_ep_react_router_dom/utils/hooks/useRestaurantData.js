import { useEffect, useRef, useState } from "react";
import { FIRST_RESTRO_API } from "../constants";
import MOCK_SWIGGY_PAGES from "../mockResponses.json";
import fetchJson from "../fetchJson";
import removeExistingRestaurants from '../removeExistingRestaurants'
const useRestaurantData = () =>{

    const [resList, setResList] = useState([]);
    const [offset, setOffset] = useState("mock_page_1");
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetchInitialData();
    }, []);

    async function fetchInitialData() {
        try {
            const data = await fetchJson(FIRST_RESTRO_API);

            const api_rest_array = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(api_rest_array)
            if (api_rest_array) 
                setResList(api_rest_array);


        } catch (error) {

            console.error("Initial load failed, check public API link:", error);
        }
    }


    const fetchMoreData = async () => {
        if (!offset) return;

        setIsFetching(true);

        try {
            console.log(`Simulating network delay for: ${offset}...`);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const mockedResponse = MOCK_SWIGGY_PAGES[offset];

            if (mockedResponse) {
                await new Promise((resolve) => setTimeout(resolve, 600));

                const newRestaurants = mockedResponse?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                const nextOffsetToken = mockedResponse?.data?.pageOffset?.nextOffset;

                if (newRestaurants) {
                    setResList((prevData) => {

                        const uniqueNewRestaurants = removeExistingRestaurants(prevData,newRestaurants)
            
                        return [...prevData, ...uniqueNewRestaurants];
                    });

                    setOffset(nextOffsetToken);
                    console.log("Mock data successfully appended laale! Next Offset:", nextOffsetToken);
                }
            }
        } catch (error) {
            console.error("Simulation internal failure:", error);
        } finally {
            setIsFetching(false);
        }
    };

    return {
        resList,
        setResList,
        fetchMoreData,
        isFetching,
        hasMore: !!offset
    }
}

export default useRestaurantData