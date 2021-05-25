import { assert } from 'assertthat';
import { ValuePicker } from './ValuePicker';
import { cleanup, render } from '@testing-library/react';

describe('ValuePicker', () => {
  afterEach(async () => {
    cleanup();
  });

  it('renders the given values with matching labels.', async () => {
    const mockDates = [
      { value: '21.05.', selected: false },
      { value: '22.05.', selected: false }
    ];

    const { getByLabelText } = render(<ValuePicker options={ mockDates } />);

    assert.that(getByLabelText('21.05.')).is.not.null();
    assert.that(getByLabelText('22.05.')).is.not.null();
  });

  it('marks the selected value as active.', async () => {
    const mockDates = [
      { value: '21.05.', selected: false },
      { value: '22.05.', selected: true }
    ];

    const { getByLabelText } = render(<ValuePicker options={ mockDates } />);

    const selectedOption = getByLabelText('22.05.');

    assert.that(selectedOption.checked).is.true();
  });

  it('fires the callback with the given clicked value on click.', async () => {
    const mockDates = [
      { value: '21.05.', selected: false },
      { value: '22.05.', selected: true }
    ];

    const { getByLabelText } = render(<ValuePicker options={ mockDates } onChange={ } />);

    const selectedOption = getByLabelText('22.05.');

    assert.that(selectedOption.checked).is.true();
  });
});
