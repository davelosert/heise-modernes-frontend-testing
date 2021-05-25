import { Form } from 'react-bootstrap';
import { ValuePicker } from './ValuePicker';
import { convertToFormState, setSelectedDate, setSelectedHour } from './formStateHandler';
import React, { useState } from 'react';

const PickAppointmentForm = ({ dates }) => {
  const [ dateState, setDateState ] = useState(convertToFormState(dates));
  const selectedDate = dateState.find(dateOption => dateOption.selected);

  const handleDateChange = newDate => {
    setDateState(oldState => setSelectedDate(newDate, oldState));
  };

  const handleHourState = newHour => {
    setDateState(oldState => setSelectedHour(newHour, oldState));
  };

  return (
    <Form>
      <Form.Row>
        <label>
          Datum wählen: <ValuePicker options={ dateState } onChange={ handleDateChange } />
        </label>
      </Form.Row>
      <Form.Row>
        <label>
          Uhrzeit wählen: <ValuePicker options={ selectedDate.hours } onChange={ handleHourState } />
        </label>
      </Form.Row>
    </Form>
  );
};

export {
  PickAppointmentForm
};
