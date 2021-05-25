import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const ValuePicker = ({ options, onChange }) => {
  const selectedOption = options.find(option => option.selected);
  const buttons = options.map(option => (
    <ToggleButton
      key={ option.value }
      variant='secondary'
      value={ option.value }
    >{option.value}
    </ToggleButton>
  ));

  return (
    <ToggleButtonGroup
      value={ selectedOption?.value }
      onChange={ onChange }
      name='options'
    >
      {buttons}
    </ToggleButtonGroup>
  );
};

export {
  ValuePicker
};
