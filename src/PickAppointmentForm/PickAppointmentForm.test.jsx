import { assert } from 'assertthat';
import { PickAppointmentForm } from './PickAppointmentForm';
import userEvent from '@testing-library/user-event';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import * as sinon from 'sinon';

describe('PickAppointmentForm', () => {
  afterEach(async () => {
    cleanup();
  });

  it('renders all the given dates.', async () => {
    const mockDates = [
      { date: '27.05.', hours: [ '08:50 Uhr' ]},
      { date: '28.05.', hours: [ '08:50 Uhr' ]}
    ];

    render(<PickAppointmentForm dates={ mockDates } />);

    assert.that(screen.getByLabelText('27.05.')).is.not.null();
    assert.that(screen.getByLabelText('28.05.')).is.not.null();
  });

  it('renders the times of the first date.', async () => {
    const mockDates = [
      { date: '27.05.', hours: [ '08:50 Uhr' ]},
      { date: '28.05.', hours: [ '09:00 Uhr' ]}
    ];

    render(<PickAppointmentForm dates={ mockDates } />);

    assert.that(screen.getByLabelText('08:50 Uhr')).is.not.null();
  });

  it('selects the date on click.', async () => {
    const mockDates = [
      { date: '27.05.', hours: [ '08:50 Uhr' ]},
      { date: '28.05.', hours: [ '09:50 Uhr' ]}
    ];

    render(<PickAppointmentForm dates={ mockDates } />);
    const dateToClick = screen.getByLabelText('28.05.');

    fireEvent.click(dateToClick);

    assert.that(dateToClick.checked).is.true();
  });

  it('selects the hour on click.', async () => {
    const mockDates = [
      { date: '27.05.', hours: [ '08:50 Uhr' ]},
      { date: '28.05.', hours: [ '09:50 Uhr' ]}
    ];

    render(<PickAppointmentForm dates={ mockDates } />);
    fireEvent.click(screen.getByLabelText('28.05.'));

    const hourToClick = screen.getByLabelText('09:50 Uhr');

    fireEvent.click(hourToClick);
    assert.that(hourToClick.checked).is.true();
  });

  it('renders the name input.', async () => {
    const mockDates = [{ date: '27.05.', hours: [ '08:50 Uhr' ]}];

    render(<PickAppointmentForm dates={ mockDates } />);

    const nameInput = screen.getByLabelText('Ihr Name:');

    assert.that(document.body.contains(nameInput)).is.true();
  });

  it('lets the user input the name.', async () => {
    const mockDates = [{ date: '27.05.', hours: [ '08:50 Uhr' ]}];

    render(<PickAppointmentForm dates={ mockDates } />);

    const nameInput = screen.getByLabelText('Ihr Name:');

    userEvent.type(nameInput, 'Kim Müller');
    assert.that(nameInput.value).is.equalTo('Kim Müller');
  });

  it('calls the onSubmit-Callback with the summarized form values.', async () => {
    const mockDates = [{ date: '27.05.', hours: [ '08:50 Uhr' ]}];
    const callback = sinon.fake();

    render(<PickAppointmentForm dates={ mockDates } onSubmit={ callback } />);

    const nameInput = screen.getByLabelText('Ihr Name:');

    userEvent.type(nameInput, 'Kim Müller');

    userEvent.click(screen.getByText('Termin verbindlich buchen'));

    assert.that(callback.called).is.true();
    assert.that(callback.calledWith({
      date: '27.05.',
      time: '08:50 Uhr',
      name: 'Kim Müller'
    }));
  });
});
