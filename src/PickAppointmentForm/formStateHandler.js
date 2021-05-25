const convertToFormState = dates =>
  dates.
    filter(dateDescriptor => dateDescriptor.hours.length > 0).
    map((dateDescriptor, dateIndex) => ({
      value: dateDescriptor.date,
      selected: dateIndex === 0,
      hours: dateDescriptor.hours.map((hour, hourIndex) => ({
        value: hour,
        selected: dateIndex === 0 && hourIndex === 0
      }))
    }));

const selectMatchingField = (compareField, options) => options.map(fieldState => {
  if (fieldState.value === compareField) {
    return { ...fieldState, selected: true };
  }

  return { ...fieldState, selected: false };
});

const setSelectedDate = (selectDate, formState) => selectMatchingField(selectDate, formState);
const setSelectedHour = (selectedHour, formState) => formState.map(dateState => {
  if (dateState.selected) {
    return {
      ...dateState,
      hours: selectMatchingField(selectedHour, dateState.hours)
    };
  }

  return dateState;
});

export {
  convertToFormState,
  setSelectedDate,
  setSelectedHour
};
