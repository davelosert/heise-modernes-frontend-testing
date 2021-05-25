const createFetchApi = () => ({
  loadAvailableDates: async () => fetch('http://localhost:3000/availableDates').
    then(response => response.json())
});

export {
  createFetchApi
};
