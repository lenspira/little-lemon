import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    return (
        <div id='booking-page'>
            <div className="container booking-page-container">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <BookingForm {...props} />
            </div>
        </div>
    )
};

export default BookingPage;