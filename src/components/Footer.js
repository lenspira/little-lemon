import logo from '../img/footerLogo.png';

const Footer = (props) => {
    return (
        <footer id="main-footer">
            <div className="container footer-container">
                <div>
                    <img src={logo} alt="Little Lemon Logo" id="footer-logo" />
                </div>
                <div>
                    <h3>Site Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>50 Main St, Chicago, IL 60637</li>
                        <li>(555) 123-4567</li>
                        <li>queries@littlelemon.com</li>
                    </ul>
                </div>
                <div className="social">
                    <h3>Follow Us</h3>
                    <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
                </div>
            </div>
      </footer>
    )
};

export default Footer;