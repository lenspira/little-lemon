import Testimonial from "./Testimonial";

const TestimonialsSection = () => {
    return (
        <div id="main-testimonials">
            <div className="testimonial-master container">
                <h2>Testimonials</ h2>
                <div className="testimonials-container-grid">
                    <Testimonial
                        id="customer1"
                        imgSrc='https://i.pravatar.cc/150?img=16'
                        imgAlt="Happy Little Lemon customer Maya Perez"
                        rating="5"
                        review="One of the finest restaurants in Chicago! You don't want to miss this place. I have tried their lunch and dinner, as well as their takeouts, and it was excellent every time."
                        name="-Maya Perez"
                    />
                    <Testimonial
                        id="customer2"
                        imgSrc='https://i.pravatar.cc/150?img=12'
                        imgAlt="Happy Little Lemon customer Steve Jordan"
                        rating="5"
                        review="This is the best Mediterranean restaurant around for takeouts! I have ordered from them multiple times, and they always deliver top-quality dishes at affordable prices."
                        name="-Steve Jordan"
                    />
                    <Testimonial
                        id="customer3"
                        imgSrc='https://i.pravatar.cc/150?img=70'
                        imgAlt="Happy Little Lemon customer Amir Khan"
                        rating="4.5"
                        review="Me and my wife dine here often, and no matter what day it is, the food and service never disappoint. If you are in Chicago, you should definitely check them out."
                        name="-Amir Khan"
                    />
                    <Testimonial
                        id="customer4"
                        imgSrc='https://i.pravatar.cc/150?img=35'
                        imgAlt="Happy Little Lemon Shay Li"
                        rating="5"
                        review="I have been to many different Mediterranean restaurants in the area, and nothing comes close to Little Lemon. The food, the vibe, the service - always top notch!"
                        name="-Shay Li"
                    />
                </div>
            </div>
        </div>
    )
};

export default TestimonialsSection;