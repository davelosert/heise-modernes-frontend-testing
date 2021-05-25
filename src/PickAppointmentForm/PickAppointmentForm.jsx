import { ValuePicker } from './ValuePicker';
import { Form } from 'react-bootstrap';
import { convertToFormState, setSelectedDate } from './formStateHandler';
import React, { useState } from 'react';

const PickAppointmentForm = ({ dates }) => {
  const [ dateState, setDateState ] = useState(convertToFormState(dates));

  const handleDateChange = newDate => {
    setDateState(oldState => setSelectedDate(newDate, oldState));
  };

  return (
    <Form>
      <label>
        Datum wählen: <ValuePicker options={ dateState } onChange={ handleDateChange } />
      </label>
    </Form>
  );
};

export {
  PickAppointmentForm
};
