import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const DayPicker = ({ dates }) => {
  const buttons = dates.map(dateOption => (
    <ToggleButton
      key={ dateOption.value }
      variant='secondary'
      value={ dateOption.value }
    >{dateOption.value}
    </ToggleButton>
  ));

  return (
    <ToggleButtonGroup name='options'>
      {buttons}
    </ToggleButtonGroup>
  );
};

export {
  DayPicker
};
