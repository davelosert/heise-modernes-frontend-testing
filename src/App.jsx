import { PickAppointmentForm } from './PickAppointmentForm/PickAppointmentForm';
import React from 'react';

const App = () => (
  <div className='App'>
    <h1>
      Impftermin buchen
    </h1>
    <PickAppointmentForm
      dates={ [
        { date: '21.05.', hours: [ '08:50', '09:00', '09:10' ]},
        { date: '22.05.', hours: [ '09:00', '09:10' ]},
        { date: '23.05.', hours: [ '08:50', '09:00', '09:10' ]}
      ] }
    />
  </div>
);

export default App;
