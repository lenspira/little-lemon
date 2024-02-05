import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='container'>
            <nav id='navbar'>
                <img src={logo} alt="Little Lemon Logo" id="header-logo" />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/booking'>Reservations</Link></li>
                    <li><Link to='/order-online'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;