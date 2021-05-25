const convertToFormState = dates =>
  dates.
    filter(date => date.hours.length > 0).
    map(date => ({
      ...date,
      selected: false,
      hours: date.hours.map(hour => ({
        hour,
        selected: false
      }))
    }));

const setSelectedDate = (selectDate, formState) => formState.map(dateState => {
  if (dateState.date === selectDate) {
    return { ...dateState, selected: true };
  }

  return { ...dateState, selected: false };
});

const setSelectedHour = (selectedHour, formState) => formState.map(dateState => {
  if (dateState.selected) {
    return {
      ...dateState,
      hours: dateState.hours.map(hourState => {
        if (hourState.hour === selectedHour) {
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
