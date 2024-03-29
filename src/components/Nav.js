import logo from '../assets/logo.svg';
import NavLink from './NavLink';

const Nav = () => {
    return (
        <div className='container'>
            <nav id='navbar'>
                <img src={logo} alt="Little Lemon Logo" id="header-logo" />
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/booking'>Booking</NavLink></li>
                    <li><NavLink to='/order-online'>Order Online</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;