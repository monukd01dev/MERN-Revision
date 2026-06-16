// import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Nav from './components/Nav';
import "./styles/app.css"
function App(){
    return (
        <div id='wrapper'>
            <Nav/>
            {/* <Header/> */}
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
