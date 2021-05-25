import { DayPicker } from './DayPicker';
import { Form } from 'react-bootstrap';
import { convertToFormState, setSelectedDate } from './formStateHandler';
import React, { useState } from 'react';

const PickAppointmentForm = ({ dates }) => {
  const [ formState, setFormState ] = useState(convertToFormState(dates));

  const handleDateChange = newDate => {
    setFormState(oldState => setSelectedDate(newDate, oldState));
  };

  return (
    <Form>
      <DayPicker dates={ formState } onChange={ handleDateChange } />
    </Form>
  );
};

export {
  PickAppointmentForm
};
