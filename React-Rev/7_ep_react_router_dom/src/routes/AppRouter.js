import App from "../App";
import About from "../pages/About";
import Main from "../pages/Main";
import ContactUs from "../pages/Contact";
import Cart from "../pages/Cart";
import Restaurant from "../pages/Restaurant";
import {createBrowserRouter} from 'react-router'

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
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