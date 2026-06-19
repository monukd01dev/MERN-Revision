// import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Nav from './components/Nav';
import "./styles/app.css"
import { Outlet } from "react-router";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import OfflineComponent from "./components/OfflineComponent";
function App(){
    const isOnline = useOnlineStatus()
    return (
        <div id='wrapper'>
            <Nav/>
            <main className="main-content">
                {isOnline ? <Outlet/>: <OfflineComponent/>}
            </main>
            <Footer/>
        </div>
    )
}

export default App
