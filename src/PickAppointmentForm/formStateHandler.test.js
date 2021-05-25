import { assert } from 'assertthat';
import { convertToFormState, setSelectedDate, setSelectedHour } from './formStateHandler';

describe('formStateHandler', () => {
  describe('convertToFormState', () => {
    it('returns empty array if no dates given.', async () => {
      assert.that(convertToFormState([])).is.equalTo([]);
    });

    it('converts dates and hours to a nested object with "value" and "selected".', async () => {
      const inputDates = [
        { date: '21.05.', hours: [ '08:50' ]}
      ];

      const result = convertToFormState(inputDates);

      assert.that(result).is.equalTo([{
        value: '21.05.',
        selected: false,
        hours: [{ value: '08:50', selected: false }]
      }]);
    });

    it('filters out dates without any available hours.', async () => {
      const inputDates = [{ date: '22.05.', hours: []}];

      const result = convertToFormState(inputDates);

      assert.that(result).is.equalTo([]);
    });
  });

  describe('setSelectedDate', () => {
    it('sets selected to true for the given date.', async () => {
      const formState = [{ value: '21.05.', selected: false, hours: [{ value: '08:50', selected: false }]}];

      const actualFromState = setSelectedDate('21.05.', formState);

      assert.that(actualFromState).is.equalTo([{
        ...formState[0],
        selected: true
      }]);
    });

    it('sets a previously selected date to false.', async () => {
      const formState = [
        { value: '21.05.', selected: false, hours: [{ value: '08:50', selected: false }]},
        { value: '22.05.', selected: true, hours: [{ value: '08:50', selected: false }]}
      ];

      const actualFromState = setSelectedDate('21.05.', formState);

      assert.that(actualFromState).is.equalTo([
        { ...formState[0], selected: true },
        { ...formState[1], selected: false }
      ]);
    });
  });

  describe('setSelectedHour', () => {
    it('sets the hour to true.', async () => {
      const formState = [
        { value: '22.05.', selected: true, hours: [{ value: '08:50', selected: false }]}
      ];

      const actualFromState = setSelectedHour('08:50', formState);

      assert.that(actualFromState).is.equalTo([
        { ...formState[0], hours: [{ value: '08:50', selected: true }]}
      ]);
    });

    it('sets a previously selected hour to false.', async () => {
      const formState = [
        {
          value: '22.05.',
          selected: true,
          hours: [
            { value: '08:50', selected: false },
            { value: '09:00', selected: true }
          ]
        }
      ];

      const actualFromState = setSelectedHour('08:50', formState);

      assert.that(actualFromState).is.equalTo([
        { ...formState[0],
          hours: [
            { value: '08:50', selected: true },
            { value: '09:00', selected: false }
          ]}
      ]);
    });
  });
});
