import CTAButton from "./CTAButton";
import heroImg from "../img/dish.jpg";

//https://littlelemonproject.com/

const HeroSection = (props) => {
    return (
        <div id="main-hero">
            <div className="container hero-container">
                <div className="hero-content-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <CTAButton id="cta-button" title="Reserve a Table" />
                </div>
                <div className="hero-content-right">
                    <img src={heroImg} alt="A dish from Little Lemon's menu" id="hero-img"/>
                </div>
            </div>
        </div>
    )
};

export default HeroSection;