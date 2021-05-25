import { assert } from 'assertthat';
import { PickAppointmentForm } from './PickAppointmentForm';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('PickAppointmentForm', () => {
  afterEach(async () => {
    cleanup();
  });

  it('renders the given dates first.', async () => {
    const mockDates = [
      { date: '27.05.', hours: [ '08:50 Uhr' ]},
      { date: '28.05.', hours: [ '08:50 Uhr' ]}
    ];

    render(<PickAppointmentForm dates={ mockDates } />);

    assert.that(screen.getByLabelText('27.05.')).is.not.null();
    assert.that(screen.getByLabelText('28.05.')).is.not.null();
  });

  it('selects the date on click.', async () => {
    const mockDates = [
      { date: '27.05.', hours: [ '08:50 Uhr' ]},
      { date: '28.05.', hours: [ '08:50 Uhr' ]}
    ];

    render(<PickAppointmentForm dates={ mockDates } />);
    const dateToClick = screen.getByLabelText('27.05.');

    fireEvent.click(dateToClick);

    assert.that(dateToClick.checked).is.true();
  });
});
