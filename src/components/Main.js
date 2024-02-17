import React, { useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import UpdateTimesReducer from "./UpdateTimesReducer";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./BookingPage";
import ConfirmedBookingPage from "./ConfirmedBooking";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";
import { fetchAPI, submitAPI } from "../utils/api";

const Main = () => {
    const today = new Date().toISOString().substring(0, 10);
    const defaultSubmitBtnText = 'Make Your Reservation';
    const [date, setDate] = useState(today);
    const [time, setTime] = useState('');
    const [noOfGuests, setNoOfGuests] = useState('2');
    const [occasion, setOccasion] = useState('Birthday');
    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [guestError, setGuestError] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [submitBtnText, setSubmitBtnText] = useState(defaultSubmitBtnText);
    const navigate = useNavigate();

    const fetchTodaysTimes = () => {
        fetchData(today);
    }

    useEffect(() => {
        if (dateError !== '' || timeError !== '' || guestError !== '') {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [dateError, timeError, guestError])

    const fetchData = (date) => {
        fetchAPI(date).then((response) => {
            dispatch({ type: 'UPDATE', payload: response});
            setTime(response[0]);
            if(!response[0] || (response[0] && response[0].includes('None available'))) {
                setTimeError('Please pick another date.');
            } else {
                setTimeError('');
            }
        })
    };
    const initializeTimes = () => {
        fetchTodaysTimes()
    };
    const [availableTimes, dispatch] = useReducer(UpdateTimesReducer, [], initializeTimes);

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDate(value);
        if (!value.trim()) {
            dispatch({ type: 'UPDATE', payload: []});
            setDateError('This field is required.');
            setTimeError('');
        } else if (!value.match(/^2024-\d{2}-\d{2}$/)) {
            dispatch({ type: 'UPDATE', payload: []});
            setDateError('Invalid date.');
        } else {
            setDateError('');
            dispatch({ type: 'UPDATE', payload: ['Please wait...']});
            fetchData(value);
        }
    };

    const handleGuestChange = (e) => {
        const value = e.target.value;
        setNoOfGuests(value);
        if (!value.trim()) {
            setGuestError('This field is required.');
        } else if (value < 1) {
            setGuestError('Minimum 1 guest required.');
        } else if (value > 10) {
            setGuestError('Maximum 10 guests allowed.');
        } else {
            setGuestError('');
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitBtnText('Loading...')
        setIsDisabled(true);
        const formData = e.target.elements;
        submitAPI(formData).then((response) => {
            if (response) {
                setSubmitBtnText(defaultSubmitBtnText);
                setIsDisabled(false);
                navigate('/booking-confirmation');
            }
        });
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/booking" element={
                    <BookingPage
                        date={date}
                        time={time}
                        setTime={setTime}
                        noOfGuests={noOfGuests}
                        occasion={occasion}
                        setOccasion={setOccasion}
                        availableTimes={availableTimes}
                        isDisabled={isDisabled}
                        submitBtnText={submitBtnText}
                        handleDateChange={handleDateChange}
                        handleGuestChange={handleGuestChange}
                        handleFormSubmit={handleFormSubmit}
                        dateError={dateError}
                        timeError={timeError}
                        guestError={guestError}
                        fetchTodaysTimes={fetchTodaysTimes}
                    />
                }/>
                <Route path="/booking-confirmation" element={
                    <ConfirmedBookingPage/>
                }/>
                <Route path="/order-online" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </main>
    )
};

export default Main;