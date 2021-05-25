import { assert } from 'assertthat';
import { DayPicker } from './DayPicker';
import { cleanup, render } from '@testing-library/react';

describe('DayPicker', () => {
  afterEach(async () => {
    cleanup();
  });

  it('renders the given dates with matching labels.', async () => {
    const mockDates = [
      { date: '21.05.', selected: false },
      { date: '22.05.', selected: false }
    ];

    const { getByLabelText } = render(<DayPicker dates={ mockDates } />);

    assert.that(getByLabelText('21.05.')).is.not.null();
    assert.that(getByLabelText('22.05.')).is.not.null();
  });

  it('marks the selected date as active.', async () => {
    const mockDates = [
      { date: '21.05.', selected: false },
      { date: '22.05.', selected: true }
    ];

    const { getByLabelText } = render(<DayPicker dates={ mockDates } />);

    const selectedOption = getByLabelText('22.05.');

    assert.that(selectedOption.checked).is.true();
  });

  it('fires the callback with the given date-value on click.', async () => {
    const mockDates = [
      { date: '21.05.', selected: false },
      { date: '22.05.', selected: true }
    ];

    const { getByLabelText } = render(<DayPicker dates={ mockDates } />);

    const selectedOption = getByLabelText('22.05.');

    assert.that(selectedOption.checked).is.true();
  });
});
