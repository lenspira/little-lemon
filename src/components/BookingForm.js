const BookingForm = (props) => {
    const {
        date,
        time,
        noOfGuests,
        occasion,
        setOccasion,
        availableTimes = [],
        isDisabled,
        dateError,
        timeError,
        guestError,
        setTime,
        handleDateChange,
        handleGuestChange,
        handleFormSubmit,
        submitBtnText
    } = props;

    const submitBtnClass = isDisabled ? 'btn btn-disabled submitBtn' : 'btn btn-primary submitBtn';
    const dateFieldClass = dateError ? 'field-invalid' : 'field-valid';
    const timeFieldClass = timeError ? 'field-invalid' : 'field-valid';
    const guestFieldClass = guestError ? 'field-invalid' : 'field-valid';

    return (
        <form id="booking-form" data-testid='booking-form' onSubmit={handleFormSubmit}>
            <h2>Reserve a Table</h2>
            <div className="field">
                <label htmlFor="date">Choose Date: <span className="required">*</span></label>
                <input
                    type="date"
                    id="date"
                    className={dateFieldClass}
                    value={date}
                    onChange={e => handleDateChange(e)}
                    required
                    data-testid='date-field'
                />
                {dateError && <p className='error'>{dateError}</p>}
            </div>
            <div className="field">
                <label htmlFor="time">Choose Time: <span className="required">*</span></label>
                <select
                    id="time"
                    className={timeFieldClass}
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    data-testid='time-field'
                    required
                >
                    {availableTimes && availableTimes.map((slot, index) => {
                       return <option key={index}>{slot}</option>
                    })}
                </select>
                {timeError && <p className='error'>{timeError}</p>}
            </div>
            <div className="field">
                <label htmlFor="guests">Number of Guests: <span className="required">*</span></label>
                <input
                    type="number"
                    className={guestFieldClass}
                    min="1"
                    max="10"
                    id="guests"
                    required
                    value={noOfGuests}
                    onChange={e => handleGuestChange(e)}
                    data-testid='guests-field'
                />
                {guestError && <p className='error'>{guestError}</p>}
            </div>
            <div className="field">
                <label htmlFor="occasion">Occasion: <span className="required">*</span></label>
                <select
                    id="occasion"
                    className="field-valid"
                    required
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    data-testid='occasion-field'
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input disabled={isDisabled} className={submitBtnClass} aria-label="On Click" type="submit" value={submitBtnText} />
        </form>
    );
};

export default BookingForm;