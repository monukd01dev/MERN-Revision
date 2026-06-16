
import Search from "./Search";
import ResturantContainer from "./ResturantContainer";
import { useEffect, useRef, useState } from "react";
import { FIRST_RESTRO_API } from "../../utils/constants";
// 🌟 MOCK DATA DATA ASSETS IMPORT KIYA
import MOCK_SWIGGY_PAGES from "../../utils/mockResponses";

const Main = function () {
    const [resList, setResList] = useState([]);
    //search logic 
    const [searchText, setSearchText] = useState('');
    const [activeFilter, setActiveFilter] = useState("ALL")
    // 💥 INITIAL CHAABI: Pehli bar pagination page 1 ka data fetch karega
    const [offset, setOffset] = useState("mock_page_1");
    const [isFetching, setIsFetching] = useState(false);
    const observerRef = useRef(null);

    //lift up state logic for setSearchTest
    const remoteSetSearchText = (text) => setSearchText(text)
    const filterState = {
        all: 'ALL',
        fast_delivery: 'FAST DELIVERY',
        // high_discount: 'HIGH DISCOUNT',
        high_rating: 'HIGH RATING'
    }
    let processedList = resList.filter((restro) =>
        restro.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    switch (activeFilter) {
        case filterState.all:
            break;
        case filterState.fast_delivery: {
            processedList = [...processedList].sort((a,b)=> a.info.sla.deliveryTime - b.info.sla.deliveryTime)
        }
            break;
        // case filterState.high_discount: {

        // } break;
        case filterState.high_rating: {
            processedList = [...processedList].sort((a,b)=> b.info.avgRating - a.info.avgRating)
        } break;

    }



    useEffect(() => {
        fetchInitialData();
    }, []);

    async function fetchInitialData() {
        console.log("Initial call hua")
        try {
            const response = await fetch(FIRST_RESTRO_API);
            const data = await response.json();

            const api_rest_array = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(api_rest_array)
            if (api_rest_array) {
                setResList(api_rest_array);
                // Initial data load hone ke baad, default setup intact rahega
            }
        } catch (error) {
            console.error("Initial load failed, check public API link:", error);
        }
    }

    // 👀 OBSERVER USEEFFECT: Jab bhi offset, fetching state, YA NAYI LIST aaye, observer update hoga
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && offset && !isFetching) {
                    fetchMoreData();
                }
            },
            { threshold: 0.1 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [offset, isFetching]); // 💥 BADA FIX: Yahan 'resList' add kiya!

    // 🍕 SIMULATED INFINITE SCROLL PIPELINE
    const fetchMoreData = async () => {
        // Agar saare 4 pages load ho chuke hain, toh offset null ho jayega aur trigger ruk jayega
        console.log("mai call ho raha hune")
        if (!offset) return;

        setIsFetching(true);

        try {
            console.log(`Simulating network delay for: ${offset}...`);

            // ⏳ FIRST TIMEOUT: Server response latency check karne ke liye (1 second)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Object lookup check - data file se link pakda
            const mockedResponse = MOCK_SWIGGY_PAGES[offset];

            if (mockedResponse) {
                // ⏳ SECOND TIMEOUT: Data compilation and processing delay simulate karne ke liye (600ms)
                await new Promise((resolve) => setTimeout(resolve, 600));

                // Exact wahi path traversal jo live response ka hota hai
                const newRestaurants = mockedResponse?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                const nextOffsetToken = mockedResponse?.data?.pageOffset?.nextOffset;

                if (newRestaurants) {
                    // Purane elements + naye extracted elements merge kiye
                    // 💥 NAYA MAGIC FIX (The Bouncer Logic):
                    setResList((prevData) => {
                        // 1. Purane saare restaurants ki IDs nikal kar ek Set (VIP Guest List) bana lo
                        const existingIds = new Set(prevData.map((item) => item.info.id));

                        // 2. Naye restaurants mein se sirf unhe aane do jinki ID pehle se list mein nahi hai
                        const uniqueNewRestaurants = newRestaurants.filter(
                            (newItem) => !existingIds.has(newItem.info.id)
                        );

                        console.log(`Bouncer ne ${newRestaurants.length - uniqueNewRestaurants.length} duplicate items ko bahar nikal diya!`);

                        // 3. Ab safely dono arrays ko merge kar do
                        return [...prevData, ...uniqueNewRestaurants];
                    });
                    // Agli scroll cycle ke liye offset token state push kar di
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

    return (
        <main>
            <div className="main-wrapper">
                <Search
                    setActiveFilter={(filter) => setActiveFilter(filter)}
                    filterState={filterState}
                    searchText={searchText}
                    setSearchText={remoteSetSearchText}
                />
                <ResturantContainer
                    resList={processedList}
                    observerTarget={observerRef}
                    isFetching={isFetching}
                    setActiveFilter={(filter) => setActiveFilter(filter)}
                    activeFilter={activeFilter}
                    filterState={filterState}
                />
            </div>
        </main>
    );
};

export default Main;