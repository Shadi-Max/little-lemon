import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TableReservationForm = ({ bookingFormData }) => {
  const initialValues = {
    name: '',
    email: '',
    numOfGuests: '2',
    date: bookingFormData.date || '',
    time: bookingFormData.time || '',
    occasion: bookingFormData.occasion || '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    date: Yup.date().required('Date is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
        setStatus({ success: true, message: 'Form submitted successfully!' });
        resetForm();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
        console.error('Form submission error:', error);
        setStatus({ success: false, message: 'Form submission failed. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, status }) => (
          <Form aria-label="Table Reservation Form">
            <h3>Table Reservation Form</h3>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" aria-describedby="nameError" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" aria-describedby="emailError"/>
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="numOfGuests">Guests:</label>
              <Field as="select" id="numOfGuests" name="numOfGuests" aria-label="Number of Guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Field>
            </div>

            <div>
              <label htmlFor="date">Date:</label>
              <Field type="date" id="date" name="date" aria-describedby="dateError" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="time">Time:</label>
              <Field as="select" id="time" name="time" aria-label="Reservation Time">
                <option value="16">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22">22:00</option>
                <option value="22:30">22:30</option>
                <option value="23">23:00</option>
              </Field>
            </div>

            <div>
              <label htmlFor="occasion">Occasion:</label>
              <Field as="select" id="occasion" name="occasion" aria-label="Reservation Occasion">
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
              </Field>
            </div>

            {errors.submit && (
              <div className="submit-error" aria-live="polite">
                Submission failed. Please try again later.
              </div>
            )}

            {status && (
              <div className={status.success ? 'success-message' : 'error-message'}>
                {status.message}
              </div>
            )}

            <button
              className="submit-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TableReservationForm;
