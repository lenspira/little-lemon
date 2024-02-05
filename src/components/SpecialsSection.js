import CTAButton from "./CTAButton";
import Dish from "./Dish";

import dishImg1 from "../img/dish_greekSalad.png";
import dishImg2 from "../img/dish_bruchetta.png";
import dishImg3 from "../img/dish_lemonDessert.png";

const SpecialsSection = (props) => {
    return (
        <div id="main-specials" className="container">
            <div className="specials-container-title flex-row">
                <h2>This Week's Specials!</ h2>
                <CTAButton title="Online Menu" />
            </div>
            <div className="specials-container-grid">
                <Dish
                    id="greekSalad"
                    imgSrc={dishImg1}
                    imgAlt="Little Lemon's Greek salad dish"
                    name="Greek Salad"
                    price="12.99"
                    description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, gamishad with crunchy garlic and rosemary croutons."
                />
                <Dish
                    id="bruchetta"
                    imgSrc={dishImg2}
                    imgAlt="Little Lemon's bruchetta dish"
                    name="Bruchetta"
                    price="5.99"
                    description="Our customer-favorite Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />
                <Dish
                    id="lemonDessert"
                    imgSrc={dishImg3}
                    imgAlt="Little Lemon's lemon dessert"
                    name="Lemon Dessert"
                    price="5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </div>
    )
};

export default SpecialsSection;