import { useNavigate } from "react-router-dom";

const ConfirmedBookingPage = () => {
    const navigate = useNavigate();
    return (
        <div id="booking-confirmation-page">
            <div className='container confirmation-container'>
                <h2>Your table reservation has been confirmed!</h2>
                <h3>We look forward to seeing you!</h3>
                <button className='btn btn-primary' onClick={() => navigate("/")}>Return to Home Page</button>
            </div>
        </div>
    )
}

export default ConfirmedBookingPage;