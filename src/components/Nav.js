import logo from '../img/logo.svg';

const Nav = (props) => {
    return (
        <div className='container'>
            <nav id='navbar'>
                <img src={logo} alt="Little Lemon Logo" id="header-logo" />
                <ul>
                    <li><a href="#" class="current">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;