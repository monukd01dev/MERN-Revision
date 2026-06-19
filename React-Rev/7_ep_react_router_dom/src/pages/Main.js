
import Search from "../components/Search";
import ResturantContainer from "../components/ResturantContainer";
import useRestaurantData from '../../utils/hooks/useRestaurantData'
import useFilters from "../../utils/hooks/useFilter";
import useIntersectionObserver from "../../utils/hooks/useIntersectionObserver";
const Main = function () {

    const { resList, isFetching, fetchMoreData, hasMore } = useRestaurantData();
    

    const { searchText, setSearchText, activeFilter, setActiveFilter, filterState, processedList } = useFilters(resList);


    const observerRef = useIntersectionObserver(() => {
        if (hasMore && !isFetching) {
            fetchMoreData();
        }
    }, [hasMore, isFetching]);


    return (
        <main>
            <div className="main-wrapper">
                <Search
                    setActiveFilter={(filter) => setActiveFilter(filter)}
                    filterState={filterState}
                    searchText={searchText}
                    setSearchText={setSearchText}
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