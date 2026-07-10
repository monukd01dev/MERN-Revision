import App from "../App";
import About from "../pages/About";
import Main from "../pages/Main";
import ContactUs from "../pages/Contact";
import Cart from "../pages/Cart";
import Restaurant from "../pages/Restaurant";
import {createBrowserRouter} from 'react-router'
import appStore from "../redux/appStore";
import { Provider } from "react-redux";
const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Provider store={appStore}><App/></Provider>,
        children : [
            {
                path: '/',
                element : <Main/>
            },
            {
                path: 'contact-us',
                element : <ContactUs/>
            },
            {
                path: 'about-us',
                element : <About/>
            },
            {
                path: 'cart',
                element : <Cart/>
            },
            {
                path:'/restaurants/:resName/:resId',
                element: <Restaurant/>
            }

        ]
    }]
)
export default AppRouter