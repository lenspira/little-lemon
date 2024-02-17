
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
    handleDateChange: jest.fn(),
    handleGuestChange: jest.fn(),
    handleFormSubmit: jest.fn(),
    dateError: false,
    timeError: false,
    guestError: false,
}

test('Renders the BookingForm heading', () => {
    render(<BookingForm {...testProps} />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the Choose Date field', () => {
    render(<BookingForm {...testProps} />);
    const dateElement = screen.getByTestId('date-field');
    expect(dateElement).toBeInTheDocument();
    expect(dateElement.id).toEqual('date');
    expect(dateElement.type).toEqual('date');
    expect(dateElement.className).toEqual('field-valid');
    expect(dateElement.value).toEqual('');
    expect(dateElement.required).toEqual(true);
});

test('Calls the change handler for Choose Date field', () => {
    render(<BookingForm {...testProps} />);
    const dateElement = screen.getByTestId('date-field');
    fireEvent.change(dateElement, { target: { value: '2024-03-01' } });
    expect(testProps.handleDateChange).toHaveBeenCalled();
});

test('Renders the Choose Date field with an error', () => {
    const newProps = {...testProps, dateError: 'This field is required.' }
    render(<BookingForm {...newProps} />);
    const dateElement = screen.getByTestId('date-field');
    expect(dateElement.className).toBe('field-invalid');
    expect(screen.getByText(newProps.dateError)).toBeInTheDocument();
});

test('Renders the Choose Time field', () => {
    render(<BookingForm {...testProps} />);
    const timeElement = screen.getByTestId('time-field');
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.id).toEqual('time');
    expect(timeElement.className).toEqual('field-valid');
    expect(timeElement.value).toEqual(testProps.time);
    expect(timeElement.required).toEqual(true);
});

test('Calls the change handler for Choose Time field', () => {
    render(<BookingForm {...testProps} />);
    const timeElement = screen.getByTestId('time-field');
    fireEvent.change(timeElement, { target: { value: '18:00' } });
    expect(testProps.setTime).toHaveBeenCalled();
});

test('Renders the Choose Time field with an error', () => {
    const newProps = {...testProps, time: '', timeError: 'Please pick another date.' }
    render(<BookingForm {...newProps} />);
    const timeElement = screen.getByTestId('time-field');
    expect(timeElement.className).toBe('field-invalid');
    expect(screen.getByText(newProps.timeError)).toBeInTheDocument();
});

test('Renders the Number of Guests field', () => {
    render(<BookingForm {...testProps} />);
    const guestsElement = screen.getByTestId('guests-field');
    expect(guestsElement).toBeInTheDocument();
    expect(guestsElement.id).toEqual('guests');
    expect(guestsElement.className).toEqual('field-valid');
    expect(guestsElement.value).toEqual(`${testProps.noOfGuests}`);
    expect(guestsElement.required).toEqual(true);
});

test('Calls the change handler for Number of Guests field', () => {
    render(<BookingForm {...testProps} />);
    const guestsElement = screen.getByTestId('guests-field');
    fireEvent.change(guestsElement, { target: { value: '10' } });
    expect(testProps.handleGuestChange).toHaveBeenCalled();
});

test('Renders the Number of Guests field with an error', () => {
    const newProps = {...testProps, noOfGuests: 0, guestError: 'Minimum 1 guest required.' }
    render(<BookingForm {...newProps} />);
    const guestsElement = screen.getByTestId('guests-field');
    expect(guestsElement.className).toBe('field-invalid');
    expect(screen.getByText(newProps.guestError)).toBeInTheDocument();
});

test('Renders the Occasion field', () => {
    render(<BookingForm {...testProps} />);
    const occasionElement = screen.getByTestId('occasion-field');
    expect(occasionElement).toBeInTheDocument();
    expect(occasionElement.id).toEqual('occasion');
    expect(occasionElement.className).toEqual('field-valid');
    expect(occasionElement.value).toEqual(testProps.occasion);
    expect(occasionElement.required).toEqual(true);
});

test('Calls the change handler for the Occasion field', () => {
    render(<BookingForm {...testProps} />);
    const occasionElement = screen.getByTestId('occasion-field');
    fireEvent.change(occasionElement, { target: { value: 'Anniversary' } });
    expect(testProps.setOccasion).toHaveBeenCalled();
});

test('Renders the enabled Submit button', () => {
    render(<BookingForm {...testProps} />);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.className).toContain('btn-primary');
});

test('Renders the disabled Submit button', () =>{
    const newProps = {...testProps, isDisabled: true }
    render(<BookingForm {...newProps} />);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.className).toContain('btn-disabled');
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