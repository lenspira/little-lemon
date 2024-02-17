import React, { useEffect } from "react";
import BookingForm from "./BookingForm";
import reservationImg from "../assets/reservations.jpg"

const BookingPage = (props) => {
    const { fetchTodaysTimes } = props;

    useEffect(() => {
        fetchTodaysTimes();
    }, [])

    return (
        <div id='booking-page'>
            <div className="container">
                <div className="booking-page-header">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className="booking-page-container">
                    <div className="booking-content-left">
                        <BookingForm {...props} />
                    </div>
                    <div className="booking-content-right">
                        <img src={reservationImg} alt="A vacant restaurant table" id="hero-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookingPage;