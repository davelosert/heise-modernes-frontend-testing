const convertToFormState = dates =>
  dates.
    filter(dateDescriptor => dateDescriptor.hours.length > 0).
    map(dateDescriptor => ({
      value: dateDescriptor.date,
      selected: false,
      hours: dateDescriptor.hours.map(hour => ({
        value: hour,
        selected: false
      }))
    }));

const setSelectedDate = (selectDate, formState) => formState.map(dateState => {
  if (dateState.value === selectDate) {
    return { ...dateState, selected: true };
  }

  return { ...dateState, selected: false };
});

const setSelectedHour = (selectedHour, formState) => formState.map(dateState => {
  if (dateState.selected) {
    return {
      ...dateState,
      hours: dateState.hours.map(hourState => {
        if (hourState.value === selectedHour) {
          return { ...hourState, selected: true };
        }

        return {
          ...hourState,
          selected: false
        };
      })
    };
  }

  return dateState;
});

export {
  convertToFormState,
  setSelectedDate,
  setSelectedHour
};
