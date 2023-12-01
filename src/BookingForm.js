import React, { useReducer } from 'react';

const BookingForm = ({ availableTimes, dispatch, updateAvailableTimes }) => {
  const initialState = {
    persons: 1,
    date: '',
    time: '17:00',
    occasions: ['Birthday', 'Anniversary', 'Other'],
    occasion: 'Birthday',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_PERSONS':
        return { ...state, persons: action.payload };
      case 'UPDATE_DATE':
        return { ...state, date: action.payload };
      case 'UPDATE_TIME':
        return { ...state, time: action.payload };
      case 'UPDATE_OCCASION':
        return { ...state, occasion: action.payload };
      default:
        return state;
    }
  };

  const [state, localDispatch] = useReducer(reducer, initialState);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    localDispatch({ type: 'UPDATE_DATE', payload: selectedDate });
    updateAvailableTimes(selectedDate);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    localDispatch({ type: 'UPDATE_TIME', payload: selectedTime });
  };

  const handlePersonsChange = (e) => {
    const selectedPersons = e.target.value;
    localDispatch({ type: 'UPDATE_PERSONS', payload: selectedPersons });
  };

  const handleOccasionChange = (e) => {
    const selectedOccasion = e.target.value;
    localDispatch({ type: 'UPDATE_OCCASION', payload: selectedOccasion });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', state);
  };

  return (
    <div className="reservation">
      <div className='container'>
        <h2>RESERVATION</h2>
        <form onSubmit={handleReservationSubmit}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={state.date}
            onChange={handleDateChange}
            required
          /><br /><br />
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={state.time}
            onChange={handleTimeChange}
            required
          >
            {['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select><br /><br />
          <label htmlFor="persons">Number of Persons</label>
          <select
            id="persons"
            name="persons"
            value={state.persons}
            onChange={handlePersonsChange}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <br /><br />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={state.occasion}
            onChange={handleOccasionChange}
            required
          >
            {state.occasions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <br /><br />
          <button className='sec-btn' type="submit">Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
