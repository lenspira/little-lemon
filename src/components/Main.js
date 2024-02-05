import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./Booking";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";

const Main = (props) => {
    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/order-online" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </main>
    )
};

export default Main;