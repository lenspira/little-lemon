import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import UpdateTimesReducer from "./UpdateTimesReducer";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./BookingPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";

const Main = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('18:00');
    const [noOfGuests, setNoOfGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    const initializeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const [availableTimes, dispatch] = useReducer(UpdateTimesReducer, initializeTimes);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    }

    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/booking" element={
                    <BookingPage
                        date={date}
                        setDate={setDate}
                        time={time}
                        setTime={setTime}
                        noOfGuests={noOfGuests}
                        setNoOfGuests={setNoOfGuests}
                        occasion={occasion}
                        setOccasion={setOccasion}
                        availableTimes={availableTimes}
                        setAvailableTimes={() => dispatch({
                            type: 'UPDATE',
                        })}
                        handleFormSubmit={handleFormSubmit}
                    />
                }/>
                <Route path="/order-online" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </main>
    )
};

export default Main;