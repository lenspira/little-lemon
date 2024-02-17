import aboutImg1 from '../assets/about_interior.png';
import aboutImg2 from '../assets/about_chefs.png';

const AboutSection = () => {
    return (
        <div id="main-about">
            <div className="container about-section-container">
                <div className="about-section-content-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident..</p>
                </div>
                <div className="about-section-content-right">
                    <img src={aboutImg1} alt="Little Lemon restaurant's interior" id="about-interior"/>
                    <img src={aboutImg2} alt="Little Lemon chefs Mario and Adrian" id="about-chefs"/>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;