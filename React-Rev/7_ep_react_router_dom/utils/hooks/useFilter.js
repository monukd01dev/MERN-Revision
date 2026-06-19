import { useMemo, useState } from "react";

const useFilter = (resList) => {

    const [searchText, setSearchText] = useState('');
    const [activeFilter, setActiveFilter] = useState("ALL")

    const filterState = {
        all: 'ALL',
        fast_delivery: 'FAST DELIVERY',
        high_rating: 'HIGH RATING'
    }

    const processedList = useMemo(() => {

        let list = resList.filter((restro) =>
            restro.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        if (activeFilter === filterState.fast_delivery) {
            list.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
        } else if (activeFilter === filterState.high_rating) {
            list.sort((a, b) => b.info.avgRating - a.info.avgRating);
        }

        
        return list
    },
        [resList, activeFilter, searchText]
    )

    return {
        searchText,
        setSearchText,
        activeFilter,
        setActiveFilter,
        filterState,
        processedList
    }
}

export default useFilter