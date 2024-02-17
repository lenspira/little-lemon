
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";
import UpdateTimesReducer from "../UpdateTimesReducer";

const testProps = {
    date: '',
    setDate: jest.fn(),
    time: '17:00',
    setTime: jest.fn(),
    noOfGuests: 1,
    setNoOfGuests: jest.fn(),
    occasion: 'Birthday',
    setOccasion: jest.fn(),
    availableTimes: ['17:00', '18:00', '19:00'],
    handleFormSubmit: jest.fn()
}

test('Renders the BookingForm heading', () => {
    render(<BookingForm {...testProps} />);
    const headingElement = screen.getByText("Reserve a table for any occasion!");
    expect(headingElement).toBeInTheDocument();
});

test('BookingForm is submitted', () => {
    render(<BookingForm {...testProps} />);
    fireEvent.submit(screen.getByTestId('booking-form'));
    expect(testProps.handleFormSubmit).toHaveBeenCalled();
});

test('initializeTimes returns the expected values', () => {
    render(<BookingForm {...testProps} />);
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
});

test('updateTimes returns the new available times from the api', () => {
    const updateAction = {type: 'UPDATE', payload: ['17:00', '18:30']};
    const updatedState = UpdateTimesReducer(testProps.availableTimes, updateAction);
    expect(updatedState).toEqual(['17:00', '18:30']);
});