import logo from '../assets/footerLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="container footer-container">
                <div className="logo">
                    <img src={logo} alt="Little Lemon Logo" id="footer-logo" />
                </div>
                <div>
                    <h3>Site Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking">Booking</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>50 Main St</li>
                        <li>Chicago, IL 60637</li>
                        <li>(555) 123-4567</li>
                        <li>mail@littlelemon.com</li>
                    </ul>
                </div>
                <div className="social">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-2x"></i></a>
                </div>
            </div>
      </footer>
    )
};

export default Footer;