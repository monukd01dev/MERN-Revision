import { Link } from 'react-router'; // Hamesha react-router
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Nav = function() {

    const cartItems = useSelector(store=> store.cart.items);
    console.log(cartItems)
    return (
        <nav>
            <div className="head-wrapper">
                <Link to='/'>
                    <div className="logo-con">
                        <div className="img-con">
                            <img src={'app_icon.9c624b71.png'} alt="Crave Dash Logo" />
                        </div>
                        <p>Crave Dash</p>
                    </div>
                </Link>
                <div className="nav-item">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about-us'>About</Link></li>
                        <li><Link to='/contact-us'>Contact-Us</Link></li>
                        <li><Link to='/cart'><FaCartShopping /> ({cartItems.length})</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;