const defaultMockApi = {
  loadAvailableDates: async () => Promise.resolve([{
    date: '22.05.', hours: [ '08:50 Uhr' ]
  }])
};

const createMockApi = overwrites => ({
  ...defaultMockApi,
  ...overwrites
});

export {
  createMockApi
};
