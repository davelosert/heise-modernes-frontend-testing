import React from 'react';
import { DayPicker } from './DayPicker';

function App () {
  return (
    <div className='App'>
      <h1>
        Impftermin buchen
      </h1>
      <DayPicker
        dates={ [
          {
            value: '21.05.',
            disabled: false
          },
          {
            value: '22.05.',
            disabled: false
          },
          {
            value: '23.05.',
            disabled: false
          }
        ] }
      />
    </div>
  );
}

export default App;
