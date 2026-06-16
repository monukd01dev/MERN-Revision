import "../styles/main.css"
import Search from "./Search";
import ResturantContainer from "./ResturantContainer";
const Main = function(){

    return (
        <main>
            <div className="main-wrapper">
                <Search/>
                <ResturantContainer/>
            </div>
        </main>
    )
};

export default Main;