const BookingForm = (props) => {
    const {
        date,
        setDate,
        time,
        setTime,
        noOfGuests,
        setNoOfGuests,
        occasion,
        setOccasion,
        availableTimes,
        handleFormSubmit
    } = props;

    const getAvailableTimes = () => {
        const newArr = availableTimes && availableTimes.map((slot, index) => {
            return <option key={index}>{slot}</option>
        });
        return newArr;
    }

    return (
        <form id="booking-form" role="form" onSubmit={handleFormSubmit}>
            <h3>Reserve a table for any occasion!</h3>
            <div className="field">
                <label htmlFor="res-date">Choose date:</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className="field">
                <label htmlFor="res-time">Choose time:</label>
                <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                    {getAvailableTimes()}
                </select>
            </div>
            <div className="field">
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="guests"
                    value={noOfGuests}
                    onChange={e => setNoOfGuests(e.target.value)}
                />
            </div>
            <div className="field">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input className="btn btn-primary submitBtn" type="submit" value="Make Your Reservation" />
        </form>
    );
};

export default BookingForm;