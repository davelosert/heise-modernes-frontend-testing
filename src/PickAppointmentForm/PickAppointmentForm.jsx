import { ValuePicker } from './ValuePicker';
import { Button, Form } from 'react-bootstrap';
import { convertToFormState, setSelectedDate, setSelectedHour } from './formStateHandler';
import React, { useState } from 'react';

const PickAppointmentForm = ({ dates, onSubmit }) => {
  const [ dateState, setDateState ] = useState(convertToFormState(dates));
  const [ nameState, setNameState ] = useState('');

  const selectedDate = dateState.find(dateOption => dateOption.selected);

  const handleDateChange = newDate => {
    setDateState(oldState => setSelectedDate(newDate, oldState));
  };

  const handleHourState = newHour => {
    setDateState(oldState => setSelectedHour(newHour, oldState));
  };

  const handleNameChange = event => {
    setNameState(event.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({
      date: selectedDate.value,
      hour: selectedDate.hours.find(hour => hour.selected).value,
      name: nameState
    });
  };

  return (
    <Form noValidate={ true } onSubmit={ handleSubmit }>
      <Form.Group>
        <Form.Row>
          <label>
            Datum wählen: <ValuePicker options={ dateState } onChange={ handleDateChange } />
          </label>
        </Form.Row>
      </Form.Group>
      <Form.Row>
        <label>
          Uhrzeit wählen: <ValuePicker options={ selectedDate.hours } onChange={ handleHourState } />
        </label>
      </Form.Row>
      <Form.Row>
        <label>
          Ihr Name: <input type='text' value={ nameState } onChange={ handleNameChange } />
        </label>
      </Form.Row>
      <Form.Row>
        <Button variant='primary' type='submit'>Termin verbindlich buchen</Button>
      </Form.Row>
    </Form>
  );
};

export {
  PickAppointmentForm
};
