import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const DayPicker = ({ dates, onChange }) => {
  const selectedOption = dates.find(dateOption => dateOption.selected);
  const buttons = dates.map(dateOption => (
    <ToggleButton
      key={ dateOption.date }
      variant='secondary'
      value={ dateOption.date }
    >{dateOption.date}
    </ToggleButton>
  ));

  return (
    <ToggleButtonGroup
      value={ selectedOption?.date }
      onChange={ onChange }
      name='options'
    >
      {buttons}
    </ToggleButtonGroup>
  );
};

export {
  DayPicker
};
